import React, { useState } from "react";
import "./Navbar.css";
import Logout from "./Logout";
import profileIcon from "./images/profile.png";

export default function Navbar(props) {
  const [showLogout, setShowLogout] = useState(false);

  const handleProfileClick = () => {
    setShowLogout(!showLogout);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">iTalk</li>
        {props.isLoggedIn && (
          <li className="image-item">
            <img
              className="profile-icon"
              src={profileIcon}
              alt="Profile"
              onClick={handleProfileClick}
            />
            {showLogout && <div className="dropdown"><Logout /></div>}
          </li>
        )}
      </ul>
    </nav>
  );
}
