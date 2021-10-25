import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { logout } from '../../../../action';
import { useAppDispatch } from '../../../../hook';
import LinkTo from '../../molecules/LinkTo';

export default function Header() {
  const dispatch = useAppDispatch();
  const handleLogout = () => dispatch(logout());
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <LinkTo to="/admin" color="inherit">
              Management Post
            </LinkTo>
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
