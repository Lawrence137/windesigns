import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

export const Investment = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>

      <h1>Investor Dashboard</h1>

      {/* Slider component with different companies */}
      {/* Replace this with your own Slider component */}
      <div>
        <h2>Slider Component</h2>
        {/* Place your slider component code here */}
      </div>

      <button>
        <Link to="/list-of-companies">Start Investing</Link>
      </button>

      <button>
        <Link to="/list-your-company">List Your Company</Link>
      </button>
    </div>
  );
};



