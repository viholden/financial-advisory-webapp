import React from 'react';
import './Chatbot.css';

const Chatbot = () => {
  return (
    <div className="chatbot-container">
      <h2>Meet Plutus!</h2>
      <p>Our AI chatbot is here to assist you.</p>
      <div className="iframe-container">
        <iframe
          src="https://kumabear8-plutus.hf.space" 
          frameBorder="0"
          width="850"
          height="450"
        ></iframe>
      </div>
    </div>
  );
};

export default Chatbot;