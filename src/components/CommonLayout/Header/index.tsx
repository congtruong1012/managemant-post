import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';

export default function Header() {
  const history = useHistory();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Management Post
          </Typography>
          <Button color="inherit" onClick={() => history.push('/login')}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

