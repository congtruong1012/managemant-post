import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const ButtonRounded = styled(Button)({
  textTransform: 'unset',
  borderRadius: 20,
});

function ButtonRound(props: ButtonProps) {
  return <ButtonRounded variant="contained" color="primary" {...props} />;
}

export default ButtonRound;
