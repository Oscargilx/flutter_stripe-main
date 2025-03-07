// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import PaymentScreen from './PaymentScreen';
import SettingScreen from './SettingScreen';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/payment" element={<PaymentScreen />} />
          <Route path="/settings" element={<SettingScreen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
