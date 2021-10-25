import { TextField as Input, TextFieldProps } from '@mui/material';
import React from 'react';

function TextField(props: TextFieldProps) {
  return <Input variant="outlined" fullWidth size="small" {...props} />;
}

export default TextField;
