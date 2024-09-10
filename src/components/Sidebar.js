import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li><NavLink exact to="/home" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/budget-planner" activeClassName="active">Budget Planner</NavLink></li>
          <li><NavLink to="/resources" activeClassName="active">Resources</NavLink></li>
          <li><NavLink to="/forum" activeClassName="active">Forum</NavLink></li>
          <li><NavLink to="/chatbot" activeClassName="active">Chatbot</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
