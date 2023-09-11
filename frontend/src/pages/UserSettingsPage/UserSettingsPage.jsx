import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import UserProfile from '../../components/UserProfile/UserProfile';
import './UserSettingsPage.css';

const UserSettingsPage = () => {
  return (
    <div className="user-settings-page">
      <Navbar />
      <main>
        <h2>Account Settings</h2>
        <UserProfile />
      </main>
      <Footer />
    </div>
  );
}

export default UserSettingsPage;
