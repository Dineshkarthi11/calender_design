import React, { useState, useEffect } from 'react';
import Calendar from './components/Calendar';
import EventPopup from './components/EventPopup';
import EventDetailsPopup from './components/EventDetailsPopup';
import CalendarService from './CalendarService';
import Sidebar from './components/Sidebar';
import './styles.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [popupData, setPopupData] = useState(null); // State for showing job roles popup
  const [detailedEvent, setDetailedEvent] = useState(null); // State for showing detailed event popup

  useEffect(() => {
    CalendarService.getCalendarEvents()
      .then((data) => setEvents(data))
      .catch((err) => console.log(err));
  }, []);

  const handleDateClick = (date) => {
    const eventForTheDay = events.filter((event) => event.date === date);
    if (eventForTheDay.length > 0) {
      setPopupData(eventForTheDay); // Show job roles in the popup
    }
  };

  const closePopup = () => {
    setPopupData(null); // Close the first popup
  };

  const handleRoleClick = (event) => {
    setDetailedEvent(event); // Open the detailed event popup
  };

  const closeDetailsPopup = () => {
    setDetailedEvent(null); // Close the second popup
  };

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <h1>September 2024 Calendar</h1>
        <Calendar events={events} onDateClick={handleDateClick} />
        {popupData && <EventPopup events={popupData} onClose={closePopup} onRoleClick={handleRoleClick} />} {/* First popup */}
        {detailedEvent && <EventDetailsPopup event={detailedEvent} onClose={closeDetailsPopup} />} {/* Second popup */}
      </div>
    </div>
  );
};

export default App;
