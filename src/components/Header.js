// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Finance Academy</h1>
      <nav>
        <NavLink exact to="/home" activeClassName="active">Home</NavLink>
        <NavLink to="/budget-planner" activeClassName="active">Budget Planner</NavLink>
        <NavLink to="/resources" activeClassName="active">Resources</NavLink>
        <NavLink to="/chatbot" activeClassName="active">Chatbot</NavLink>
        <NavLink to="/login" activeClassName="active">Log In</NavLink>
      </nav>
    </header>
  );
};

export default Header;