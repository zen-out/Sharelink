import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider, connect } from "react-redux";
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { fikaReducer } from "../redux/actions/Fika";

const rootReducer = combineReducers({
  fikaStore: fikaReducer,
});
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk),
    applyMiddleware(logger)
  )
);
