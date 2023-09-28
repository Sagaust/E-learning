import React from 'react';
import './UserManager.css';

const UserManager = ({ users, onDelete }) => {
  return (
    <div className="user-manager">
      <h2>User Management</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.role})
            <button onClick={() => onDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserManager;
