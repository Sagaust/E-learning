import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

function CoursePage() {
    return (
        <div>
            <Navbar />
            
            <section className="course-detail">
                <h1>Course Title</h1>
                <p>Course Description</p>
                {/* More details, course content, instructor info, etc. */}
            </section>

            <Footer />
        </div>
    );
}

export default CoursePage;
