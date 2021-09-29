import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, LinkProps } from '@mui/material';
const LinkTo = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <Link component={RouterLink} to="/" ref={ref} {...props} />
));

export default LinkTo;
