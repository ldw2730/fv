import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="nav-left">
          <Link to="/" className="nav-logo">FUTURE VISION</Link>
          <Link to="/xr-solution" className="nav-link">XR-SOLUTION</Link>
          <Link to="/work" className="nav-link">WORK</Link>
        </div>
        <div className="nav-right">
          <Link to="/contact" className="contact-btn">Contact Us</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header; 