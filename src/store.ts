import { applyMiddleware, createStore, Middleware, compose } from "redux";
import rootReducer from "./reducer";
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import history from "./history";
import rootSaga from "./saga";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const sagaMiddleware = createSagaMiddleware()
  const middlewares : Array<Middleware> = [sagaMiddleware, routerMiddleware(history)];
  const middlewareEnhancer = [applyMiddleware(...middlewares)];

  const store = createStore(rootReducer, composeEnhancers(...middlewareEnhancer));
  sagaMiddleware.run(rootSaga)
  return store;
}

export default configureStore;