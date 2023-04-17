import React from 'react'
import './Calendar.scss'
import Month from './Month';
import {getMonthName} from './helper'    

function Calendar({date}) {
    const dateNumber = date.getDate();
    const monthNumber = date.getMonth();
    const yearNumber = date.getFullYear();
    const monthName = getMonthName(monthNumber)
    return (
        <div className="calendar-container">
           <div className="month-title">
               {monthName} {yearNumber}
           </div>
           <div className="month">
                <Month date={dateNumber} month={monthNumber} year={yearNumber}/>
           </div>
        </div>
    )
}

export default Calendar
