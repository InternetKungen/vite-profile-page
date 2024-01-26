const prefersDarkTheme = window.matchMedia?.('(prefers-color-scheme: dark)').matches;

const initialState = { // Vad som ska finnas i vår store
    theme: prefersDarkTheme ? 'dark' : 'light'
}

const themeReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LIGHT_THEME': {
            return {
                ...state,
                theme: 'light'
            }
        }
        case 'DARK_THEME': {
            return {
                ...state,
                theme: 'dark'
            }
        }
        case 'RAINBOW_THEME': {
            return {
                ...state,
                theme: 'rainbow'
            }
        }

        default:
            return state;
    }
}

export default themeReducer;