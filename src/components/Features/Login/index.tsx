import {
  Alert,
  Button,
  CircularProgress,
  TextFieldProps,
  Typography,
  TextField,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import md5 from 'md5';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { login } from '../../../action';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { AuthParams } from '../../../interface';
import yup from '../../../utils/yup';
import Section from '../../CommonLayout/molecules/Section';
import jwt from 'jwt-decode';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers';
import { textFieldProps } from '../../../constant/commomProps';

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
  const { loading, code } = selector;
  const dispatch = useAppDispatch();
  const { push } = useHistory();

  const schema = yup.object({
    username: yup.string().required().label('Tên đăng nhập'),
    password: yup.string().required().label('Mật khâu'),
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<AuthParams>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  console.log('errorss', errors);

  const handleLogin = (data: AuthParams) => {
    console.log('data', data);

    dispatch(login({ ...data, password: md5(data?.password) }));
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const verifyToken = token && jwt(token);
    if (token && verifyToken) push('/admin/dashboard');
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.form}>
        <form onSubmit={handleSubmit(handleLogin)}>
          <Section>
            <Typography variant="h5" align="center">
              ĐĂNG NHẬP
            </Typography>
            <Controller
              name="username"
              control={control}
              render={(cProps: JSX.IntrinsicAttributes & TextFieldProps) => (
                <TextField
                  label="Tên đăng nhập"
                  {...textFieldProps}
                  error={!!errors?.username}
                  helperText={errors?.username?.message || ''}
                  {...cProps}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={(cProps: JSX.IntrinsicAttributes & TextFieldProps) => (
                <TextField
                  label="Mật khẩu"
                  type="password"
                  {...textFieldProps}
                  error={!!errors?.password}
                  helperText={errors?.password?.message || ''}
                  {...cProps}
                />
              )}
            />
            {code === 401 && <Alert severity="error">Đăng nhập thất bại</Alert>}
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
