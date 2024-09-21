import React, { useState, useEffect } from 'react';
import Calendar from './components/Calendar';
import EventPopup from './components/EventPopup';
import CalendarService from './CalendarService';
import Sidebar from './components/Sidebar';
import './styles.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [popupData, setPopupData] = useState(null); // Popup state to hold event data for the clicked date

  useEffect(() => {
    CalendarService.getCalendarEvents()
      .then((data) => setEvents(data))
      .catch((err) => console.log(err));
  }, []);

  const handleDateClick = (date) => {
    const eventForTheDay = events.filter((event) => event.date === date);
    setPopupData(eventForTheDay); // Open popup with the events for the clicked date
  };

  const closePopup = () => {
    setPopupData(null); // Close the popup
  };

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <h1>September 2024 Calendar</h1>
        <Calendar events={events} onDateClick={handleDateClick} />
        {popupData && <EventPopup events={popupData} onClose={closePopup} />} {/* Show popup when there's event data */}
      </div>
    </div>
  );
};

export default App;