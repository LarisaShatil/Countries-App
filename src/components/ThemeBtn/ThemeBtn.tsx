import { IconButton, useTheme } from '@mui/material';
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import React, { useContext } from 'react'
import { ThemeContext } from '../../App';

const ThemeBtn = () => {
  const colorMode = useContext(ThemeContext);
  const theme = useTheme();
  return (
    <IconButton
      sx={{ color: "text.secondary" }}
      onClick={() => colorMode.toggleMode()}
    >
      {theme.palette.mode === "light" ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
}

export default ThemeBtn;