import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';

interface Props {
  setIsLogin: Function
}

export default function Header({ setIsLogin }: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Management Post
          </Typography>
          <Button color="inherit" onClick={() => setIsLogin(false)}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

