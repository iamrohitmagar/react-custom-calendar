import shortid from 'shortid';
import WeekDay from './Weekday'
import Day from './Day'
import {weekdays, abbreviatedWeekday, getWeeksForMonth} from './helper'

function Month({date, month, year}) {

    const weeks = getWeeksForMonth(month,year)

    const weekDaysTitleMarkup = weekdays.map((weekday)=>{ // this is for Su Mo Tu We...
            return (<WeekDay key={shortid.generate()} title={abbreviatedWeekday(weekday)} label={weekday}/>)
    });

    const weeksMarkup = weeks.map((week) => {
        return (
            <div role="row" className="week" key={shortid.generate()}>
               {week.map(dayOfWeek =>{return renderWeek(dayOfWeek)})}
            </div>
        )
    })

    return (
        <>
            <div className="weekday-container">{weekDaysTitleMarkup}</div>
            <div className="">
                {weeksMarkup}
            </div>
        </>
    )

    function renderWeek(dayOfWeek) {
        let fdate;
        if(dayOfWeek !=null){
            fdate = dayOfWeek.getDate();
        }
        return(
            <Day
                key={shortid.generate()}
                dayOfWeek={dayOfWeek}
                selected={fdate === date}
            />
        ) 
    }
}

export default Month
