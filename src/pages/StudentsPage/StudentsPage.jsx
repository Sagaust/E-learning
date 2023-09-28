import React, { useState, useEffect } from 'react';
import Navbar from '../components/common/Navbar/Navbar';
import Footer from '../components/common/Footer/Footer';
import ProfileModal from '../components/ProfileModal/ProfileModal';
import './StudentsPage.css';

const StudentsPage = () => {
    const [students, setStudents] = useState([]); // Fetch this from your API
    const [selectedStudent, setSelectedStudent] = useState(null);

    useEffect(() => {
        // Fetch students from API and set to state
    }, []);

    return (
        <div className="students-page">
            <Navbar />
            <main>
                <h2>Our Students</h2>
                <ul>
                    {students.map(student => (
                        <li key={student.id} onClick={() => setSelectedStudent(student)}>
                            {student.name}
                        </li>
                    ))}
                </ul>
            </main>
            {selectedStudent && (
                <ProfileModal student={selectedStudent} onClose={() => setSelectedStudent(null)} />
            )}
            <Footer />
        </div>
    );
}

export default StudentsPage;
