import React from 'react';
import './CourseList.css';

const CourseList = ({ courses }) => {
  return (
    <div className="course-list">
      <h2>Available Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
