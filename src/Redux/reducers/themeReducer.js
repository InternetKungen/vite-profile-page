const initialState = { // Vad som ska finnas i vår store
    theme: 'light'
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
        default:
            return state;
    }
}

export default themeReducer;