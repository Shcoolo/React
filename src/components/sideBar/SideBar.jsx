import { Avatar, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Typography, useTheme } from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom";
import MuiDrawer from '@mui/material/Drawer';
import { HomeOutlined, ChevronRight, ArticleOutlined, BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, HelpOutlineOutlined, MapOutlined, PeopleAltOutlined, PersonOutlined, PieChartOutlineOutlined, TimelineOutlined } from "@mui/icons-material";
import { grey } from '@mui/material/colors';


const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      variants: [
        {
          props: ({ open }) => open,
          style: {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
          },
        },
        {
          props: ({ open }) => !open,
          style: {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
          },
        },
      ],
    }),
  );




  const Array1 = [
    { text: "لوحة التحكم", icon: <HomeOutlined />, path: "/"},
    { text: "إدارة الصلاحيات", icon: <PeopleAltOutlined />, path: '/permissions'},
    { text: "Contacts Infromation", icon: <ContactsOutlined />, path: "/contacts"},
    { text: "Invoices Balances", icon: <ArticleOutlined />, path: "/invoices"},
  ];

  const Array2 = [
    { text: "Profile Form", icon: <PersonOutlined />, path: "/form"},
    { text: "Calender", icon: <CalendarTodayOutlined />, path: '/calendar'},
    { text: "FAQ Page", icon: <HelpOutlineOutlined />, path: "/faq"},
  ];

  const Array3 = [
    { text: "Bar chart", icon: <BarChartOutlined />, path: "/bar"},
    { text: "Pie Chart", icon: <PieChartOutlineOutlined />, path: '/pie'},
    { text: "Line Chart", icon: <TimelineOutlined />, path: "/line"},
    { text: "Geography Chart", icon: <MapOutlined />, path: "/geography"},
  ];


const SideBar = ({ handleDrawerClose , open}) => {

  let location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  // const { user } = useSelector( state => state.auth )
  const user = null;
  

    return (
    <Drawer variant="permanent" open={open} className="sidebar font" anchor="right"
    sx={{}} >
    <DrawerHeader>
    
 
      <IconButton onClick={handleDrawerClose}>
        <ChevronRight /> 
      </IconButton>

    </DrawerHeader>

    <Divider />

    <Avatar
      sx={{ 
        mx: 'auto', 
        my: 1, 
        width: open?'88px': '44px', 
        height: open?'88px': '44px', 
        border: '1px solid gray', 
        transition: '0.25s'
      }} 
      alt="Remy Sharp" 
      src="data:image/jpeg;base64,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" 
    />
    <Typography 
      align="center" 
      sx={{fontSize: open?'17px':0, transition: '0.25s'}}
    >{user?user.username:'اسم المستخدم'}</Typography>

    <Typography 
      align="center" 
      sx={{fontSize: open?'15px':0, color: theme.palette.info.main, transition: '0.25s' }} 
    >{ user?user.type:'نوع الصلاحية'}</Typography>

    <Divider />

    <List className="font">
      {Array1.map((item, index) => (
        <ListItem key={index} disablePadding sx={{ display: 'block' }} >
          <ListItemButton
            onClick={() => navigate(item.path)}
            sx={[
              {
                minHeight: 48,
                px: 2.5,
                backgroundColor: location.pathname === item.path? (theme.palette.mode === 'dark'?grey[800]:grey[300]):null
              
              },
              open
                ? {
                    justifyContent: 'initial',
                  }
                : {
                    justifyContent: 'center',
                  },
            ]}
          >
            <ListItemIcon
              sx={[
                {
                  minWidth: 0,
                  justifyContent: 'center',
                },
                open
                  ? {
                      ml: 3,
                    }
                  : {
                      ml: 'auto',
                    },
              ]}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={[
                {textAlign: "right",},
                open
                  ? {
                      opacity: 1,
                    }
                  : {
                      opacity: 0,
                    },
              ]}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>


    <Divider />


    <List>
      {Array2.map((item, index) => (
        <ListItem key={index} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            onClick={() => navigate(item.path)}
            sx={[
              {
                minHeight: 48,
                px: 2.5,
                backgroundColor: location.pathname === item.path? (theme.palette.mode === 'dark'?grey[800]:grey[300]):null
            
              },
              open
                ? {
                    justifyContent: 'initial',
                  }
                : {
                    justifyContent: 'center',
                  },
            ]}
          >
            <ListItemIcon
              sx={[
                {
                  minWidth: 0,
                  justifyContent: 'center',
                },
                open
                  ? {
                      ml: 3,
                    }
                  : {
                      ml: 'auto',
                    },
              ]}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={[
                {textAlign: "right",},
                open
                  ? {
                      opacity: 1,
                    }
                  : {
                      opacity: 0,
                    },
              ]}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>

    <Divider />


<List>
  {Array3.map((item, index) => (
    <ListItem key={index} disablePadding sx={{ display: 'block' }}>
      <ListItemButton
        onClick={() => navigate(item.path)}
        sx={[
          {
            minHeight: 48,
            px: 2.5,
            backgroundColor: location.pathname === item.path? (theme.palette.mode === 'dark'?grey[800]:grey[300]):null
              
          },
          open
            ? {
                justifyContent: 'initial',
              }
            : {
                justifyContent: 'center',
              },
        ]}
      >
        <ListItemIcon
          sx={[
            {
              minWidth: 0,
              justifyContent: 'center',
            },
            open
              ? {
                  ml: 3,
                }
              : {
                  ml: 'auto',
                },
          ]}
        >
          {item.icon}
        </ListItemIcon>
        <ListItemText
          primary={item.text}
          sx={[
            {textAlign: "right",},
            open
              ? {
                  opacity: 1,
                }
              : {
                  opacity: 0,
                },
          ]}
        />
      </ListItemButton>
    </ListItem>
  ))}
</List>


  </Drawer>
  )
}

export default SideBar