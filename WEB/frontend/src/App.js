import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import { SnackbarProvider, useSnackbar } from 'notistack';
import Layout from './components/Layout';

import Board from './pages/Board';
import DetectionStatus from './pages/DetectionStatus';
import Dashboard from './pages/Dashboard';
import RiskReport from './pages/RiskReport';

import LoginModal from './components/Modal/LoginModal';
import RegisterModal from './components/Modal/RegisterModal';
import PasswordResetModal from './components/Modal/PasswordResetModal';
import InitInfo from './components/Modal/InitInfo';
import SearchBar from './components/SearchBar';
import DynamicRoutes from './DynamicRoutes';

import './App.css';
// import './css/style.css';

const mdTheme = createTheme({
  palette: {
    mode: 'dark',
    success: {
      main: 'rgb(40, 189, 139)',
    },
    warning: {
      main: 'rgb(255, 167, 37)',
    },
    error: {
      main: 'rgb(252, 85, 80)',
    },
  },
  typography: {
    fontFamily: '"Noto Sans KR" ,"Gothic A1", Arial',
  },
});

export default function App() {
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState([]);

  let [isAuthenticated, setisAuthenticated] = useState(
    localStorage.getItem('token') ? true : false
  );

  const userHasAuthenticated = (authenticated, username, token) => {
    setisAuthenticated(authenticated);
    setUser(username);
    console.log('토큰 저장됨');
    localStorage.setItem('token', token);
  }; //회원가입이나 로그인이 성공했을 때 토큰을 저장

  const handleLogout = () => {
    setisAuthenticated(false);
    setUser('');
    localStorage.removeItem('token');
    setModal(false);
  }; //로그아웃

  console.log(isAuthenticated);

  return (
    <ThemeProvider theme={mdTheme}>
      <CssBaseline />
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Layout handleLogout={handleLogout}>
          <Route exact path="/">
            <Board />
          </Route>

          <Route exact path="/login">
            <LoginModal
              setModal={setModal}
              userHasAuthenticated={userHasAuthenticated}
            />
          </Route>

          <Route exact path="/init">
            <InitInfo />
          </Route>

          <Route exact path="/presstrends">
            <Dashboard />
          </Route>

          <Route exact path="/detectionstatus">
            <DetectionStatus />
          </Route>

          <Route exact path="/riskreport">
            <RiskReport />
          </Route>

          <Route exact path="/login">
            <LoginModal
              setModal={setModal}
              userHasAuthenticated={userHasAuthenticated}
            />
          </Route>
          <Route exact path="/register">
            <RegisterModal setModal={setModal} />
          </Route>

          <Route exact path="/init">
            <InitInfo setModal={setModal} />
          </Route>

          <Route exact path="/password_reset">
            <PasswordResetModal setModal={setModal} />
          </Route>
        </Layout>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
