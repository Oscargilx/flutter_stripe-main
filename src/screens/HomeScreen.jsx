// src/HomeScreen.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <h1>Welcome to the Payment App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/payment">Make a Payment</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomeScreen;
