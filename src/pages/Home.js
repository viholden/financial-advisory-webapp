// src/pages/Home.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const financeAcademyText = document.getElementById('finance-academy');
      const testimonies = document.getElementById('testimonies');
      const pageLinks = document.getElementById('page-links');

      if (scrollPosition < 300) {
        financeAcademyText.style.opacity = 1 - scrollPosition / 300;
      } else if (scrollPosition >= 300 && scrollPosition < 600) {
        testimonies.style.opacity = (scrollPosition - 300) / 300;
      } else if (scrollPosition >= 600) {
        pageLinks.style.opacity = (scrollPosition - 600) / 300;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="section" id="finance-academy">
        <h1>Finance Academy</h1>
      </div>

      <div className="section" id="testimonies">
        <h2>Testimonies</h2>
        <p>"This platform has changed how I manage my finances!"</p>
        <p>"The budgeting tool is fantastic!"</p>
      </div>

      <div className="section" id="page-links">
        <h2>Explore Our Pages</h2>
        <div className="card-container">
          <Link to="/budget-planner" className="card">Budget Planner</Link>
          <Link to="/resources" className="card">Resources</Link>
          <Link to="/forum" className="card">Forum</Link>
          <Link to="/chatbot" className="card">Chatbot</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
