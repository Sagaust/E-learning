import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import CourseReview from '../../components/coursereview/CourseReview';
import './CourseFeedbackPage.css';

const CourseFeedbackPage = () => {
  return (
    <div className="course-feedback-page">
      <Navbar />
      <main>
        <h2>Course Feedback</h2>
        <CourseReview />
      </main>
      <Footer />
    </div>
  );
}

export default CourseFeedbackPage;
