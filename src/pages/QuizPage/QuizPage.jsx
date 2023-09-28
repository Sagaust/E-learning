import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import QuizCard from '../../components/quizcard/QuizCard';
import './QuizPage.css';

const QuizPage = ({ match }) => {
  const quizId = match.params.id;  // Assuming you're using react-router and passing quiz ID in the URL

  return (
    <div className="quiz-page">
      <Navbar />
      <main>
        <QuizCard quizId={quizId} />
      </main>
      <Footer />
    </div>
  );
}

export default QuizPage;
