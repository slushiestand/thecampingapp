import React, { Component } from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`{
    display: flex;
    flex-direction: column;
    font-family: Arial;
    height: 250px;
    width: 200px;
    background-color: grey;
    padding: 5px;
    border-radius: 15px;
    margin-left: 5px;
    margin-right: 5px;
}`

const CardHeader = styled.div`{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50px;
    background-color: white;
    border-radius: 10px 10px 0px 0px;
}`

const Day = styled.div`{
    font-size: 25px;
    margin-left: 10px;
}`

const Date = styled.div`{
    font-size: 15px;
    margin-left: 10px;
}`

const CardBody = styled.div`{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 150px;
    background-color: #f2f2f2;
}`
const TempContainer = styled.div `{
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}`

const Temp = styled.div`{
    font-size: 50px;
}`

const MaxMinContainer = styled.div `{
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}`

const MaxMin = styled.div `{
    font-size: 25px;
}`

const CardFooter = styled.div`{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50px;
    background-color: #f2f2f2;
    border-radius: 0px 0px 10px 10px;
}`

const Condition = styled.div`{
    font-size: 15px;
}`

const Daily = (props) => {
    return (
        <CardContainer>
        <CardHeader>
            <Day> {props.day} </Day>
            <Date> {props.date} </Date>
        </CardHeader>
        <CardBody>
            <TempContainer>
                <Temp> {props.maxTemp}{'\u00b0'} </Temp>
                <Temp> {props.minTemp}{'\u00b0'} </Temp>
            </TempContainer>

            <MaxMinContainer>
                <MaxMin> high </MaxMin>
                <MaxMin> low </MaxMin>
            </MaxMinContainer>      
        </CardBody>
        <CardFooter>
            <Condition> {props.weather} </Condition>
        </CardFooter>
        </CardContainer>
    ) 
}

export default Daily