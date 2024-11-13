import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BudgetPlanner from './pages/BudgetPlanner';
import Resources from './pages/Resources';
import Chatbot from './pages/Chatbot';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/budget-planner" element={<BudgetPlanner />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;