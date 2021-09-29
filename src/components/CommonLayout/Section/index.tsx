import Grid from '@mui/material/Grid';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode | Array<ReactNode>;
}

const Section = ({ children }: Props) => (
  <Grid container spacing={2}>
    {Array.isArray(children) ? (
      children.map((item, index) => (
        <Grid item xs={12} key={String(index)}>
          {item}
        </Grid>
      ))
    ) : (
      <Grid item xs={12}>
        {children}
      </Grid>
    )}
  </Grid>
);

export default Section;
