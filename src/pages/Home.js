// src/pages/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to Finance Academy</h1>
        <p>Empowering College Students with Financial Literacy for a Bright Future</p>
      </div>

      {/* Mission Statement Section */}
      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At Finance Academy, we are committed to helping college students build a strong financial foundation. Our mission is to provide accessible, practical financial education that empowers students to make informed decisions about budgeting, saving, investing, and managing their finances. Whether you're just starting to think about your financial future or looking for tips to manage student loans, we're here to guide you every step of the way.
        </p>
      </div>

      {/* Core Features Section */}
      <div className="features-section">
        <h2>What We Offer</h2>
        <div className="card-container">
          <div className="card">
            <h3>Budgeting Tips</h3>
            <p>Practical advice on creating and sticking to a budget.</p>
          </div>
          <div className="card">
            <h3>Saving Strategies</h3>
            <p>Learn how to save money and build an emergency fund.</p>
          </div>
          <div className="card">
            <h3>Understanding Credit</h3>
            <p>A beginner's guide to building and maintaining good credit.</p>
          </div>
          <div className="card">
            <h3>Investing for Students</h3>
            <p>How to start investing even with a limited budget.</p>
          </div>
        </div>
      </div>

      {/* Student Testimonials Section */}
      <div className="testimonials-section">
        <h2>What Our Students Say</h2>
        <div className="testimonial">
          <p>"The Finance Academy helped me understand how to budget for the first time. I now feel confident managing my money!" – Sarah, Sophomore</p>
        </div>
        <div className="testimonial">
          <p>"I didn’t know where to start when it came to credit. The tips here were clear and actionable!" – James, Senior</p>
        </div>
        <div className="testimonial">
          <p>"As a student with student loans, learning to save and invest has been a game-changer!" – Maria, Freshman</p>
        </div>
        <p className="cta-join">Join Thousands of Students Who Have Taken Control of Their Financial Future</p>
      </div>
    </div>
  );
};

export default Home;
