import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 300px;
    background-color: #b34700;
    font-family: Arial;
    color: white;
}`

const Title = styled.div`{
    font-size: 4em;
    color: white;
    font-family: Arial;

    @media (max-width: 745px) {
        font-size: 2em;
      }
}`

const Subtitle = styled.div`{
    font-size: 3em;
    color: white;
    font-family: Arial;

    @media (max-width: 745px) {
        font-size: 1em;
      }
}`

const SearchBar = styled.input`{
    width: 15em;
    height: 50px;
    margin-left: 15px;
    margin-top: 10px;
    font-size: 20px;
    
}`

const Submit = styled.button`{
    width: 6em;
    height: 57px;
    margin-left: 20px;
    font-size: 20px;
    background-color: #505050;
    color: #ffffff;
}`

class Search extends Component {
    state = {
        city: ''
    }

    getCity = e => {
        const city = e.target.value;
        this.setState({ city });
    }
    onSubmit = e => {
        e.preventDefault();
        const city = this.state.city
        this.props.searchCity(city)
    }
    
    render(){
        let error = this.props.error
        return (
            <Container>
            <Title> The Camping App </Title>
            <Subtitle> Should you go camping? </Subtitle>
            <form onSubmit={(e) => this.onSubmit(e)}>
            <SearchBar type="text" placeholder="Enter a City Name"
			value={this.state.city}
			onChange={this.getCity}
			/>
            <Submit type='submit'>GO</Submit>
            </form>
            {error}

            </Container>
        )
    }
}

export default Search