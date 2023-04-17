const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
 ];

export const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

export function getMonthName(index){
    return months[index]
}

export function abbreviatedWeekday(weekday){
    return weekday.substring(0,2);
}


const WEEK_LENGTH = 7;

export function getWeeksForMonth(month, year){
    const firstOfMonth = new Date(year,month,1); // returns 1st day of the month and params are year,month and date.
    const firstDayOfWeek = firstOfMonth.getDay(); // returns index of the first day of month 

    const weeks = [[]]; // this for week array having 4 weeks 

    let currentWeek = weeks[0];
    let currentDate = firstOfMonth;
    for(let i = 0; i< firstDayOfWeek; i++){ // here if 1st day is thu it pushes null from sun to wed
        currentWeek.push(null);
    }

    while(currentDate.getMonth() === month){ // weeks are pushed here
        if(currentWeek.length === WEEK_LENGTH){ // once 7 days pushed in a week it pushes next 7 days for next week array
            currentWeek = [];
            weeks.push(currentWeek);
        }

        currentWeek.push(currentDate);
        currentDate = new Date(year, month, currentDate.getDate() + 1); 
        // above here we have added + 1 to increment day by 1 
        // so that as it completes all days of the month eg. march next date will be 1st april and it comes out of loop.
    }

    while(currentWeek.length < 7){ // here it takes the last updated week and then pushes null for remaining
        currentWeek.push(null);
    }

    return weeks;
}

