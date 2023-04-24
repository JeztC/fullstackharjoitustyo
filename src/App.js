import {
    BrowserRouter as Router,
    Routes, Route, Link
} from 'react-router-dom'
import Contact from "./components/Contact";
import FrontPage from "./components/FrontPage";
import Products from "./components/Products";
import Locations from "./components/Locations";
import {useEffect, useState} from "react";
import {ThemeContext} from './themes/theme-context';
import {ThemeProvider, Theme} from '@mui/material/styles';
import {darkTheme, lightTheme} from "./themes/theme-context";
import Header from "./components/Header";

const App = () => {
    const initialTheme = localStorage.getItem('mode') === 'light' ? lightTheme : darkTheme;
    const [mode, setMode] = useState(localStorage.getItem('mode'));
    const [theme, setTheme] = useState(initialTheme);

    const toggleMode = () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        setMode(newMode);
        localStorage.setItem('mode', newMode);
    };

    useEffect(() => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        setTheme(newMode === 'light' ? darkTheme : lightTheme);
    }, [mode]);

    return (
        <ThemeProvider theme={theme}>
            <ThemeContext.Provider value={{ theme, toggleMode }}>
                <Router>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<FrontPage />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/locations" element={<Locations />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>

                    <div>
                        <i>© Kokkolan Herkkucafe 2023</i>
                    </div>
                </Router>
            </ThemeContext.Provider>
        </ThemeProvider>
    )
}

export default App