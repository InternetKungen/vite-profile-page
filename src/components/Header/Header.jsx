// Header.jsx
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';
import './Header.css';

const Header = () => {
  return (
    <header>
        <div className="header-inner-container">
            <Logo />
            <Navbar />
        </div>
    </header>
  );
};

export default Header;