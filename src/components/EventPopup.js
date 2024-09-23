import React from 'react';
import './EventPopup.css';

const EventPopup = ({ events, onClose, onRoleClick }) => {
  const totalEvents = events.length;
  const firstEvent = events[0];

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {totalEvents > 1 && (
          <span className="event-count-badge">{totalEvents}</span>
        )}
        <h2>Event on {firstEvent.date}</h2>
        <div className="single-event">
          <button className="role-btn" onClick={onRoleClick}>
            {firstEvent.role}
          </button>
        </div>
        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
};

export default EventPopup;
