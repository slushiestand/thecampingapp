import React from 'react'
import styled from 'styled-components'

const Container = styled.div`{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 75px;
    width: 900px;
    background-color: #f2f2f2;
    font-size: 25px;
    border-radius: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-family: Arial
}`
const DayAndTime = styled.div`{
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    width: 260px
}`

const Conditions = styled.div`{
    display: flex;
    flex-direction: row;
}`

const Temp = styled.div`{
    width: 250px;
}`

const MainWeather = styled.div`{
    width: 240px;
}`

const Humidity = styled.div`{
    margin-right: 10px;
    width: 100px;
}`

const TitleBlock = () => {
    return(
    <Container>
        <DayAndTime>
            Day
        </DayAndTime>
        <Conditions>
            <MainWeather> Condition </MainWeather>
            <Temp> Temperature </Temp>
            <Humidity> Humidity </Humidity>
        </Conditions>
    </Container>
    )
}

export default TitleBlock