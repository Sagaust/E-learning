import React, { useState, useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

function CoursePage() {
    const [course, setCourse] = useState({ title: '', description: '' });

    useEffect(() => {
        // Replace with your Django API endpoint
        const apiUrl = 'https://www.africanphilosophers.online/api/courses/list/';

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setCourse({
                    title: data.title,
                    description: data.description
                });
            })
            .catch(error => {
                console.error('Error fetching course data:', error);
            });
    }, []); // Empty dependency array means this useEffect runs once when the component mounts

    return (
        <div>
            <Navbar />
            
            <section className="course-detail">
                <h1>{course.title}</h1>
                <p>{course.description}</p>
                {/* More details, course content, instructor info, etc. */}
            </section>

            <Footer />
        </div>
    );
}

export default CoursePage;
