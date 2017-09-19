// redux dep
import { createStore, applyMiddleware } from "redux";
import { logger, validate, fn } from "../util/middleware.js"; // eslint-disable-line no-unused-vars
import rootReducer from "../reducers/reducers.js";

export default createStore(rootReducer, applyMiddleware(validate, logger, fn));
