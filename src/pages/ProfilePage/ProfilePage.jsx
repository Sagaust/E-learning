import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import UserProfile from '../../components/UserProfile/UserProfile';
import './ProfilePage.css';

const ProfilePage = ({ user }) => {
  // 'user' is the logged-in user's data. It can come from props, context, or an API call.
  
  return (
    <div className="profile-page">
      <Navbar />
      <main>
        <h2>Your Profile</h2>
        <UserProfile user={user} />
      </main>
      <Footer />
    </div>
  );
}

export default ProfilePage;
