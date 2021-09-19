import { TextField, Typography, Button } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import AxiosClient from '../../../api';
import { Section } from '../../CommonLayout/Section';
const useStyles = makeStyles(({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh'
  },
  form: {
    height: '100%',
    margin: 'auto',
    width: 300,
    padding: 16,
  }
}))

interface Props {
  setIsLogin: Function
}

export const Login = ({ setIsLogin }: Props) => {
  const classes = useStyles()

  const handleLogin = async () => {
    const res = await AxiosClient.post('/login', {
      username: 'congtruong',
      password: '4297f44b13955235245b2497399d7a93'
    })
    if(res.data) {
      localStorage.setItem('access_token', res.data)
    }
      setIsLogin(true)
  }

  return (
    <div className={classes.root}>
      <div className={classes.form}>
        <form>
          <Section>
            <Typography variant="h5" align="center">ĐĂNG NHẬP</Typography>
            <TextField label="Tên đăng nhập" variant="outlined" fullWidth size="small" />
            <TextField label="Mật khẩu" variant="outlined" fullWidth size="small" />
            <Button onClick={handleLogin} variant="contained">Đăng nhập</Button>
          </Section>
        </form>
      </div>
    </div>
  )
}
