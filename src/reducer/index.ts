import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import postReducer from './postReducer';
import history from '../history';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  router: connectRouter(history),
  post: postReducer,
  auth: authReducer,
});
export default rootReducer;
