import React from 'react';
import '../Stylings/Calendar.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export function Calendar() {
    // var x = 0;

    // function addOne() {
    //     x = x + 1;
    //     console.log(x);
    // }

    return (
        <div className="calendarContainer">
            <div className="calendarHeader">
                <h1>July 2023</h1>
                <button className="arrowBack" /*onClick={addOne}*/> <ArrowBackIosNewIcon /> </button>
                <button className="arrowForward"> <ArrowForwardIosIcon /> </button>
            </div>

            <div className="weekHeader">
                <h5>Mon</h5>
                <h5>Tue</h5>
                <h5>Wed</h5>
                <h5>Thu</h5>
                <h5>Fri</h5>
                <h5>Sat</h5>
                <h5>Sun</h5>
            </div>

            

        </div>
    );
}