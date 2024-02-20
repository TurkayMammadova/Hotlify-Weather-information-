
import React, { useState} from 'react';
import './App.css';
import Logo from './components/Logo/Logo.jsx';
import Today_Tomorrow_click from './components/Today_Tomorrow_click/Today_Tomorrow_click.jsx';
import Input from './components/Input/input.jsx';
import Info from './components/Info/Info.jsx';
import SearchList from './components/SearchList/SearchList.jsx';
import TemperatureUnit from './components/temperatureUnit/TemperatureUnit.jsx';

const  formatedDate =(todaysDate)=>{
  let allMonths = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let currentMonth = todaysDate.getMonth();
    let currentMonthName = allMonths[currentMonth]
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let  dayOfWeek = todaysDate.getDay()
    let dayOfWeekName = daysOfWeek[dayOfWeek]
    const dayOfMonth = todaysDate.getDate()
    const formattedDay = dayOfMonth < 10 ? `0${dayOfMonth}` : dayOfMonth.toString();
    return `${currentMonthName} ${formattedDay}, ${dayOfWeekName}`
};

function App() {
  const storageData = JSON.parse(localStorage.getItem('items'))?.length > 0 ? JSON.parse(localStorage.getItem('items')) : [];
  const [cityes, setCityes] = useState(storageData);
  const [isActive, setIsActive] = useState(false);

  const toggleTemperatureUnit = () => {
    setIsActive(!isActive);
  };

  let todaysDate = new Date();
  const [date, setDate] = useState(formatedDate(todaysDate));

  return (
    <>
      <Logo />
      <TemperatureUnit toggleTemperatureUnit={toggleTemperatureUnit} isActive={isActive} />
      <Today_Tomorrow_click />
      <Input cityes={cityes} setCityes={setCityes} />
      <Info cityes={cityes} date={date} isActive={isActive} />
      <SearchList cityes={cityes} isActive={isActive} />
    </>
  );
}

export default App;
