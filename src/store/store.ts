import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {logger} from "redux-logger";
import {createMainReduce} from "./reducers";
import {IAppState} from "./IAppState";

const Middleware =
  process.env.NODE_ENV === "development"
    ? applyMiddleware(thunkMiddleware, logger)
    : applyMiddleware(thunkMiddleware);
declare global {
  // tslint:disable-next-line
  interface Window {
    __PRELOADED_STATE__: IAppState;
  }
}
// tslint:disable-next-line
const preloadedState = window.__PRELOADED_STATE__;
const reducers = createMainReduce();
export const store = createStore(
  reducers,
  preloadedState,
  Middleware,
);
