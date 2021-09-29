import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { createTheme } from '@mui/material/styles';
import Header from './Header';
import SideBar from './Sidebar';
import { PrivateRoute } from './PrivateRoute';
import routes from '../../routes';
import { Switch } from 'react-router';
const theme = createTheme();
const useStyles = makeStyles(() => ({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    gridTemplateColumns: '240px 1fr',
    gridTemplateAreas: `"header header" "sidebar main"`,

    minHeight: '100vh',
  },

  header: {
    gridArea: 'header',
  },
  sidebar: {
    gridArea: 'sidebar',
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper,
  },
  main: {
    gridArea: 'main',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 3),
  },
}));

export const CommonLayout = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.sidebar}>
        <SideBar />
      </div>
      <div className={classes.main}>
        <Switch>
          {routes.map((item, index) => (
            <PrivateRoute key={String(index)} {...item} />
          ))}
        </Switch>
      </div>
    </div>
  );
};
