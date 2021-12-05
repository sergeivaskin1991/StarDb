import React from 'react';
import './Footer.css';

function Footer() {
  const date = new Date();

  return (
    <footer className="footer">
      <p className="footer__copyright" style={{marginLeft: '10px'}}>{date.getFullYear()} StarDB by Sergei Vaskin</p>
    </footer>
  )
}

export default Footer;