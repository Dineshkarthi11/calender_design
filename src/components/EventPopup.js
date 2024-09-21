import React from 'react';
import './EventPopup.css'; // Styles for the popup

const EventPopup = ({ events, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Events on {events[0]?.date}</h2>
        <ul>
          {events.map((event, index) => (
            <li key={index} className="event-item">
              <strong>{event.title}</strong>
              <p>{event.description}</p>
              <p><em>{event.time}</em></p>
            </li>
          ))}
        </ul>
        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
};

export default EventPopup;