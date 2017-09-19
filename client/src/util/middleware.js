/* eslint-disable no-console */
import { displayErrorMessages } from "../actions/messages.js";
import validations from "./validations.js";
import models from "../models/models.js";

const logger = store => next => action => {
    // before
    console.group && console.group(action.type);
    console.info && console.info("dispatching", action);
    let result = next(action);
    // after
    console.log("next state", store.getState());
    console.group && console.groupEnd(action.type);
    return result;
};

const fn = store => next => action => { 
    if(typeof action.fn === "function"){
        return action.fn(store, action, function(action){
            return next(action); 
        });
    }else{
        return next(action);
    }
};

const validate = store => next => action => {
    let model = action.model || null;
    let state = (model && store.getState()[model]) || null;
    let validation =
        (model && !action.skipValidation && models[model].validation) || null;
    
    // only validate keys present in the action 
    for(var key in validation){
        if(typeof action[key] === "undefined"){
            delete validation[key];
        } 
    }

    let errors = validation
        ? validations.checkErrors(action, state, validation)
        : [];
    errors = action.insert
        ? validations.checkPrimaryKeys(
              action,
              state,
              models[model].primaryKeys,
              errors
          )
        : errors;

    return errors.length !== 0
        ? store.dispatch(displayErrorMessages(errors))
        : next(action);
};

export { logger, validate, fn };
