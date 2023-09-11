import React, { useState } from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import './EventPage.css';

const EventPage = () => {
  // Here, you might want to fetch the list of events from an API.
  const [events, setEvents] = useState([]);

  return (
    <div className="event-page">
      <Navbar />
      <main>
        <h2>Upcoming Events</h2>
        <div className="events-list">
          {events.map(event => (
            <div key={event.id} className="event-card">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <span>{event.date}</span>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default EventPage;
