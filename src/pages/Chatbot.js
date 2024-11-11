import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [chatbotResponse, setChatbotResponse] = useState('');
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSend = async () => {
    if (!userInput) return;

    try {
      // Send the user input to the backend
      const response = await axios.post(
        'http://localhost:5000/api/chat',  // Full URL to backend endpoint
        { user_input: userInput }
      );

      if (response.data && response.data.generated_text) {
        setChatbotResponse(response.data.generated_text);  // Display response from the backend
        setError(null);
      } else {
        setChatbotResponse('No response from the model.');
      }
    } catch (error) {
      console.error('Error fetching response:', error);

      if (error.response) {
        setChatbotResponse(`Error: ${error.response.status}`);
      } else if (error.request) {
        setChatbotResponse('No response from server.');
      } else {
        setChatbotResponse('Unknown error.');
      }
    }
  };

  return (
    <div>
      <h2>Meet Plutus!</h2>
      <p>Our AI chatbot is here to assist you.</p>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Ask me a finance question..."
      />
      <button onClick={handleSend}>Send</button>
      <div>
        <h4>Response:</h4>
        <p>{chatbotResponse}</p>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
};

export default Chatbot;