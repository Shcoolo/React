import { alpha, Box, IconButton, InputBase, Stack, styled, Toolbar, useTheme } from "@mui/material"
import { PersonOutlined, SettingsOutlined, DarkModeOutlined, LightModeOutlined, NotificationsNoneOutlined, Menu, Search} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import MuiAppBar from '@mui/material/AppBar';

const SearchFaild = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.75),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.90),
  },
  marginRight: 0,
  marginLeft: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginRight: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginRight: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));



const TopBar = ({open, handleDrawerOpen}) => {

  const theme = useTheme();
  const navigate = useNavigate();

  const handleMode = (mode) => {
    // localStorage.setItem('mode', mode)
  }

  return (
    <AppBar position="fixed" open={open} >
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={[
          {
            marginLeft: 5,
          },
          open && { display: 'none' },
        ]}
      >
        <Menu />
      </IconButton>

      <SearchFaild>
            <SearchIconWrapper>
              <Search />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="بحث..."
              inputProps={{ 'aria-label': 'search' }}
            />
      </SearchFaild>

      <Box flexGrow={1} />

      <Stack direction="row">
        {theme.palette.mode === 'light' ?(
          <IconButton onClick={() => handleMode('dark')} color="inherit">
            <DarkModeOutlined />
          </IconButton>
        ):(
          <IconButton onClick={() => handleMode('light')} color="inherit">
            <LightModeOutlined />
        </IconButton>
        )}

        <IconButton color="inherit">
          <NotificationsNoneOutlined />
        </IconButton>
        <IconButton color="inherit">
          <SettingsOutlined />
        </IconButton>
        <IconButton 
          color="inherit" 
          // className="personIcon"
          onClick={() => navigate('/account')}  
        >
          <PersonOutlined />

          {/* <div className="person-dropdown">
          <button style={{color: 'red'}} onClick={handleLogout}>Logout</button>
        </div> */}

        </IconButton>
       
      </Stack>

    </Toolbar>
  </AppBar>
  )
}

export default TopBar