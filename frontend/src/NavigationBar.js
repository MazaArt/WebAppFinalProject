import React, { useState } from 'react';
import "./NavigationBar.css"

const NavigationBar = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Perform additional actions based on the clicked tab
  };

  return (
    <nav className="navBar">
      <ul className="navBarList" style={{display:'flex', listStyle:'none'}}>
        <li
          className={activeTab === 'Home' ? 'active' : ''}
          onClick={() => handleTabClick('Home')}
          style={{ marginRight: '500px', fontSize: 30}}
        >
          Home
        </li>
        <li
          className={activeTab === 'Profile' ? 'active' : ''}
          onClick={() => handleTabClick('Profile')}
          style={{ fontSize: 30 }}
        >
          Profile
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
