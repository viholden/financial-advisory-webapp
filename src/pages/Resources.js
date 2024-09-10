// src/pages/Resources.js
import React from 'react';
import './Resources.css'; // Import the CSS file for styling

const resources = [
  { title: 'Resource 1', link: 'https://example.com/1', description: 'Short description about Resource 1.' },
  { title: 'Resource 2', link: 'https://example.com/2', description: 'Short description about Resource 2.' },
  { title: 'Resource 3', link: 'https://example.com/3', description: 'Short description about Resource 3.' },
  { title: 'Resource 4', link: 'https://example.com/4', description: 'Short description about Resource 4.' },
  { title: 'Resource 5', link: 'https://example.com/5', description: 'Short description about Resource 5.' },
  { title: 'Resource 6', link: 'https://example.com/6', description: 'Short description about Resource 6.' },
  { title: 'Resource 7', link: 'https://example.com/7', description: 'Short description about Resource 7.' },
  { title: 'Resource 8', link: 'https://example.com/8', description: 'Short description about Resource 8.' },
  { title: 'Resource 9', link: 'https://example.com/9', description: 'Short description about Resource 9.' },
  { title: 'Resource 10', link: 'https://example.com/10', description: 'Short description about Resource 10.' },
  { title: 'Resource 11', link: 'https://example.com/11', description: 'Short description about Resource 11.' },
  { title: 'Resource 12', link: 'https://example.com/12', description: 'Short description about Resource 12.' },
  { title: 'Resource 13', link: 'https://example.com/13', description: 'Short description about Resource 13.' },
  { title: 'Resource 14', link: 'https://example.com/14', description: 'Short description about Resource 14.' },
  { title: 'Resource 15', link: 'https://example.com/15', description: 'Short description about Resource 15.' },
  { title: 'Resource 16', link: 'https://example.com/16', description: 'Short description about Resource 16.' }
];

const Resources = () => {
  return (
    <div className="resources-container">
      {resources.map((resource, index) => (
        <div key={index} className="card">
          <a href={resource.link} target="_blank" rel="noopener noreferrer">
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Resources;
