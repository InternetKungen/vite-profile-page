import React from 'react';
import './Theme.css';
import { useDispatch, useSelector } from 'react-redux';
import { lightTheme, darkTheme } from '../../Redux/actions/themeActions'; // Uppdatera sökvägen beroende på din projektstruktur

function Theme() {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme);

    const handleLightTheme = () => {
        dispatch(lightTheme('light'));
    };

    const handleDarkTheme = () => {
        dispatch(darkTheme('dark'));
    };

    return (
        <div>
            <button className="light-theme-button" onClick={handleLightTheme}></button>
            <button className="dark-theme-button" onClick={handleDarkTheme}></button>
            <p>Current Theme: {theme}</p>
        </div>
    );
}

export default Theme;