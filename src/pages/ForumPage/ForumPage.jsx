import React, { useState } from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import './ForumPage.css';

const ForumPage = () => {
  // You might want to fetch forum topics and discussions from an API.
  const [topics, setTopics] = useState([]);

  return (
    <div className="forum-page">
      <Navbar />
      <main>
        <h2>Discussion Forum</h2>
        <div className="topics-list">
          {topics.map(topic => (
            <div key={topic.id} className="topic-card">
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
              <span>Posted by: {topic.author}</span>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ForumPage;
