import React, { ReactNode } from 'react'
import makeStyles from '@mui/styles/makeStyles';
import { createTheme } from '@mui/material/styles';
import Header from './Header';
import SideBar from './Sidebar';
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

interface Props {
  children: ReactNode,
  setIsLogin: Function
}

export const CommonLayout = ({ children, setIsLogin }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Header setIsLogin={setIsLogin} />
      </div>
      <div className={classes.sidebar}>
        <SideBar />
      </div>
      <div className={classes.main}>
        {children}
      </div>
    </div>
  )
}
