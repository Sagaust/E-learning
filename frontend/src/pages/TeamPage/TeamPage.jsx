import React, { useState, useEffect } from 'react';
import Navbar from '../components/common/Navbar/Navbar';
import Footer from '../components/common/Footer/Footer';
import './TeamPage.css';

const TeamPage = () => {
    const [teamMembers, setTeamMembers] = useState([]); // Fetch this from your API

    useEffect(() => {
        // Fetch team members from API and set to state
    }, []);

    return (
        <div className="team-page">
            <Navbar />
            <main>
                <h2>Meet Our Team</h2>
                {['Instructors', 'Facilitators', 'Admins'].map(role => (
                    <div key={role} className="role-section">
                        <h3>{role}</h3>
                        <div className="members">
                            {teamMembers.filter(member => member.role === role).map(member => (
                                <div key={member.id} className="member-card">
                                    <img src={member.profilePicture} alt={`${member.name}`} />
                                    <h4>{member.name}</h4>
                                    <p>{member.title}</p>
                                    <p>{member.academicQualifications}</p>
                                    <p>{member.biography}</p>
                                    <div className="contact-links">
                                        <a href={member.linkedin}>LinkedIn</a>
                                        <a href={member.website}>Website</a>
                                        <a href={`mailto:${member.email}`}>Email</a>
                                        <a href={member.twitter}>Twitter</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </main>
            <Footer />
        </div>
    );
}

export default TeamPage;
