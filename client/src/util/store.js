// redux dep
import { createStore, applyMiddleware } from "redux";
import { logger, validate } from "../util/middleware.js";
import data from "../util/data.js";
import henboardApp from "../reducers/index.js";

const store = createStore(henboardApp, data.getLocalState(), applyMiddleware(logger,validate));

export { store }
