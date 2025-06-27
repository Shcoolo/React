import { styled, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { TopBar, SideBar } from './components';
import { Outlet } from 'react-router-dom';
import { theme } from './Theme/theme';
import { useState } from 'react';







const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));





const App = () => {
  
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (

    <div dir='rtl' >
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <TopBar open={open} handleDrawerOpen={handleDrawerOpen} /*setMode={setMode}*/ />

        <SideBar handleDrawerClose={handleDrawerClose} open={open} />

        <Box component="main" sx={{ flexGrow: 1, p: 3 , /*backgroundColor: theme.palette.background.main*/}}>
          <DrawerHeader />

          <Outlet/>
        </Box>

      </Box>
   </ThemeProvider>
   </div>
  );
}

export default App;
