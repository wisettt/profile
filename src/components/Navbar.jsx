import React from 'react';
import './Navbar.css';
function Navbar({ menuActive, toggleMenu, setMenuActive }) {
  return (
    <nav className={`navbar ${menuActive ? 'active' : ''}`}>
      <div className="logo">Wiset</div>

      {/* Hamburger menu icon */}
      <div
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') toggleMenu(); }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className="nav-links">
        <li><a href="#" onClick={() => setMenuActive(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuActive(false)}>About</a></li>
        <li><a href="#qualification" onClick={() => setMenuActive(false)}>Qualifications</a></li>
        <li><a href="#certificate" onClick={() => setMenuActive(false)}>Certificate</a></li>
        <li><a href="#portfolio" onClick={() => setMenuActive(false)}>Publications</a></li>
        <li><a href="#contact" onClick={() => setMenuActive(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
