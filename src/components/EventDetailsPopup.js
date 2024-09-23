import React from 'react';
import './EventDetailsPopup.css'; // Styles for the detailed popup

const EventDetailsPopup = ({ event, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Event Details</h2>
        <p><strong>Role:</strong> {event.role}</p>
        <p><strong>Interviewer:</strong> {event.interviewer}</p>
        <p><strong>Round:</strong> {event.round}</p>
        <p><strong>Time:</strong> {event.time}</p>
        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
};

export default EventDetailsPopup;
