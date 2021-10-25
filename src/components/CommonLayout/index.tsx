import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { createTheme } from '@mui/material/styles';
import Header from './organisms/Header';
import SideBar from './organisms/Sidebar';
import { PrivateRoute } from './molecules/PrivateRoute';
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
    backgroundColor: theme.palette.background.paper,
  },
  main: {
    gridArea: 'main',
    backgroundColor: '#fafafa',
    padding: theme.spacing(0, 3),
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
