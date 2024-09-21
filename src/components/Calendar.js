import React from 'react';
import './Calendar.css'; // Using a separate CSS file for more specific styles

const Calendar = ({ events, onDateClick }) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1); // September 2024

  const renderEventsForDate = (date) => {
    const eventsForDate = events.filter((event) => event.date === `2024-09-${String(date).padStart(2, '0')}`);
    return eventsForDate.map((event, index) => (
      <div key={index} className="event">
        {event.title}
      </div>
    ));
  };

  return (
    <div className="calendar">
      <div className="header">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="day-name">{day}</div>
        ))}
      </div>
      <div className="body">
        {daysInMonth.map((day) => (
          <div key={day} className="calendar-day" onClick={() => onDateClick(`2024-09-${String(day).padStart(2, '0')}`)}>
            <div className="day-number">{day}</div>
            {renderEventsForDate(day)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
