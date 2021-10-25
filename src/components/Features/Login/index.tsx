import { yupResolver } from '@hookform/resolvers/yup';
import { Button, CircularProgress, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import md5 from 'md5';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { login } from '../../../action';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { AuthParams } from '../../../interface';
import yup from '../../../utils/yup';
import Section from '../../CommonLayout/molecules/Section';
import jwt from 'jwt-decode';
import { useHistory } from 'react-router-dom';
import TextField from '../../CommonLayout/atom/TextField';

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
  const { push } = useHistory();

  const schema = yup.object({
    username: yup.string().required().label('Tên đăng nhập'),
    password: yup.string().required().label('Mật khâu'),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<AuthParams>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleLogin = (data: AuthParams) => {
    dispatch(login({ ...data, password: md5(data?.password) }));
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const verifyToken = token && jwt(token);
    if (token && verifyToken) push('/admin');
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.form}>
        <form onSubmit={handleSubmit(handleLogin)}>
          <Section>
            <Typography variant="h5" align="center">
              ĐĂNG NHẬP
            </Typography>
            <TextField
              label="Tên đăng nhập"
              variant="outlined"
              fullWidth
              size="small"
              {...register('username')}
              error={!!errors?.username}
              helperText={errors?.username?.message || ''}
            />
            <TextField
              label="Mật khẩu"
              variant="outlined"
              type="password"
              fullWidth
              size="small"
              {...register('password')}
              error={!!errors?.password}
              helperText={errors?.password?.message || ''}
            />
            <Button
              type="submit"
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
