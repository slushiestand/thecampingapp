import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 20vh;
    background-color: #505050;
    font-family: Arial;


}`

const TypeContainer = styled.div`{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 50px;
    background-color: #505050;
    font-family: Arial;
}`
const City = styled.div`{
    font-size: 20px;
    color: #ffffff;
}`
const Type = styled.button`{
    width: 12em;
    height: 30px;
    margin: 20px;
    font-size: 1em;
    border-radius: 5px;
}`
const Verdict = styled.span`{
    font-size: 2em;
    color: black;
    background-color: #505050;
    font-family: Arial;
    color: #ffffff;
    text-align: center;

    @media (max-width: 745px) {
        font-size: 1em;
      }
}`
class ForecastType extends Component {
    state = {
        hourly: true
    }

    toggleForcast = () => {
        this.setState({
            hourly: !this.state.hourly
        })
        this.props.toggleState(this.state.hourly)
    }

    render(){
        let { city, disabled, verdict } = this.props
        return (
            <Container>
            <TypeContainer>
                <City>{city}</City>
                <Type onClick={this.toggleForcast} disabled={disabled}> 
                    {this.state.hourly === true ? '3 hour forecast' : '5 day forecast'} 
                </Type>
            </TypeContainer>
            <Verdict>{verdict}</Verdict>
            </Container>

        )
    }
}

export default ForecastType