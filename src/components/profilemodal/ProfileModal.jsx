import React from 'react';
import './ProfileModal.css';

const ProfileModal = ({ student, onClose }) => {
    return (
        <div className="profile-modal">
            <div className="modal-content">
                <span className="close-btn" onClick={onClose}>&times;</span>
                <img src={student.profilePicture} alt={student.name} />
                <h4>{student.name}</h4>
                <p>{student.title}</p>
                <p>{student.academicQualifications}</p>
                <p>{student.biography}</p>
                <div className="contact-links">
                    <a href={student.linkedin}>LinkedIn</a>
                    <a href={student.website}>Website</a>
                    <a href={`mailto:${student.email}`}>Email</a>
                    <a href={student.twitter}>Twitter</a>
                </div>
            </div>
        </div>
    );
}

export default ProfileModal;
