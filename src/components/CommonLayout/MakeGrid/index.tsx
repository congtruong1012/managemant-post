import { Grid, GridProps } from '@mui/material';
import React, { ReactNode } from 'react';

interface Props {
  grids: Array<{
    children: ReactNode;
    gridProps?: GridProps;
  }>;
  containerProps?: GridProps;
}

const MakeGrid = ({ grids, containerProps }: Props) => (
  <Grid container spacing={2} {...containerProps}>
    {grids.map((item, index) => (
      <Grid item {...item.gridProps} key={String(index)}>
        {item.children}
      </Grid>
    ))}
  </Grid>
);

export default MakeGrid;
