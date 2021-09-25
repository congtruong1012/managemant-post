import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import postReducer from "./postReducer";
import history from "../history";

const rootReducer = combineReducers({
  router: connectRouter(history),
  post: postReducer
})
export default rootReducer;