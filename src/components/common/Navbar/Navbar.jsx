import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {UserContext} from '../../../context/UserContext';
import './Navbar.css';

const Navbar = () => {
    const { user } = useContext(UserContext);

    return (
        <nav className="navbar">
            <Link to="/" className="logo">E-Learning</Link>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/quizzes">Quizzes</Link>
                <Link to="/resources">Resources</Link>
                <Link to="/team">Team</Link>
                <Link to="/students">Students</Link>
                <Link to="/forum">Forum</Link>
                
                {user && <Link to="/profile">Profile</Link>}
                {user?.role === 'Instructor' && <Link to="/course-creation">Create Course</Link>}
                {user?.role === 'Admin' && <Link to="/admin-dashboard">Dashboard</Link>}
                {user?.role === 'Facilitator' && <Link to="/facilitator-dashboard">Facilitator Dashboard</Link>}
                
                {!user && <Link to="/login">Login</Link>}
                {!user && <Link to="/signup">Signup</Link>}
            </div>
        </nav>
    );
}

export default Navbar;
