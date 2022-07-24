import React from 'react'
import { ThemeProvider } from 'styled-components';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { useDarkMode } from './hooks/useDarkMode';
import { GlobalStyles } from './theming/global';
import { darkTheme, lightTheme } from './theming/theme';

function App() {
    const [theme, toggleTheme, componentMounted] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    if (!componentMounted) {
        return <div />
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyles />
            <Sidebar />
            <div className="content"></div>
        </ThemeProvider>
    )
}

export default App;