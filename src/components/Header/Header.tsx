import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="nav-left">
          <Link to="/" className="nav-logo">FUTURE VISION</Link>
          <button className="hamburger-btn" onClick={toggleMenu} aria-label="메뉴 열기">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/xr-solution" className="nav-link" onClick={() => setIsMenuOpen(false)}>XR-SOLUTION</Link>
          <Link to="/work" className="nav-link" onClick={() => setIsMenuOpen(false)}>WORK</Link>
          <Link to="/contact" className="contact-btn" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header; 