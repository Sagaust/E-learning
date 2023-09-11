import React from 'react';
import './QuizResult.css';

const QuizResult = ({ score, total }) => {
  return (
    <div className="quiz-result">
      <h2>Quiz Result</h2>
      <p>Your Score: {score} out of {total}</p>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${(score/total) * 100}%` }}></div>
      </div>
    </div>
  );
}

export default QuizResult;
