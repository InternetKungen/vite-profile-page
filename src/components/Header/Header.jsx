// Header.jsx
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';
import './Header.css';
import Theme from '../Theme/Theme';

const Header = () => {
  return (
    <header>
        <div className="header-inner-container">
            <Logo />
            <Theme />
            <Navbar />
        </div>
    </header>
  );
};

export default Header;