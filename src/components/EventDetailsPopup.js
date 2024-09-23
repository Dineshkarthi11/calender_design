import React from 'react';
import './EventDetailsPopup.css';

const EventDetailsPopup = ({ events, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>All Events on {events[0]?.date}</h2>
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              <p><strong>Role:</strong> {event.role}</p>
              <p><strong>Interviewer:</strong> {event.interviewer}</p>
              <p><strong>Round:</strong> {event.round}</p>
              <p><strong>Time:</strong> {event.time}</p>
            </li>
          ))}
        </ul>
        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
};

export default EventDetailsPopup;
