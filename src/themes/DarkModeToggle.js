import React from 'react';
import { useTheme } from './theme-context';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export const DarkModeToggle = () => {
    const { theme, toggleMode } = useTheme();

    return (
        <IconButton
            sx={{ ml: 1, marginBottom: '10px' }}
            onClick={toggleMode}
            color="primary"
        >
            {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon/>}
        </IconButton>
    );
};