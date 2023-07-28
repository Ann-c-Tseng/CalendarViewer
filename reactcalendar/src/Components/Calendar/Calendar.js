import React from 'react';
import '../Stylings/Calendar.css';
import {getYear, getMonthNum, getMonthName, generateWeekDivs, generateMonths, generateYears} from '../Calendar/DateFunctions.js';
import {useState} from 'react';

function Calendar() {
    //currentMonth and currentYear based on user's official month and year date
    const [currentMonth] = useState(getMonthNum);
    const [currentYear] = useState(getYear);

    //selectedMonth and selectedYear based on user's toggling of select element, initially set to currentMonth and currentYear
    const [selectedMonth, setSelectedMonth] = useState(currentMonth);
    const [selectedYear, setSelectedYear] = useState(currentYear);

    function changeMonth(event) {
        const m = event.target.value;
        if(m === "January") {
            setSelectedMonth(1);
        } else if(m === "February") {
            setSelectedMonth(2);
        } else if(m === "March") {
            setSelectedMonth(3);
        } else if(m === "April") {
            setSelectedMonth(4);
        } else if(m === "May") {
            setSelectedMonth(5);
        } else if(m === "June") {
            setSelectedMonth(6);
        } else if(m === "July") {
            setSelectedMonth(7);
        } else if(m === "August") {
            setSelectedMonth(8);
        } else if(m === "September") {
            setSelectedMonth(9);
        } else if(m === "October") {
            setSelectedMonth(10);
        } else if(m === "November") {
            setSelectedMonth(11);
        } else {
            setSelectedMonth(12);
        }
    }

    function changeYear(event) {
        const y = Number(event.target.value); 
        setSelectedYear(y);
    }

    return (
        <div className='calendarContainer'>
            <div className="titleToggle"> 
                <select 
                    className="selectMonths"
                    defaultValue={getMonthName(currentMonth)}
                    onChange={changeMonth}
                >
                    {generateMonths()}
                </select>
                <select 
                    className="selectYears"
                    defaultValue={currentYear}
                    onChange={changeYear}
                >
                    {generateYears(currentYear)}
                </select>
            </div>

            <div className='weekHeader'>
                <h5>Mon</h5><h5>Tue</h5><h5>Wed</h5><h5>Thu</h5><h5>Fri</h5><h5>Sat</h5><h5>Sun</h5>
            </div>
            <div id="weekHolders">
                {generateWeekDivs(selectedMonth, selectedYear)}
            </div>
        </div>
    );
}

export default Calendar;

