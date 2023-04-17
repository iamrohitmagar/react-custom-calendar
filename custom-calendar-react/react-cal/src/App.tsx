import React, { useState } from 'react';
import './App.css';
import Calendar from './components/Datepicker/Calendar'


function App() {
  // Please use this 'yyyy/mm/dd' date format or else if you remove the date it will show todays date
  const [initialDate, setDate] = useState(new Date('2022/02/27'))
  return (
    <div className="App">
     <div className="main-container">
       <Calendar date={initialDate}/>
     </div>
    </div>
  );
}

export default App;
