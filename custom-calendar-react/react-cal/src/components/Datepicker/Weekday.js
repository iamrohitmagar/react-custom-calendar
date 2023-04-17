import React from 'react'

function Weekday({label,title}) {
    return (
        <div aria-label={label} className="week-day">
            {title}
        </div>
    )
}

export default Weekday
