import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="month-navigation">
        <button>&lt;</button>
        <span>September 2024</span>
        <button>&gt;</button>
      </div>
      <div className="view-select">
        <button>Day</button>
        <button>Week</button>
        <button>Month</button>
      </div>
    </div>
  );
};

export default Sidebar;