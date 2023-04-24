import {createContext, useContext} from 'react';
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        background: {
            default: 'rgb(13, 17, 23)',
        },
        mode: 'dark',
        primary: {
            main: 'rgb(0,0,0)'
        },
        secondary: {
            main: '#fff',
        },
    },
});

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: 'white',
        },
        primary: {
            main: 'rgb(0,0,0)'
        },
        text: {
            primary: '#000000',
        },
        secondary: {
            main: '#000',
        },
    },
});

const ThemeContext = createContext({
    theme: lightTheme,
    toggleMode: () => {},
});

export function useTheme() {
    return useContext(ThemeContext);
}

export { ThemeContext, darkTheme, lightTheme };