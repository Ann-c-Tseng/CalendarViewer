import React from 'react';
import '../Stylings/Calendar.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {getYear, getMonthName, getMonthNum, dayDisplay, priorMonthDays, futureMonthDays} from '../Calendar/DateFunctions.js';

class Calendar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {msg: "Hello there!"}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({msg: "this is a test..."})
    }

    render() {
        //Current year and month
        var year = getYear();
        var month = getMonthName();
        var monthNum = getMonthNum();

        //Testing edge case:
        // Given 2024 is a leap year, and March 2024 having the 31st end on a Sunday -> Test displayed correctly!
        // var year = 2024;
        // var month = "March";
        // var monthNum = 3;

        // function hello(e) {
        //     e.preventDefault();
        //     if(monthNum === 1) {
        //         monthNum = 12;
        //         year = year-1;
        //         month = "Dec";
        //     } else {
        //         monthNum = monthNum - 1;
        //         month = "test";
        //     }

        //     console.log(monthNum + " " + year + " " + month)
        // }

        return (
            <div className="calendarContainer">
                                                    <p>{this.state.msg}</p>
                <div className="calendarHeader">
                    <h1>{month} {year}</h1>
                    <div className="toggleArrows">
                        <button className="arrowBack" onClick={this.handleClick}> <ArrowBackIosNewIcon /> </button>
                        <button className="arrowForward"> <ArrowForwardIosIcon /> </button>
                    </div>
                </div>

                <div className="daysDisplay">
                    <div className="weekDayDiv" id="day1Div">
                        <h5>Mon</h5>
                        {priorMonthDays(1, monthNum, year)}
                        {dayDisplay(1, monthNum, year).map((num) => {
                            return <button className="currentMonthValue"><h5>{num}</h5></button>;
                        })}
                        {futureMonthDays(1, monthNum, year)}
                    </div>
                    <div className="weekDayDiv" id="day2Div">
                        <h5>Tue</h5>
                        {priorMonthDays(2, monthNum, year)}
                        {dayDisplay(2, monthNum, year).map((num) => {
                            return <button className="currentMonthValue"><h5>{num}</h5></button>;
                        })}
                        {futureMonthDays(2, monthNum, year)}
                    </div>
                    <div className="weekDayDiv" id="day3Div">
                        <h5>Wed</h5>
                        {priorMonthDays(3, monthNum, year)}
                        {dayDisplay(3, monthNum, year).map((num) => {
                            return <button className="currentMonthValue"><h5>{num}</h5></button>;
                        })}
                        {futureMonthDays(3, monthNum, year)}
                    </div>
                    <div className="weekDayDiv" id="day4Div">
                        <h5>Thu</h5>
                        {priorMonthDays(4, monthNum, year)}
                        {dayDisplay(4, monthNum, year).map((num) => {
                            return <button className="currentMonthValue"><h5>{num}</h5></button>;
                        })}
                        {futureMonthDays(4, monthNum, year)}
                    </div>
                    <div className="weekDayDiv" id="day5Div">
                        <h5>Fri</h5>
                        {priorMonthDays(5, monthNum, year)}
                        {dayDisplay(5, monthNum, year).map((num) => {
                            return <button className="currentMonthValue"><h5>{num}</h5></button>;
                        })}
                        {futureMonthDays(5, monthNum, year)}
                    </div>
                    <div className="weekDayDiv" id="day6Div">
                        <h5>Sat</h5>
                        {priorMonthDays(6, monthNum, year)}
                        {dayDisplay(6, monthNum, year).map((num) => {
                            return <button className="currentMonthValue"><h5>{num}</h5></button>;
                        })}
                        {futureMonthDays(6, monthNum, year)}
                    </div>
                    <div className="weekDayDiv" id="day7Div">
                        <h5>Sun</h5>
                        {priorMonthDays(7, monthNum, year)}
                        {dayDisplay(7, monthNum, year).map((num) => {
                            return <button className="currentMonthValue"><h5>{num}</h5></button>;
                        })}
                        {futureMonthDays(7, monthNum, year)}
                    </div>
                </div>
            </div>
        );
    }
}

export {Calendar};

