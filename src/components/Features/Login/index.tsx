import { TextField, Typography, Button, CircularProgress } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import { login } from '../../../action';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { Section } from '../../CommonLayout/Section';
const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  form: {
    height: '100%',
    margin: 'auto',
    width: 300,
    padding: 16,
  },
});

export const Login = () => {
  const classes = useStyles();
  const selector = useAppSelector((state) => state.auth);
  const { loading } = selector;
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(
      login({
        username: 'congtruong',
        password: '4297f44b13955235245b2497399d7a93',
      })
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.form}>
        <form>
          <Section>
            <Typography variant="h5" align="center">
              ĐĂNG NHẬP
            </Typography>
            <TextField
              label="Tên đăng nhập"
              variant="outlined"
              fullWidth
              size="small"
            />
            <TextField
              label="Mật khẩu"
              variant="outlined"
              fullWidth
              size="small"
            />
            <Button
              onClick={handleLogin}
              variant="contained"
              startIcon={loading && <CircularProgress size={20} />}
              disabled={loading}
            >
              Đăng nhập
            </Button>
          </Section>
        </form>
      </div>
    </div>
  );
};
