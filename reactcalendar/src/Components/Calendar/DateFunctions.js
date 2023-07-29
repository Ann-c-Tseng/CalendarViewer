const theDate = new Date();

function isLeapYear(year) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

function findPairs(month, weekDayInt, year) {
    var pairArray = [];
    var pairIndex = 0;
    var currentWeekDay = weekDayInt;
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

    var weekNum = 1;
    for(var i = 1; i <= monthLength; i++) {
        if(currentWeekDay > 7) {
            currentWeekDay = 1;
            weekNum++;
        }
        var date = new Date(year, month-1, i);
        var pair = {"day": i, "weekDay": currentWeekDay, "weekNum": weekNum, "month": month, "year": year, "date": date};
        pairArray[pairIndex] = pair;
        pairIndex++;
        currentWeekDay++;
    }

    // console.log(pairArray);
    
    //day organized by: [day, weekday (mon 1-sun 7), weekCount (1-5 or 6), date]
    var finalArr = {};
    pairArray.forEach(v => {
        // console.log(v['weekNum'])
        if(!!finalArr[v['weekNum']]) {
            finalArr[v['weekNum']].push(v);
        } else {
            finalArr[v['weekNum']] = [v];
        }
    })

    return finalArr;
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

function firstWeekFill(month, year) {
    var currentMonth = month; 
    var currentYear = year;
    var previousMonth = currentMonth-1;
    var previousYear = currentYear;
    var priorLeapYear = false;
    var previousMonthLength = 31;

    //Current month is Janary
    if(previousMonth === 0) {
        previousYear = currentYear-1;
        previousMonth = 12;
    }

    //Check if prior year is leap year 
    priorLeapYear = isLeapYear(previousYear);

    //If February, then consider alter previousMonthLength
    if(previousMonth === 2 && priorLeapYear) {
        previousMonthLength = 29;
    } else if(previousMonth === 2) {
        previousMonthLength = 28;
    }

    //If previous month isn't 31 days, alter previousMonthLength
    if(previousMonth === 4 || previousMonth === 6 || previousMonth === 9 || previousMonth === 11) {
        previousMonthLength = 30;
    }

    var pmArr = [];
    var idx = 6;
    for(var i = 0; i < 7; i++) {
        pmArr[i] = previousMonthLength - idx;
        idx--;
    }
    
    return pmArr;
}

function singleWeekDisplay(wArr, weekNum, totalWeeks, fwFill) {
    var aLength = Object.keys(wArr).length;
    var dayDivs = [];

    if(weekNum !== 1 && weekNum !== totalWeeks) {
        for(var i = 0; i < aLength; i++) {
            var day = wArr[i]['day'];
            dayDivs[i] = <button className="dayBtn"><h5>{day}</h5></button>;
        }
    } else if(weekNum === 1) {
        var filler = 7 - aLength;
        
        for(var j = 0; j < 7; j++) {
            if(j < filler) {
                dayDivs[j] = <h5 className="fillerH5">{fwFill[j+aLength]}</h5>
            } else {
                var day2 = wArr[j-filler]['day'];
                dayDivs[j] = <button className="dayBtn"><h5 className="dayH5">{day2}</h5></button>;
            }
        }
    } else {
        var lwFill = [1, 2, 3, 4, 5, 6, 7];
        var idx = 0;
        for(var k = 0; k < 7; k++) {
            if(k < aLength) {
                var day3 = wArr[k]['day'];
                dayDivs[k] = <button className="dayBtn"><h5 className="dayH5">{day3}</h5></button>;
            } else {
                dayDivs[k] = <h5 className="fillerH5">{lwFill[idx]}</h5>
                idx++;
            }
        }
    }

    return(
        dayDivs
    )
}

export function generateWeekDivs(monthNum, yearNum) {
    var weekDivs = [];
    //arr subarray organized by: [day, weekday (mon 1-sun 7), weekCount (1-5 or 6), date]
    var arr = getDaysArray(monthNum, yearNum);
    var weeks = Object.keys(arr).length;

    var fwFill = firstWeekFill(monthNum, yearNum);

    for(var j = 1; j <= weeks; j++) {
        weekDivs[j] = <div className="weekDivs" id={""}>{singleWeekDisplay(arr[j], j, weeks, fwFill)}</div>;
    }
    
    return(
        weekDivs
    )
}

export function generateMonths(month, monthNum) {
    var optionsArr = [];

    for(var i = 0; i < 12; i++) {
        optionsArr[i] = <option> {getMonthName(i+1)} </option>;
    }

    return(
        optionsArr
    )
}

export function generateYears(year) {
    var optionsArr = [];

    for(var i = 0; i < 5; i++) {
        var y = year + i;
        optionsArr[i] = <option selected> {y} </option>;
    }

    return(
       optionsArr
    )
}

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