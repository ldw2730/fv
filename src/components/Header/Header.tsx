import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (path: string) => {
    setIsMenuOpen(false);
    location.href = `#${path}`;
  };

  return (
    <header className="header">
      <nav className="nav-container">
        

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-logo" onClick={() => window.scrollTo(0, 0)}>FUTURE VISION</Link>
          <Link to="/xr-solution" className="nav-link" onClick={() => handleLinkClick('xr-solution')}>XR-SOLUTION</Link>
          <Link to="/work" className="nav-link" onClick={() => handleLinkClick('work')}>WORK</Link>
        </div>
        <Link to="/contact" className="contact-btn" onClick={() => handleLinkClick('contact')}>Contact Us</Link>

          <button className="hamburger-btn" onClick={toggleMenu} aria-label="메뉴 열기">
            <span></span>
            <span></span>
            <span></span>
          </button>

      </nav>
    </header>
  );
};

export default Header; 