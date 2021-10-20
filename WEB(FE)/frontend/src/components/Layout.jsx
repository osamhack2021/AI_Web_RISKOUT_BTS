import React from 'react';

// MUI Styles
import { styled, useTheme } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import SideNavigation from './Modal/SideNavigation';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth - 20}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

export default class MainLayout extends React.Component {
  render() {
    const { children, handleLogout, open } = this.props;
    return (
      <Box
        component="main"
        sx={{
          bgColor: (theme) => theme.palette.background.default,
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <SideNavigation
            drawerWidth={drawerWidth}
            handleLogout={handleLogout}
          ></SideNavigation>

          <Main open={open}>
            <Box
              m={2}
              sx={{
                backgroundColor: 'inherit',
                minHeight: '100%',
                py: 3,
                paddingLeft: '20px',
                marginLeft: '40px',
              }}
            >
              <Container maxWidth={false}>{children}</Container>
            </Box>
          </Main>
        </Box>
      </Box>
    );
  }
}
