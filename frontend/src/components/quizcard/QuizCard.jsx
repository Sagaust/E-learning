import React from 'react';
import './QuizCard.css';

const QuizCard = ({ quiz }) => {
  return (
    <div className="quiz-card">
      <h3>{quiz.title}</h3>
      <p>{quiz.description}</p>
      <button>Take Quiz</button>
    </div>
  );
}

export default QuizCard;
