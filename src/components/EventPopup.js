import React from 'react';
import './EventPopup.css'; // Styles for the popup

const EventPopup = ({ events, onClose, onRoleClick }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Events on {events[0]?.date}</h2>
        <ul>
          {events.map((event, index) => (
            <li key={index} className="event-item">
              <button className="role-btn" onClick={() => onRoleClick(event)}>
                {event.role}
              </button> {/* Clicking on job role will show details */}
            </li>
          ))}
        </ul>
        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
};

export default EventPopup;
