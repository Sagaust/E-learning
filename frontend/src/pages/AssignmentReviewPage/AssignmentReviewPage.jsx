import React, { useState } from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import AssignmentUploader from '../../components/assignmentuploader/AssignmentUploader';
import './AssignmentReviewPage.css';

const AssignmentReviewPage = () => {
  return (
    <div className="assignment-review-page">
      <Navbar />
      <main>
        <h2>Review Assignments</h2>
        <AssignmentUploader />
      </main>
      <Footer />
    </div>
  );
}

export default AssignmentReviewPage;
