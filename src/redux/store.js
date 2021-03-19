import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import promise from "redux-promise";

import rootReducer from "./root-reducer";

const middlewares = [logger, promise];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
