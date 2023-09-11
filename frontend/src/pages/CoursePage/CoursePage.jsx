import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import CourseDetail from '../../components/coursedetail/CourseDetail';
import './CoursePage.css';

const CoursePage = ({ match }) => {
  const courseId = match.params.id; // Assuming you're using react-router and passing course ID in the URL

  return (
    <div className="course-page">
      <Navbar />
      <main>
        <CourseDetail courseId={courseId} />
      </main>
      <Footer />
    </div>
  );
}

export default CoursePage;
