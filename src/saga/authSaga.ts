import { call, delay, put, takeLatest } from '@redux-saga/core/effects';
import { push } from 'connected-react-router';
import { AnyAction } from 'redux';
import { loginFail, loginSuccess } from '../action';
import { userApi } from './../api/userApi';
import { LOGIN, LOGOUT } from './../constant/auth';
import { AuthPayload } from './../interface/auth';

function* handleLogin({ params }: AnyAction) {
  try {
    const { login } = userApi;
    const resp: AuthPayload = yield call(login, params);
    if (resp.data) {
      localStorage.setItem('token', resp.data);
      yield put(loginSuccess(resp));
      yield put(push('/admin'));
    }
  } catch (error) {
    yield put(loginFail(error as string));
  }
}

function* handleLogout() {
  yield delay(1000);
  localStorage.removeItem('token');
  yield put(push('/login'));
}

export default function* authSaga() {
  yield takeLatest(LOGIN, handleLogin);
  yield takeLatest(LOGOUT, handleLogout);
}
