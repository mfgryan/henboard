// redux dep
import { createStore, applyMiddleware } from "redux";
import { logger, validate } from "../util/middleware.js"; // eslint-disable-line no-unused-vars
import rootReducer from "../reducers/index.js";

const store = createStore(rootReducer, applyMiddleware(validate));

export { store };
