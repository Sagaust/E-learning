import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import CourseList from '../../components/courselist/CourseList';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <main>
        <h1>Welcome to Our E-Learning Platform</h1>
        <CourseList courses={[]} /> {/* Pass your courses array here */}
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
