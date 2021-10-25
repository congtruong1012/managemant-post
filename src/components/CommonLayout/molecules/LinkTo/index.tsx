import React from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import { Link, LinkProps } from '@mui/material';
const LinkTo = React.forwardRef<HTMLAnchorElement, LinkProps | RouterLinkProps>(
  (props, ref) => (
    <Link
      underline="none"
      href="/"
      component={RouterLink}
      ref={ref}
      {...props}
    />
  )
);

export default LinkTo;
