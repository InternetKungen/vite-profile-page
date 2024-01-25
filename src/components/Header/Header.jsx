// Header.jsx
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';
import './Header.css';
import Theme from '../Theme/Theme';
import { useSelector } from 'react-redux';

const Header = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <header className={`header-container ${theme}`}>
        <div className="header-inner-container">
          <div className="header-logo-theme-container">
            <Logo />
            <Theme />
          </div>
            <Navbar />
        </div>
    </header>
  );
};

export default Header;