import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';

function HomePage() {
    return (
        <div>
            <Navbar />
            
            <section className="hero">
                <h1>Welcome to E-Learning!</h1>
                <p>Explore a world of knowledge. Join us today.</p>
                <Button label="Get Started" onClick={() => {/* redirect to sign up */}} />
            </section>

            <section className="featured-courses">
                <h2>Featured Courses</h2>
                {/* List out some featured courses here */}
            </section>

            <Footer />
        </div>
    );
}

export default HomePage;
