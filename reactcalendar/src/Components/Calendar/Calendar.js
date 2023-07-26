import React from 'react';
import '../Stylings/Calendar.css';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {getYear, getMonthName, getMonthNum, getDay, generateWeekDivs, generateMonths, generateYears} from '../Calendar/DateFunctions.js';
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

        // this.state = {
        //     currentYear: 2024,
        //     currentMonthName: "March",
        //     currentMonthNum: 3,
        //     currentDay: 11,
        //     selectedYear: "",
        //     selectedMonth: "",
        //     selectedDay: "",
        //     userClickedDate: "",
        //     userClickedData: "",
        // }

        // this.handleBackwardClick = this.handleBackwardClick.bind(this)
        // this.handleForwardClick = this.handleForwardClick.bind(this)
    }
    
    render() {
        return (
            <div className='calendarContainer'>
                {/* <div className="titleToggle"> <h2>{this.state.currentMonthName} {this.state.currentYear}</h2></div> */}
                <div className="titleToggle"> 
                    <select>
                        {generateMonths(this.state.currentMonthName, this.state.currentMonthNum)}
                    </select>
                    <select>
                        {generateYears(this.state.currentYear)}
                    </select>
                </div>

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

