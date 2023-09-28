import React, { useState } from 'react';
import './QuizTaker.css';

const QuizTaker = ({ questions, onSubmit }) => {
  const [answers, setAnswers] = useState({});

  const handleChange = (questionId, option) => {
    setAnswers(prev => ({ ...prev, [questionId]: option }));
  }

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(answers);
    }
  }

  return (
    <div className="quiz-taker">
      {questions.map((question, index) => (
        <div key={question.id} className="question">
          <p>{index + 1}. {question.text}</p>
          {question.options.map(option => (
            <div key={option}>
              <input 
                type="radio" 
                name={question.id} 
                value={option}
                onChange={() => handleChange(question.id, option)}
              />
              {option}
            </div>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit} className="submit-btn">Submit Quiz</button>
    </div>
  );
}

export default QuizTaker;
