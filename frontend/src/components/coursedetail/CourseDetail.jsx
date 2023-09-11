import React from 'react';
import './CourseDetail.css';

const CourseDetail = ({ course }) => {
  return (
    <div className="course-detail">
      <img src={course.image} alt={course.title} className="course-image" />
      <h2>{course.title}</h2>
      <p>By: {course.instructor}</p>
      <p>{course.description}</p>
      {/* Additional course details can be added as required */}
    </div>
  );
}

export default CourseDetail;
