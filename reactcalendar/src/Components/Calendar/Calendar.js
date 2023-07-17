import React from 'react';
import '../Stylings/Calendar.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {getYear, getMonth, getMonthNum, dayDisplay, priorMonthDays, futureMonthDays} from '../Calendar/DateFunctions.js';

class Calendar extends React.Component {
    render() {
        //Current year and month
        var year = getYear();
        var month = getMonth();
        var monthNum = getMonthNum();

        //Testing edge case:
        // Given 2024 is a leap year, and March 2024 having the 31st end on a Sunday -> Test displayed correctly!
        // var year = 2024;
        // var month = "March";
        // var monthNum = 3;

        return (
            <div className="calendarContainer">
                <div className="calendarHeader">
                    <h1>{month} {year}</h1>
                    <div className="toggleArrows">
                        <button className="arrowBack"> <ArrowBackIosNewIcon /> </button>
                        <button className="arrowForward"> <ArrowForwardIosIcon /> </button>
                    </div>
                </div>

                <div className="daysDisplay">
                    <div className="weekDayDiv" id="day1Div">
                        <h5>Mon</h5>
                        {/*Todo: insert prior month days/future month days before and after (respectively) dayDisplay is called!*/}
                        <h5 className="priorMonthValue">{priorMonthDays(1, monthNum, year)}</h5>
                        {dayDisplay(1, monthNum, year).map((num) => {
                            return <h5>{num}</h5>;
                        })}
                        <h5 className="futureMonthValue">{futureMonthDays(1, monthNum, year)}</h5>
                    </div>
                    <div className="weekDayDiv" id="day2Div">
                        <h5>Tue</h5>
                        <h5 className="priorMonthValue">{priorMonthDays(2, monthNum, year)}</h5>
                        {dayDisplay(2, monthNum, year).map((num) => {
                            return <h5>{num}</h5>;
                        })}
                        <h5 className="futureMonthValue">{futureMonthDays(2, monthNum, year)}</h5>
                    </div>
                    <div className="weekDayDiv" id="day3Div">
                        <h5>Wed</h5>
                        <h5 className="priorMonthValue">{priorMonthDays(3, monthNum, year)}</h5>
                        {dayDisplay(3, monthNum, year).map((num) => {
                            return <h5>{num}</h5>;
                        })}
                        <h5 className="futureMonthValue">{futureMonthDays(3, monthNum, year)}</h5>
                    </div>
                    <div className="weekDayDiv" id="day4Div">
                        <h5>Thu</h5>
                        <h5 className="priorMonthValue">{priorMonthDays(4, monthNum, year)}</h5>
                        {dayDisplay(4, monthNum, year).map((num) => {
                            return <h5>{num}</h5>;
                        })}
                        <h5 className="futureMonthValue">{futureMonthDays(4, monthNum, year)}</h5>
                    </div>
                    <div className="weekDayDiv" id="day5Div">
                        <h5>Fri</h5>
                        <h5 className="priorMonthValue">{priorMonthDays(5, monthNum, year)}</h5>
                        {dayDisplay(5, monthNum, year).map((num) => {
                            return <h5>{num}</h5>;
                        })}
                        <h5 className="futureMonthValue">{futureMonthDays(5, monthNum, year)}</h5>
                    </div>
                    <div className="weekDayDiv" id="day6Div">
                        <h5>Sat</h5>
                        <h5 className="priorMonthValue">{priorMonthDays(6, monthNum, year)}</h5>
                        {dayDisplay(6, monthNum, year).map((num) => {
                            return <h5>{num}</h5>;
                        })}
                        <h5 className="futureMonthValue">{futureMonthDays(6, monthNum, year)}</h5>
                    </div>
                    <div className="weekDayDiv" id="day7Div">
                        <h5>Sun</h5>
                        <h5 className="priorMonthValue">{priorMonthDays(7, monthNum, year)}</h5>
                        {dayDisplay(7, monthNum, year).map((num) => {
                            return <h5>{num}</h5>;
                        })}
                        <h5 className="futureMonthValue">{futureMonthDays(7, monthNum, year)}</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export {Calendar};

