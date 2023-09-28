import React from 'react';
import './CourseReview.css';

const CourseReview = ({ review }) => {
  return (
    <div className="course-review">
      <h4>{review.username}</h4>
      <p>{review.comment}</p>
      <span>Rating: {review.rating} / 5</span>
    </div>
  );
}

export default CourseReview;
