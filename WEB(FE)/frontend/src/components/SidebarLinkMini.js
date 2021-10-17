import React from 'react';
import { NavLink } from 'react-router-dom';

import Box from '@mui/material/Box';

export default function SidebarLinkMini(props) {
  const { icon: ListIcon, text, href, isOn } = props;

  return (
    <Box className="iconMenuBox">
      <NavLink to={href} className="inconMenuLink" activeClassName="on">
        <ListIcon sx={{ color: '#fff' }} className="iconMenu" />
      </NavLink>
    </Box>
  );
}
