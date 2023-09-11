import React from 'react';
import './UserProfile.css';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <img src={user.avatar} alt="User Avatar" className="user-avatar" />
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      {/* Additional user details can be added as required */}
    </div>
  );
}

export default UserProfile;
