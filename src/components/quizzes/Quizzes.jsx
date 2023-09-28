import React from 'react';
import QuizCard from '../QuizCard/QuizCard';
import './Quizzes.css';

const Quizzes = ({ quizData }) => {
  return (
    <div className="quizzes">
      <h2>Available Quizzes</h2>
      {quizData.map(quiz => (
        <QuizCard key={quiz.id} quiz={quiz} />
      ))}
    </div>
  );
}

export default Quizzes;
