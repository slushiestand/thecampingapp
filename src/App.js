import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Search from './components/Search'
import ForecastType from './components/ForecastType'
import Daily from './components/Daily'
import TitleBlock from './components/TitleBlock'
import Hourly from './components/Hourly'
import { groupBy } from './helpers'

const Row = styled.div`{
  display: flex;
  flex-direction: row;
  background-color: #cccccc;
  justify-content: center;
  padding-top: 50px;
  height: 100vh;
}`
const Column = styled.div`{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #cccccc;
}`

class App extends Component {
  state = {
    data: [],
    city: '',
    error: '',
    hourly: true,
    disabled: true,
    verdict: '',
  }
  //receive toggle state from ForecastType component and lift to App component state
  handleToggle = () => {
    this.setState({
      hourly: !this.state.hourly
    })
  }
  //get data of city from search
  searchCity = (city) => {
    const API_KEY = process.env.REACT_APP_API_KEY
    const URL = `http://api.openweathermap.org/data/2.5/forecast?q=${city},us&APPID=${API_KEY}`
    const headers = {'Content-Type': 'application/json'}
    axios.get(URL, { headers })
      .then(res => {
        this.setState({ 
          data: res.data.list, 
          city: res.data.city.name, 
          error: '',
          disabled: false,
          verdict: "Unless it's July in Texas the answer is always yes. Pack appropriately and go!"
        })
      }).catch(err => {
        this.setState({ error: 'Please enter a USA city name'})

      })
  }

  //following functions format data for UI display
  getDayOfWeek = (date) => {
    let dayOfWeek = new Date(date).getDay(); 
    return isNaN(dayOfWeek) ? null : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][dayOfWeek];
  }

  trimDate = (longDate) => {
    let date = longDate.slice(0,10)
    return date
  }

  formatTime = (time) => {
    if (time == 0) {
      return 'midnight'
    } else if (time == 12) {
      return 'noon'
    } else if (time < 12) {
      let newTime = time.slice(2,3)
      return `${newTime} am`
    } else if (time > 12) {
      let newTime = time - 12
      return `${newTime} pm`
    }
  }

  trimTime = (longTime) => {
    let time = longTime.slice(10,13)
    return time
  }

  tempConversion = (temp) => {
    let Ftemp = (temp-273.15) * 9/5 + 32
    return Math.round(Ftemp)
}

  render() {
    const data = this.state.data
    //group array by date for daily weather report, uses generic helper function
    const groupedByDate = groupBy(data, cityData => cityData.dt_txt.slice(0,10))
    const arrayGroupedByDate = Array.from(groupedByDate, ([key, value]) => value)
    return (
      <div>
          <Search searchCity={this.searchCity} error={this.state.error}/>
          <ForecastType 
            toggleState={this.handleToggle} 
            city={this.state.city}
            disabled={this.state.disabled}
            verdict={this.state.verdict}
            />
          {this.state.hourly
          ? <Column>
            {this.state.data.length < 1 ? null : <TitleBlock />}
              {this.state.data.map((cityData) => 
              <Hourly
              key={cityData.dt} 
              temp={this.tempConversion(cityData.main.temp)}
              weather={cityData.weather[0].main}
              humidity={cityData.main.humidity}
              day={this.getDayOfWeek(this.trimDate(cityData.dt_txt))}
              time={this.formatTime(this.trimTime(cityData.dt_txt))}
              />)}
            </Column>
          : <Row> 
              {arrayGroupedByDate.map((dailyData) =>
              <Daily
              key={dailyData[0].dt}
              day={this.getDayOfWeek(this.trimDate(dailyData[0].dt_txt))}
              date={this.trimDate(dailyData[0].dt_txt)}
              minTemp={this.tempConversion(Math.min(...(dailyData.map((data) => data.main.temp_min))))}
              maxTemp={this.tempConversion(Math.max(...(dailyData.map((data) => data.main.temp_max))))}
              weather={dailyData[0].weather[0].main}
              />)}
            </Row>
          }
      </div>
    );
  }
}
export default App;