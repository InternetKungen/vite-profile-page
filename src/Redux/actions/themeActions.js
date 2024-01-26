const lightTheme = (data) => {
    return {
        type: 'LIGHT_THEME', // Vad för uppdatering ska vi göra (Öka värdet i räknaren)
        payload: data // Den data vi vill spara i vår store
    }
}

const darkTheme = (data) => {
    return {
        type: 'DARK_THEME',
        payload: data
    }
}

const rainbowTheme = (data) => {
    return {
        type: 'RAINBOW_THEME',
        payload: data
    }
}

export { lightTheme, darkTheme, rainbowTheme };