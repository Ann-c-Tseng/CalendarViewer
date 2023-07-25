const theDate = new Date();

function isLeapYear(year) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

function findPairs(month, weekDayInt, year) {
    var pairArray = [];
    var pairIndex = 0;
    var currentWeekDay = weekDayInt;
    // console.log("weekDayInt: " + weekDayInt);
    var monthLength = 0;

    if(month === 2 && isLeapYear(year)) { //If February and leap year, has 29 days
        monthLength = 29;
    } else if(month === 2) { //Else February has 28 days
        monthLength = 28;
    } else {
        if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
            //Months with 31 days: January, March, May, July, August, October, and December
            monthLength = 31;
        } else {
            //Months with 30 days: April, June, September, and November
            monthLength = 30;
        }
    }
    // console.log(monthLength);
    var weekNum = 1;
    for(var i = 1; i <= monthLength; i++) {
        if(currentWeekDay > 7) {
            currentWeekDay = 1;
            weekNum++;
        }
        var date = new Date(year, month-1, i);
        var pair = [i, currentWeekDay, weekNum, date];
        pairArray[pairIndex] = pair;
        pairIndex++;
        currentWeekDay++;
    }
    return pairArray;
}

export function getYear() {
    return theDate.getFullYear();
}

export function getMonthName(monthNum) {
    var m = monthNum;

    if(monthNum === 0) {
        m = getMonthNum();
    }

    if(m === 1){
        return "January";
    } else if(m === 2){
        return "February";
    } else if(m === 3){
        return "March";
    } else if(m === 4){
        return "April";
    } else if(m === 5){
        return "May";
    } else if(m === 6){
        return "June";
    } else if(m === 7){
        return "July";
    } else if(m === 8){
        return "August";
    } else if(m === 9){
        return "September";
    } else if(m === 10){
        return "October";
    } else if(m === 11){
        return "November";
    } else {
        return "December";
    }
}

export function getMonthNum() {
    return theDate.getMonth() + 1;
}

export function getDay() {
    return theDate.getDay();
}

export function generateWeekDivs(monthNum, yearNum) {
    var weekDivs = [];

    var weeklyContainer = [];
    var wcIdx = 0;

    //arr subarray organized by: [day, weekday (mon 1-sun 7), weekCount (1-5 or 6), date]
    var arr = getDaysArray(monthNum, yearNum);
    var weeks = arr[arr.length-1][2];

    var weekCount = 1;

    for(var i = 0; i < arr.length; i++) { //go through every single day, categorize by storing into week arrays corresponding with weekCount
        if(weekCount === arr[i][2]) {
            weeklyContainer[wcIdx] = arr[i];
            wcIdx++;
        } else {
            weekCount++;
            i--;
            wcIdx = 0;
            console.log(weeklyContainer);
            weeklyContainer = [];  
        }
    }

    for(var j = 1; j <= weeks; j++) {
        weekDivs[j] = <div className="weekDivs" id={""}>{j}</div>;
    }
    
    return(
        weekDivs
    )
}

// function getDaysByWeek(monthNum, yearNum, numberOfWeeks, arr) {
//     var arrByWeeks = [];
//     var week = [];
//     var dayIdx = 0;
//     var monthLength = arr.length;

//     var dayNum = arr[dayIdx][0];
//     var date = new Date(yearNum, monthNum-1, dayNum);
//     var weekDayNum = arr[dayIdx][1];
//     //[monthNum, yearNum, dayNum, weekDayNum, date]

//     for(var i = 0; i < numberOfWeeks; i++) {
//         while(weekDayNum !== 7 && )
//     }
//     // console.log(arr);
//     return arrByWeeks;
// }

export function getDaysArray(monthNum, yearNum) {
    //Zeller's Rule:
        //Zeller's rule explanation and source: https://www.themathdoctors.org/zellers-rule-what-day-of-the-week-is-it/
        //Given the month, day, and year,
        //we can use Zeller's rule to find the weekday for any given day of any month and year (leap year inclusive).
        //We can find the weekday of the 1st day of a month, and understand how the other following days are to be layed-out in this calendar.
        //Zeller's rule formula: N = (d + 2m + [3(m+1)/5] + y + [y/4] - [y/100] + [y/400] + 2)
        //When we divide N by 7, and get the remainder, we can map it to the below code assigned to a particular weekday.
            //1 = Sun, 2 = Mon, 3 = Tue, 4 = Wed, 5 = Thu, 6 = Fri, and 0 = Sat
            // d = day, m = month, y = year
            //The above formula's [] brackets represent flooring.
        //NOTE: For months January and February, we need to use the numbers "13" and "14" correspondingly AND the previous year
        //to complete the calculations correctly. E.g. If finding weekday of 1/1/98, then use 13/1/97 for the calculation.
    var year = yearNum;
    var month = monthNum;
    var day = 1;

    if(month === 1) {
        year = year - 1;
        month = 13;
    } else if(month === 2) {
        year = year - 1;
        month = 14;
    }
    // console.log(month + " " + year);

    var n1 = 2*month;
    var n2 = Math.floor((3*(month+1))/5);
    var n3 = Math.floor(year/4);
    var n4 = Math.floor(year/100);
    var n5 = Math.floor(year/400);

    var n = day + n1 + n2 + year + n3 - n4 + n5 + 2;
    var remainder = n % 7;
    var weekDay = 0;

    //1 = Sun, 2 = Mon, 3 = Tue, 4 = Wed, 5 = Thu, 6 = Fri, and 0 = Sat
    if(remainder === 1) { //Sunday
        weekDay = 7;
    } else if(remainder === 2) { //Monday
        weekDay = 1;
    } else if(remainder === 3) { //Tuesday
        weekDay = 2;
    } else if(remainder === 4) { //Wednesday
        weekDay = 3;
    } else if(remainder === 5) { //Thursday
        weekDay = 4;
    } else if(remainder === 6) { //Friday
        weekDay = 5;
    } else { //remainder === 0) //Saturday
        weekDay = 6;
    }

    //NOTE: we are using monthNum and yearNum here because it should be 1 = Jan and 2 = Feb
    //while "month" and "year" variable above can equal 13, 14, and year-1 which is only used for calculation.
    var dayPairs = findPairs(monthNum, weekDay, yearNum);

    return dayPairs;
}

// function priorMonthDaysHelper(weekDay, month, year) {
//     var currentMonth = month; 
//     var currentYear = year;
//     var previousMonth = currentMonth-1;
//     var previousYear = currentYear;
//     var priorLeapYear = false;
//     var valueFill = [];
//     var previousMonthLength = 31;

//     //Current month is Janary
//     if(previousMonth === 0) {
//         previousYear = currentYear-1;
//         previousMonth = 12;
//     }

//     //Check if prior year is leap year 
//     priorLeapYear = isLeapYear(previousYear);

//     //If February, then consider alter previousMonthLength
//     if(previousMonth === 2 && priorLeapYear) {
//         previousMonthLength = 29;
//     } else if(previousMonth === 2) {
//         previousMonthLength = 28;
//     }

//     //If previous month isn't 31 days, alter previousMonthLength
//     if(previousMonth === 4 || previousMonth === 6 || previousMonth === 9 || previousMonth === 11) {
//         previousMonthLength = 30;
//     }

//     var arr = getDaysArray(currentMonth, currentYear);
//     var currentFirstDay = arr[0];
//     var startingWeekDay = currentFirstDay[1];

//     //Return empty as no need to have prior month values
//     if(startingWeekDay === 1) {
//         return 0;
//     }

//     //If current month start on a Tuesday, then we need 
//     //1 prior month value filled, if Wednesday, then 2 prior month values filled, etc...
//     //Maximum 6 prior month values filled if current month start on a Sunday.
//     var priorValue = 6;
//     if(startingWeekDay === 2) {
//         priorValue = 1;
//     } else if(startingWeekDay === 3) {
//         priorValue = 2;
//     } else if(startingWeekDay === 4) {
//         priorValue = 3;
//     } else if(startingWeekDay === 5) {
//         priorValue = 4;
//     } else if(startingWeekDay === 6) {
//         priorValue = 5;
//     } else { //startingWeekDay == 7
//         priorValue = 6;
//     }

//     //Depending on prior month length and current month starting week day
//     //get corresponding prior month values array
//     var fillNum = previousMonthLength - priorValue + 1;
//     for(var i = 0; i < priorValue; i++) {
//         valueFill[i] = fillNum;
//         fillNum++;
//     }

//     //Select value to return to corresponding week day row
//     //E.g. weekDay = 1 (Monday), the return value at index 0
//     return valueFill[weekDay-1];
// }

// export function priorMonthDays(weekDay, month, year) {
//     var dayVal = priorMonthDaysHelper(weekDay, month, year);
//     if(dayVal > 0 && dayVal <= 31) {
//         return(
//             <h5 className="priorMonthValue">{dayVal}</h5>
//         )
//     }
//     return "";
// }

// function futureMonthDaysHelper(weekDay, month, year) {
//     var currentMonth = month; 
//     var currentYear = year;
//     var futureMonth = currentMonth+1;

//     if(futureMonth === 13) {
//         futureMonth = 1;
//     }

//     var arr = getDaysArray(currentMonth, currentYear);
//     var currentLastDay = arr[arr.length-1];
//     var endingWeekDay = currentLastDay[1];
//     var valueFill = [1, 2, 3, 4, 5, 6];

//     if(endingWeekDay === 7) {
//         return "";
//     }

//     if(endingWeekDay === 1) {
//         valueFill = valueFill.slice();
//     } else if(endingWeekDay === 2) {
//         valueFill = valueFill.slice(0,5);
//     } else if(endingWeekDay === 3) {
//         valueFill = valueFill.slice(0,4);
//     } else if(endingWeekDay === 4) {
//         valueFill = valueFill.slice(0,3);
//     } else if(endingWeekDay === 5) {
//         valueFill = valueFill.slice(0,2);
//     } else { //endingWeekDay === 6
//         valueFill = valueFill.slice(0,1);
//     }

//     //If we have 6 values to fill and we are on a Monday, don't fill Monday
//     //Similarly, if we have 5 values to fill and we are on a Mon or Tue, don't fill those, etc...
//     //valueFill.length = 6 monday = 1
//     //valueFill.length = 5 monday = 1, tuesday = 2

//     //Find out what the first week day to be filled, that way we can get the index of the array's
//     //return value. Starting from 0 each time in valueFill array when filling.
//     var firstWeekDayFilled = 7-valueFill.length+1;
//     if(valueFill.length + weekDay > 7) {
//         return valueFill[weekDay-firstWeekDayFilled];
//     } else {
//         return "";
//     }
// }

// export function dayDisplay(weekDay, month, year) {
//     var arr = getDaysArray(month, year);
//     var dayArr = [];

//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i][1] === weekDay) {
//             // console.log("the weekday: " + arr[i][1])
//             // console.log("the date: " + arr[i][0])
//             dayArr.push(arr[i][0]);
//         }
//     }
//     console.log(dayArr);
//     return dayArr;
// }

// export function futureMonthDays(weekDay, month, year) {
//     var dayVal = futureMonthDaysHelper(weekDay, month, year);
//     if(dayVal !== "") {
//         return(
//             <h5 className="futureMonthValue">{dayVal}</h5>
//         )
//     }
//     return "";
// }

// export function getYear() {
//     var year = theDate.getFullYear();
//     return year;
// }

// export function getMonthName(monthNum) {

//     var m = monthNum;

//     //current month
//     if(monthNum === 0) {
//         m = getMonthNum();
//     }

//     if(m === 1) {
//         return "January";
//     } else if(m === 2) {
//         return "February";
//     } else if(m === 3) {
//         return "March";
//     } else if(m === 4) {
//         return "April";
//     } else if(m === 5) {
//         return "May";
//     } else if(m === 6) {
//         return "June";
//     } else if(m === 7) {
//         return "July";
//     } else if(m === 8) {
//         return "August";
//     } else if(m === 9) {
//         return "September";
//     } else if(m === 10) {
//         return "October";
//     } else if(m === 11) {
//         return "November";
//     }else {
//         return "December";
//     }
// }

// export function getMonthNum() {
//     var month = theDate.getMonth();
//     return month+1; //Allow January to be "1", instead of "0"
// }
