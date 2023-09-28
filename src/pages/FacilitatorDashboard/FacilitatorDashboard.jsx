import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import AnalyticsChart from '../../components/analyticschart/AnalyticsChart';
import UserManager from '../../components/usermanager/UserManager';
import CourseManager from '../../components/coursemanager/CourseManager';
import './FacilitatorDashboard.css';

const FacilitatorDashboard = () => {
  return (
    <div className="facilitator-dashboard">
      <Navbar />
      <main>
        <h2>Facilitator Dashboard</h2>
        <AnalyticsChart />
        <UserManager />
        <CourseManager />
      </main>
      <Footer />
    </div>
  );
}

export default FacilitatorDashboard;
