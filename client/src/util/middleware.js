import { displayErrorMessages } from "../actions/messages.js"
import validations from "./validations.js"

import models from "../models/models.js";

const logger = store => next => action => {
    // before
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    // after
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result;
};


const validate = store => next => action => {
    let model = action.model;
    let state = store.getState()[model];
    let validation = model && !action.skipValidation && models[model].validation;

    let errors = validation ? validations.checkErrors(action, state, validation) : [];
    errors = action.insert ? validations.checkPrimaryKeys(action, state, models[model].primaryKeys, errors) : errors; 

    return errors.length !== 0  ? store.dispatch(displayErrorMessages(errors)) : next(action); 
};

export { logger, validate }
