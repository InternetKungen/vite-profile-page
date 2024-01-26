import React from 'react';
import './Theme.css';
import { useDispatch, useSelector } from 'react-redux';
import { lightTheme, darkTheme, rainbowTheme } from '../../Redux/actions/themeActions'; // Uppdatera sökvägen beroende på din projektstruktur

function Theme() {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme);

    const handleLightTheme = () => {
        dispatch(lightTheme('light'));
    };

    const handleDarkTheme = () => {
        dispatch(darkTheme('dark'));
    };

    const handleRainbowTheme = () => {
        dispatch(rainbowTheme('rainbow'));
    };

    return (
        <div className="theme-button-container">
            <button className="light-theme-button" onClick={handleLightTheme}></button>
            <button className="dark-theme-button" onClick={handleDarkTheme}></button>
            <button className="rainbow-theme-button" onClick={handleRainbowTheme}></button>
        </div>
    );
}

export default Theme;