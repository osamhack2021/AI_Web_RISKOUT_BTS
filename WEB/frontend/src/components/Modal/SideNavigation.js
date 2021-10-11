// React
import React, { useState, useEffect } from 'react';

// MUI Styles
import { styled, useTheme } from '@mui/material/styles';

// MUI Components
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

// Custom Components
import SidebarLink from '../SidebarLink';
import SidebarLinkMini from '../SidebarLinkMini';

// Icons and Images
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LogoutIcon from '@mui/icons-material/Logout';

import '../../css/SideNavigation.css';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const test = styled('.sidebarBackground')(() => ({
  background: 'gray',
}));

export default function SideNavigation(props) {
  const [sidebarBackground, setSidebarBackground] = useState('');
  const { drawerWidth } = props;
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    setSidebarBackground('sidebarBackground');
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setSidebarBackground('miniSidebarBackground');
  };

  return (
    <>
      <Box
        sx={{
          background: 'rgb(29, 28, 26)',
          minHeight: '100%',
          position: 'fixed',
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2 }}
          className="hamburgerMenu"
        >
          <MenuIcon sx={{ color: '#fff', fontSize: '1.3em' }} />
        </IconButton>
        <Box sx={{ position: 'fixed' }}>
          <SidebarLinkMini
            icon={InfoIcon}
            text="언론 동향"
            href="/presstrends"
            className="a"
          />
          <SidebarLinkMini
            icon={SearchIcon}
            text="탐지현황"
            href="/detectionstatus"
            isOn={true}
            className="b"
          />
          <SidebarLinkMini
            icon={AssessmentIcon}
            text="리포트"
            href="/riskreport"
            className="c"
          />
          <SidebarLinkMini
            icon={LogoutIcon}
            text="로그아웃"
            href="/logout"
            className="d"
          />
        </Box>
      </Box>

      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        className="sub_header"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            background: 'rgb(40, 40, 40)',
            left: 0,
            top: 0,
            width: drawerWidth,
            height: '100vh',
          },
        }}
      >
        <Box className="closeButton">
          <Link href="/">
            <img
              src="https://riskout.ithosting.repl.co/images/main/logo_w.png"
              alt="홈"
              className="image"
            />
          </Link>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon sx={{ color: 'white' }} />
            ) : (
              <ChevronRightIcon sx={{ color: 'red' }} />
            )}
          </IconButton>
        </Box>
        <List className="sub_menu">
          <SidebarLink icon={InfoIcon} text="언론동향" href="/presstrends" />
          <SidebarLink
            icon={SearchIcon}
            text="탐지현황"
            href="/detectionstatus"
            isOn={true}
          />
          <SidebarLink icon={AssessmentIcon} text="리포트" href="/riskreport" />
          <SidebarLink icon={LogoutIcon} text="로그아웃" href="/" />
        </List>
        <ListItem>
          <ListItemText
            primary="Copyright © 2021. RISKOUT All right reserved."
            className="copyright"
          />
        </ListItem>
      </Drawer>
    </>
  );
}
