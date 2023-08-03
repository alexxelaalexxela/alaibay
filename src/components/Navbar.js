// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi'; // Icon hamburger from react-icons

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        <FiMenu />
      </div>
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/information">Informations</Link></li>
        <li><Link to="/memberspace">Espace Membre</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
