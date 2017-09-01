// redux dep
import { createStore, applyMiddleware } from "redux";
import { logger, validate } from "../util/middleware.js"; // eslint-disable-line no-unused-vars
import rootReducer from "../reducers/reducers.js";

const store = createStore(rootReducer, applyMiddleware(validate, logger));

export { store };
