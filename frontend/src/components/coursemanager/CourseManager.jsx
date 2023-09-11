import React from 'react';
import './CourseManager.css';

const CourseManager = ({ courses, onAdd, onEdit, onDelete }) => {
  return (
    <div className="course-manager">
      <h2>Course Management</h2>
      <button onClick={onAdd}>Add Course</button>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.title}
            <button onClick={() => onEdit(course.id)}>Edit</button>
            <button onClick={() => onDelete(course.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseManager;
