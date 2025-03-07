// src/SettingScreen.jsx
import React, { useState } from 'react';

const SettingScreen = () => {
  const [notifications, setNotifications] = useState(true);
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleNotificationChange = () => {
    setNotifications((prev) => !prev);
  };

  return (
    <div className="setting-screen">
      <h1>Settings</h1>
      <div className="setting-item">
        <label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={handleNotificationChange}
          />
          Enable Notifications
        </label>
      </div>
      <div className="setting-item">
        <label>Theme:</label>
        <select value={theme} onChange={handleThemeChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </div>
  );
};

export default SettingScreen;
