import { Tab } from '@mui/material';
import { withStyles } from '@mui/styles';
import React from 'react';

/* tab item có indicator custom căn giữa */
const TabCenter = withStyles(
  {
    root: {
      textTransform: 'none',
      background: 'red',
      // fontWeight: 500,
      // // fontSize: theme.typography.subtitle1.fontSize,
      // marginRight: 48,
      // minWidth: 0,
      // minHeight: 32,
      // paddingRight: 0,
      // paddingLeft: 0,
      // '&:focus': {
      //   opacity: 1,
      // },
    },
    selected: {
      fontWeight: 600,
    },
  },
  {
    name: 'TabCenter',
  }
)(Tab);
export default TabCenter;
