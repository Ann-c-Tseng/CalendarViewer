import React from 'react';
import '../Stylings/Calendar.css';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {getYear, getMonthName, getMonthNum, getDay, generateWeekDivs, getDaysArray, countWeekRows} from '../Calendar/DateFunctions.js';
// import {EventForm} from '../EventForm/EventForm';

class Calendar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentYear: getYear(),
            currentMonthName: getMonthName(0),
            currentMonthNum: getMonthNum(),
            currentDay: getDay(),
            selectedYear: "",
            selectedMonth: "",
            selectedDay: "",
            userClickedDate: "",
            userClickedData: "",
        }
        // this.state = {year: getYear(), month: getMonthName(0), monthNum: getMonthNum()}
        // this.state = {year: 2024, month: "Jan", monthNum: 1}
        // this.handleBackwardClick = this.handleBackwardClick.bind(this)
        // this.handleForwardClick = this.handleForwardClick.bind(this)
    }
    
    render() {
        return (
            <div className='calendarContainer'>
                <div className="titleToggle"> <h2>Month Year</h2></div>
                <div className='weekHeader'>
                    <h5>Mon</h5><h5>Tue</h5><h5>Wed</h5><h5>Thu</h5><h5>Fri</h5><h5>Sat</h5><h5>Sun</h5>
                </div>
                <div className="weekHolders">
                    {generateWeekDivs(7, 2023)}
                </div>
            </div>
        );
    }
}

export {Calendar};

