import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Image404 from '../../../assets/images/404.jpg';
import Section from '../../CommonLayout/Section';
import ButtonRound from '../ButtonRound';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    marginTop: '30px',
  },
});

export const NotFound = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <Section>
        <img src={Image404} alt="404" />
        <Typography variant="h4">Không tìm thấy trang</Typography>
        <ButtonRound onClick={() => history.goBack()}>
          Quay về trang chủ
        </ButtonRound>
      </Section>
    </div>
  );
};
