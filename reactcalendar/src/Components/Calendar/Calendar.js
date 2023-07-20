import React from 'react';
import '../Stylings/Calendar.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {getYear, getMonthName, getMonthNum, dayDisplay, priorMonthDays, futureMonthDays} from '../Calendar/DateFunctions.js';

class Calendar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {year: getYear(), month: getMonthName(0), monthNum: getMonthNum()}
        // this.state = {year: 2024, month: "Jan", monthNum: 1}
        this.handleBackwardClick = this.handleBackwardClick.bind(this)
        this.handleForwardClick = this.handleForwardClick.bind(this)
    }

    handleBackwardClick(){
        if(this.state.monthNum === 1){
            this.setState({monthNum: 12})
            this.setState({year: this.state.year - 1})
            this.setState({month: getMonthName(12)})
        } else {
            this.setState({monthNum: this.state.monthNum - 1})
            this.setState({year: this.state.year})
            this.setState({month: getMonthName(this.state.monthNum - 1)})
        }
    }

    handleForwardClick(){
        if(this.state.monthNum === 12) {
            this.setState({monthNum: 1})
            this.setState({year: this.state.year + 1})
            this.setState({month: getMonthName(1)})
        } else {
            this.setState({monthNum: this.state.monthNum + 1})
            this.setState({year: this.state.year})
            this.setState({month: getMonthName(this.state.monthNum + 1)})
        }
    }

    render() {
        return (
            <div className="calendarContainer">
                <div className="calendarHeader">
                    <h1>{this.state.month} {this.state.year}</h1>
                    <div className="toggleArrows">
                        <button className="arrowBack" onClick={this.handleBackwardClick}> <ArrowBackIosNewIcon /> </button>
                        <button className="arrowForward" onClick={this.handleForwardClick}> <ArrowForwardIosIcon /> </button>
                    </div>
                </div>

                <div className="daysDisplay">
                    <div className="weekDayDiv" id="day1Div">
                        <h5>Mon</h5>
                        {priorMonthDays(1, this.state.monthNum, this.state.year)}
                        {dayDisplay(1, this.state.monthNum, this.state.year).map((num) => {
                            return <button className="currentMonthValue"><h5>{num}</h5></button>;
                        })}
                        {futureMonthDays(1, this.state.monthNum, this.state.year)}
                    </div>
                    <div className="weekDayDiv" id="day2Div">
                        <h5>Tue</h5>
                        {priorMonthDays(2, this.state.monthNum, this.state.year)}
                        {dayDisplay(2, this.state.monthNum, this.state.year).map((num) => {
                            return <button className="currentMonthValue"><h5>{num}</h5></button>;
                        })}
                        {futureMonthDays(2, this.state.monthNum, this.state.year)}
                    </div>
                    <div className="weekDayDiv" id="day3Div">
                        <h5>Wed</h5>
                        {priorMonthDays(3, this.state.monthNum, this.state.year)}
                        {dayDisplay(3, this.state.monthNum, this.state.year).map((num) => {
                            return <button className="currentMonthValue"><h5>{num}</h5></button>;
                        })}
                        {futureMonthDays(3, this.state.monthNum, this.state.year)}
                    </div>
                    <div className="weekDayDiv" id="day4Div">
                        <h5>Thu</h5>
                        {priorMonthDays(4, this.state.monthNum, this.state.year)}
                        {dayDisplay(4, this.state.monthNum, this.state.year).map((num) => {
                            return <button className="currentMonthValue"><h5>{num}</h5></button>;
                        })}
                        {futureMonthDays(4, this.state.monthNum, this.state.year)}
                    </div>
                    <div className="weekDayDiv" id="day5Div">
                        <h5>Fri</h5>
                        {priorMonthDays(5, this.state.monthNum, this.state.year)}
                        {dayDisplay(5, this.state.monthNum, this.state.year).map((num) => {
                            return <button className="currentMonthValue"><h5>{num}</h5></button>;
                        })}
                        {futureMonthDays(5, this.state.monthNum, this.state.year)}
                    </div>
                    <div className="weekDayDiv" id="day6Div">
                        <h5>Sat</h5>
                        {priorMonthDays(6, this.state.monthNum, this.state.year)}
                        {dayDisplay(6, this.state.monthNum, this.state.year).map((num) => {
                            return <button className="currentMonthValue"><h5>{num}</h5></button>;
                        })}
                        {futureMonthDays(6, this.state.monthNum, this.state.year)}
                    </div>
                    <div className="weekDayDiv" id="day7Div">
                        <h5>Sun</h5>
                        {priorMonthDays(7, this.state.monthNum, this.state.year)}
                        {dayDisplay(7, this.state.monthNum, this.state.year).map((num) => {
                            return <button className="currentMonthValue"><h5>{num}</h5></button>;
                        })}
                        {futureMonthDays(7, this.state.monthNum, this.state.year)}
                    </div>
                </div>
            </div>
        );
    }
}

export {Calendar};

