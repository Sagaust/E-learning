import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-brand">
                © {new Date().getFullYear()} E-Learning Platform
            </div>
            <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/quizzes">Quizzes</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/students">Students</Link></li>
            </ul>
        </footer>
    );
}

export default Footer;
