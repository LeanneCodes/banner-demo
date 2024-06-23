// src/Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container text-center">
        <p>&copy; {currentYear} Leanne Goldsmith. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
