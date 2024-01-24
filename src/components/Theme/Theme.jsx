import React from 'react';
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
            <button onClick={handleLightTheme}>Light Theme</button>
            <button onClick={handleDarkTheme}>Dark Theme</button>
            <p>Current Theme: {theme}</p>
        </div>
    );
}

export default Theme;