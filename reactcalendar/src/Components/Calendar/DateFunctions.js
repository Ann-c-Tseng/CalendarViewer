const theDate = new Date();

export function getYear() {
    var year = theDate.getFullYear();
    return year;
}

export function getMonth() {
    var monthNum = getMonthNum();
    if(monthNum === 1) {
        return "January";
    } else if(monthNum === 2) {
        return "February";
    } else if(monthNum === 3) {
        return "March";
    } else if(monthNum === 4) {
        return "April";
    } else if(monthNum === 5) {
        return "May";
    } else if(monthNum === 6) {
        return "June";
    } else if(monthNum === 7) {
        return "July";
    } else if(monthNum === 8) {
        return "August";
    } else if(monthNum === 9) {
        return "September";
    } else if(monthNum === 10) {
        return "October";
    } else if(monthNum === 11) {
        return "November";
    }else {
        return "December";
    }
}

function isLeapYear(year) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

function getMonthNum() {
    var month = theDate.getMonth();
    return month+1; //Prevent 0 being Jan and so on
}

export function getDay() {
    var day = theDate.getDate();
    var weekDay = theDate.toString().slice(0,3);
    return [day, weekDay];
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
    for(var i = 1; i <= monthLength; i++) {
        if(currentWeekDay > 7) {
            currentWeekDay = 1;
        }
        var pair = [i, currentWeekDay];
        pairArray[pairIndex] = pair;
        pairIndex++;
        currentWeekDay++;
    }
    return pairArray;
}

function getDaysArray(monthNum, yearNum) {
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

export function dayDisplay(day) {
    var arr = getDaysArray();
    var dayArr = [];

    for(var i = 0; i < arr.length; i++) {
        if(arr[i][1] === day) {
            // console.log("the weekday: " + arr[i][1])
            // console.log("the date: " + arr[i][0])
            dayArr.push(arr[i][0]);
        }
    }
    console.log(dayArr);

    return dayArr;
}


