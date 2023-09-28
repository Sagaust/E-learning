import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = ({ onSubmit }) => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    if (feedback) {
      onSubmit(feedback);
      setFeedback('');
    }
  }

  return (
    <div className="feedback-form">
      <h2>Provide Feedback</h2>
      <textarea 
        value={feedback}
        onChange={e => setFeedback(e.target.value)}
        placeholder="Your feedback..."
      ></textarea>
      <button onClick={handleSubmit}>Submit Feedback</button>
    </div>
  );
}

export default FeedbackForm;
