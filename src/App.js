import './App.css';
import * as React from 'react';
import { AppBar, Toolbar, Divider, Box } from '@mui/material';
import { theme } from './theme';
import { ThemeProvider } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField'
import useWindowDimensions from './hook/useWindowDimension';
import { common } from '@mui/material/colors';



function App() {

  const { height, width } = useWindowDimensions();


  return (
    <ThemeProvider theme={theme}>
      <AppBar>
        <Toolbar>
          <div className='flex-1'>
            <MenuIcon></MenuIcon>
          </div>
          <span className='flex font-bold text-xl'>WHAT TODO!</span>
          <div className='flex-1'></div>
        </Toolbar>
      </AppBar>
      <Toolbar></Toolbar>
      <Box sx={{ backgroundColor: "primary.main", height: height }}>
        <TextField color="white.main" id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>

    </ThemeProvider>
  );
}

export default App;
