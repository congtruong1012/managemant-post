import { AuthParams, AuthPayload } from './../interface/auth';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './../constant/auth';

export function login(params: AuthParams) {
  return {
    type: LOGIN,
    params,
  };
}

export function loginSuccess(payload: AuthPayload) {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
}

export function loginFail(message: string) {
  return {
    type: LOGIN_FAIL,
    message,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
