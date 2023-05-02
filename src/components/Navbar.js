import React from 'react';
import './Navbar.css';
import Logout from './Logout';
import profileIcon from "./images/profile.png"; // replace with the URL of your profile icon

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">iTalk</li>
        <li className="image-item">
          <img className="profile-icon" src={profileIcon} alt="Profile" />
          <Logout/>
        </li>
      </ul>
    </nav>
  );
}
