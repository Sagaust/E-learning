import React, { useState } from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import CourseManager from '../../components/coursemanager/CourseManager';
import './CourseCreationPage.css';

const CourseCreationPage = () => {
  return (
    <div className="course-creation-page">
      <Navbar />
      <main>
        <h2>Create/Edit Course</h2>
        <CourseManager />
      </main>
      <Footer />
    </div>
  );
}

export default CourseCreationPage;
