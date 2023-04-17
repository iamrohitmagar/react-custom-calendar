function Day({dayOfWeek, selected}) {
    if(dayOfWeek == null){
        return <div className="empty-day-box"/>
    }
    const date = dayOfWeek.getDate();
    let className = 'day-box'; // this is declared here to have the selected day conditional styling
    if(selected){
        className = 'selected-day-box'
    }
    return (
      <button className={className}>
          {date}
      </button>
    )
}

export default Day
