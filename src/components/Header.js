// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Finance Academy</h1>
      <Link to="/login" className="login-button">Login</Link>
    </header>
  );
};

export default Header;
