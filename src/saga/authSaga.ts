import { LOGIN, LOGOUT } from './../constant/auth';
import { AuthPayload } from './../interface/auth';
import { userApi } from './../api/userApi';
import { call, delay, fork, put, take } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { loginFail, loginSuccess } from "../action";
import { push } from 'connected-react-router';

function* handleLogin({ params }: AnyAction) {
  try {
    const { login } = userApi
    const resp: AuthPayload = yield call(login, params);
    if (resp.data) {
      localStorage.setItem('token', resp.data)
      yield put(loginSuccess(resp))
      yield put(push('/'))
    }
  } catch (error) {
    yield put(loginFail(error as string))
  }
}

function* handleLogout() {
  yield delay(1000);
  localStorage.removeItem('token');
  yield put(push('/login'))

}

function* watchLoginFlow() {
  console.log('beginning....');
  
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('token'));

    if (!isLoggedIn) {
      const action: AnyAction = yield take(LOGIN);
      console.log('...logining');
      
      yield fork(handleLogin, action);
    }

    yield take(LOGOUT);
    yield call(handleLogout);
    console.log('...logouting');

  }
}

export default function* authSaga() {
  yield call(watchLoginFlow)
}