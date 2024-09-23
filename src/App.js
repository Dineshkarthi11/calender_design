import React, { useState, useEffect } from 'react';
import Calendar from './components/Calendar';
import EventPopup from './components/EventPopup';
import EventDetailsPopup from './components/EventDetailsPopup';
import CalendarService from './CalendarService';
import Sidebar from './components/Sidebar';
import './styles.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [popupData, setPopupData] = useState(null); // Data for the first popup
  const [detailedEvents, setDetailedEvents] = useState(null); // Data for the second popup

  useEffect(() => {
    CalendarService.getCalendarEvents()
      .then((data) => setEvents(data))
      .catch((err) => console.log(err));
  }, []);

  const handleDateClick = (date) => {
    const eventsForTheDay = events.filter((event) => event.date === date);
    if (eventsForTheDay.length > 0) {
      setPopupData(eventsForTheDay); // Show the first popup
    }
  };

  const closePopup = () => {
    setPopupData(null); // Close the first popup
  };

  const handleRoleClick = () => {
    setDetailedEvents(popupData); // Open the second popup with all events
    setPopupData(null); // Close the first popup
  };

  const closeDetailsPopup = () => {
    setDetailedEvents(null); // Close the second popup
  };

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <h1>September 2024 Calendar</h1>
        <Calendar events={events} onDateClick={handleDateClick} />
        {popupData && (
          <EventPopup
            events={popupData}
            onClose={closePopup}
            onRoleClick={handleRoleClick}
          />
        )}
        {detailedEvents && (
          <EventDetailsPopup
            events={detailedEvents}
            onClose={closeDetailsPopup}
          />
        )}
      </div>
    </div>
  );
};

export default App;
