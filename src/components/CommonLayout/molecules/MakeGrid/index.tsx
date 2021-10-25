import { Grid, GridProps } from '@mui/material';
import React, { ReactNode } from 'react';

interface Props {
  grids: Array<{
    children: ReactNode;
    gridProps?: GridProps;
  }>;
  containerProps?: GridProps;
  itemProps?: GridProps;
}

const MakeGrid = ({ grids, containerProps, itemProps }: Props) => (
  <Grid container spacing={2} {...containerProps}>
    {grids.map((item, index) => (
      <Grid
        item
        {...(itemProps ? itemProps : item.gridProps)}
        key={String(index)}
      >
        {item.children}
      </Grid>
    ))}
  </Grid>
);

export default MakeGrid;
