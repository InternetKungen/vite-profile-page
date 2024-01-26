import React from 'react';
import './Title.css';
import { useSelector } from 'react-redux';

function Title ({title}) {
    const theme = useSelector((state) => state.theme);

    return (
        <div className={`title-container ${theme}`}>
            <h2>{title}</h2>
        </div>
    );
}

export default Title;