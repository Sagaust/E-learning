import React, { useState } from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import './NotificationsPage.css';

const NotificationsPage = () => {
  // Consider fetching notifications from an API.
  const [notifications, setNotifications] = useState([]);

  return (
    <div className="notifications-page">
      <Navbar />
      <main>
        <h2>Your Notifications</h2>
        <div className="notifications-list">
          {notifications.map(notification => (
            <div key={notification.id} className="notification-card">
              <p>{notification.message}</p>
              <span>{notification.date}</span>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotificationsPage;
