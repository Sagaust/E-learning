import React from 'react';
import './NotificationCard.css';

const NotificationCard = ({ message, time }) => {
  return (
    <div className="notification-card">
      <p>{message}</p>
      <span>{time}</span>
    </div>
  );
}

export default NotificationCard;
