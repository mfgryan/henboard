// redux dep
import { createStore, applyMiddleware } from "redux";
import { logger, validate } from "../util/middleware.js";
import data from "../util/data.js";
import rootReducer from "../reducers/index.js";

const store = createStore(rootReducer,applyMiddleware(logger,validate));

export { store }
