import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Box from "@mui/material/Box";
import InfoIcon from "@mui/icons-material/Info";
import SearchIcon from "@mui/icons-material/Search";
import AssessmentIcon from "@mui/icons-material/Assessment";
import LogoutIcon from "@mui/icons-material/Logout";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { Link as RouterLink, MemoryRouter as Router } from "react-router-dom";
import Link from "@mui/material/Link";
import Search from "./Search";
import BasicTable from "./BasicTable";
import "../css/SideNavigation.css";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    })
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end"
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const onLogout = () => {};

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ background: "rgb(29, 28, 26)" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
          className="hamburgerMenu"
        >
          <MenuIcon />
        </IconButton>
        <Box className="iconMenuBox">
          <Link to="/" underline="none" className="inconMenuLink">
            <InfoIcon sx={{ color: "#fff" }} className="iconMenu" />
          </Link>
        </Box>
        <Box className="iconMenuBox">
          <Link to="" underline="none" className="inconMenuLink">
            <SearchIcon sx={{ color: "#3e90ff" }} className="iconMenu" />
          </Link>
        </Box>
        <Box className="iconMenuBox">
          <Link to="" underline="none" className="inconMenuLink">
            <AssessmentIcon sx={{ color: "#fff" }} className="iconMenu" />
          </Link>
        </Box>
        <Box className="iconMenuBox">
          <Link to="" underline="none" className="inconMenuLink">
            <LogoutIcon sx={{ color: "#fff" }} className="iconMenu" />
          </Link>
        </Box>
      </Box>
      <Drawer
        sx={{
          width: 270,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            background: "rgb(29, 28, 26)",
            left: 0,
            top: 0,
            width: "250px",
            height: "100vh"
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
        className="sub_header"
      >
        <DrawerHeader>
          <Link to="">
            <img
              src={require("../images/logo_w.png")}
              alt="홈"
              className="image"
            />
          </Link>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon sx={{ color: "white" }} />
            ) : (
              <ChevronRightIcon sx={{ color: "red" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <List className="sub_menu">
          <ListItem className="pin">
            <Link to="" underline="none" className="list">
              <ListItemButton>
                <InfoIcon className="icon" />
                <ListItemText primary="언론 동향" className="link" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem className="pin">
            <Link to="" underline="none" className="list">
              <ListItemButton className="on">
                <SearchIcon className="icon" />
                <ListItemText primary="탐지 현황" className="link" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem className="pin">
            <Link to="" underline="none" className="list">
              <ListItemButton>
                <AssessmentIcon className="icon" />
                <ListItemText primary="리포트" className="link" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem className="pin">
            <ListItemButton>
              <LogoutIcon className="icon" />
              <ListItemText
                primary="로그아웃"
                className="link"
                sx={{ color: "#fff" }}
                onLogout={onLogout}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <ListItem>
          <ListItemText
            primary="Copyright © 2021. RISKOUT All right reserved."
            className="copyright"
          />
        </ListItem>
      </Drawer>
      <Main open={open}>
        <Search />
        <BasicTable />
      </Main>
    </Box>
  );
}
