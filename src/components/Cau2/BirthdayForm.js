import React, { useState, useEffect } from 'react';
import './BirthdayForm.css';

function BirthdayForm() {
  const [dayOptions, setDayOptions] = useState([]);
  const [monthOptions, setMonthOptions] = useState([]);
  const [yearOptions, setYearOptions] = useState([]);

  useEffect(() => {
    // Populate day select box
    const days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
    setDayOptions(days);

    // Populate month select box
    const months = [];
    for (let i = 1; i <= 12; i++) {
      months.push(i);
    }
    setMonthOptions(months);

    // Populate year select box
    const years = [];
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1900; i--) {
      years.push(i);
    }
    setYearOptions(years);
  }, []);

  return (
    <form id="birthdayForm">
      <label htmlFor="birhtday">Birthday</label>
      <select id="month" name="month">
        <option value="" disabled selected hidden>Month</option>
        {monthOptions.map(month => (
          <option key={month} value={month}>{month}</option>
        ))}
      </select>

      <select id="day" name="day">
        <option value="" disabled selected hidden>Day</option>
        {dayOptions.map(day => (
          <option key={day} value={day}>{day}</option>
        ))}
      </select>

      <select id="year" name="year">
        <option value="" disabled selected hidden>Year</option>
        {yearOptions.map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>

      {/* <input type="submit" value="Submit" /> */}
    </form>
  );
}

export default BirthdayForm;