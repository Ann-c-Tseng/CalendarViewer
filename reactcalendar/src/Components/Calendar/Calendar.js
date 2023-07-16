import React from 'react';
import '../Stylings/Calendar.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {getYear, getMonth, monDisplay} from '../Calendar/DateFunctions.js';

class Calendar extends React.Component {
    render() {
        var year = getYear();
        var month = getMonth();

        return (
            <div className="calendarContainer">
                <div className="calendarHeader">
                    <h1>{month} {year}</h1>
                    <button className="arrowBack"> <ArrowBackIosNewIcon /> </button>
                    <button className="arrowForward"> <ArrowForwardIosIcon /> </button>
                </div>

                <div className="daysDisplay">
                    <div className="weekDayDiv" id="day1Div">
                        <h5>Mon</h5>
                        {monDisplay()}
                        {/* <p>15</p><p>15</p><p>15</p><p>15</p><p>15</p><p>15</p><p>15</p> */}
                    </div>
                    <div className="weekDayDiv" id="day2Div">
                        <h5>Tue</h5>
                        {/* <p>15</p><p>15</p><p>15</p><p>15</p><p>15</p><p>15</p><p>15</p> */}
                    </div>
                    <div className="weekDayDiv" id="day3Div">
                        <h5>Wed</h5>
                        {/* <p>15</p><p>15</p><p>15</p><p>15</p><p>15</p><p>15</p><p>15</p> */}
                    </div>
                    <div className="weekDayDiv" id="day4Div">
                        <h5>Thu</h5>
                        {/* <p>15</p><p>15</p><p>15</p><p>15</p><p>15</p><p>15</p><p>15</p> */}
                    </div>
                    <div className="weekDayDiv" id="day5Div">
                        <h5>Fri</h5>
                        {/* <p>15</p><p>15</p><p>15</p><p>15</p><p>15</p><p>15</p><p>15</p> */}
                    </div>
                    <div className="weekDayDiv" id="day6Div">
                        <h5>Sat</h5>
                        {/* <p>15</p><p>15</p><p>15</p><p>15</p><p>15</p><p>15</p><p>15</p> */}
                    </div>
                    <div className="weekDayDiv" id="day7Div">
                        <h5>Sun</h5>
                        {/* <p>15</p><p>15</p><p>15</p><p>15</p><p>15</p><p>15</p><p>15</p> */}
                    </div>
                </div>
            </div>
        );
    }
}

export {Calendar};

