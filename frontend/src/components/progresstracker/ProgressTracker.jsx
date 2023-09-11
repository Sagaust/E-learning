import React from 'react';
import './ProgressTracker.css';

const ProgressTracker = ({ progress }) => {
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
}

export default ProgressTracker;
