
import React from 'react';
import './Footer.css'; // Import the CSS file for Footer component

export default function Footer(){

  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">© {year} iTalk</p>
    </footer>
  );
};

