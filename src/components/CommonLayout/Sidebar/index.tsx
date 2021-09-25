import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import PostAddIcon from '@mui/icons-material/PostAdd';
import {
  List, ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../routes';

export default function SideBar() {
  return (
    <List>
      {routes.map(item => (
        <ListItem disablePadding component={Link} to={item.path} key={item.path}>
          <ListItemButton>
            <ListItemIcon>
              <item.icon />
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}