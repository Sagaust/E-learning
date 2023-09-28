import React from 'react';
import './EnrollButton.css';

const EnrollButton = ({ isEnrolled, onEnroll }) => {
  return (
    <button 
      className={`enroll-btn ${isEnrolled ? 'enrolled' : ''}`} 
      onClick={onEnroll}
    >
      {isEnrolled ? 'Enrolled' : 'Enroll Now'}
    </button>
  );
}

export default EnrollButton;
