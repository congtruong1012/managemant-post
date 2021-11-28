import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from './../constant/auth';
import produce from 'immer';
import { AnyAction } from 'redux';

const initialState = {
  loading: false,
  code: 0,
  error: '',
  user: {},
};

const authReducer = (state = initialState, action: AnyAction) =>
  produce(state, (draft) => {
    const { type } = action;
    switch (type) {
      case LOGIN:
        draft.loading = true;
        break;
      case LOGIN_SUCCESS:
        draft.loading = false;
        draft.code = 0;
        draft.user = action.payload;
        break;
      case LOGIN_FAIL:
        draft.loading = false;
        draft.error = action.error;
        draft.code = 401;
        break;
    }
  });

export default authReducer;
