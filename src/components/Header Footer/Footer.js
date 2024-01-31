import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      &copy; {year} Kailash Singh - Portfolio
    </footer>
  );
};

export default Footer;
