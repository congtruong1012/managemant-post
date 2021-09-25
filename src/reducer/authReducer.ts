import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from './../constant/auth';
import produce from "immer"
import { AnyAction } from "redux"

const initialState = {
  loading: false,
  error: ''
}

const authReducer = (state = initialState, action: AnyAction) => produce(state, draft => {
  const { type } = action;
  switch (type) {
    case LOGIN:
      draft.loading = true;
      break;
    case LOGIN_SUCCESS:
      draft.loading = false;
      break;
    case LOGIN_FAIL:
      draft.loading = false
      draft.error = action.error
      break;
  }
})

export default authReducer