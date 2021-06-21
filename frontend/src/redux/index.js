import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { bugReducer } from "./reducers/Bug";
import { userReducer } from "./reducers/User";
import { CounterSlice } from "./reducers/CounterSlice";

const rootReducer = combineReducers({
  bugStore: bugReducer,
  userStore: userReducer,
  counterStore: CounterSlice.reducer,
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
