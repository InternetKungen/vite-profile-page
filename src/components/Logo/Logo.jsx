import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

function Logo() {
    return (
        <div>
            <Link to="/" className="navLink"> 
            <figure className="logo-container">
                <p>Kim Andersson</p>
            </figure>
            </Link>
        </div>
    );
}

export default Logo;