import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-family: Arial;
    font-size: 20px;
    background-color: #f2f2f2;
    height: 75px;
    width: 900px;
    border-radius: 10px;
    margin-top: 5px;
    margin-bottom: 5px;

}`
const DayAndTime = styled.div`{
    display: flex;
    flex-direction: column
}`
const Day = styled.div`{
    font-size: 30px;
    margin-left: 10px;
}`
const Time = styled.div`{
    margin-left: 10px;
}`
const Conditions = styled.div`{
    display: flex;
    flex-direction: row;
}`
const Temp = styled.div`{
    width: 250px;
}`
const MainWeather = styled.div`{
    width: 250px;
}`
const Humidity = styled.div`{
    margin-right: 10px;
    width: 100px;
}`

const Hourly = (props) => { 
    return (
        <Container>
            <DayAndTime>
                <Day> {props.day} </Day>
                <Time> {props.time} </Time>
            </DayAndTime>
            <Conditions>
                <MainWeather> {props.weather} </MainWeather>
                <Temp> {props.temp}{'\u00b0'}F </Temp>
                <Humidity> {props.humidity}% </Humidity>
            </Conditions>
        </Container>
    )
}

export default Hourly