// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BudgetPlanner from './pages/BudgetPlanner';
import Resources from './pages/Resources';
import Forum from './pages/Forum';
import Login from './pages/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Chatbot from './pages/Chatbot';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/budget-planner" element={<><Header /><Sidebar /><BudgetPlanner /><Footer /></>} />
        <Route path="/resources" element={<><Header /><Sidebar /><Resources /><Footer /></>} />
        <Route path="/forum" element={<><Header /><Sidebar /><Forum /><Footer /></>} />
        <Route path="/chatbot" element={<><Header /><Sidebar /><Chatbot /><Footer /></>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
