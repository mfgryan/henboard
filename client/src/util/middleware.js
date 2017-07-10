import { displayErrorMessages } from "../actions/messages.js"
import { validations } from "./validations.js"

import projects from "../api/projects.js";
import sprints from "../api/sprints.js";
import lanes from "../api/lanes.js";
import items from "../api/items.js";
import info  from "../api/info.js";

const models = {};
models.projects = projects;
models.sprints = sprints;
models.lanes = lanes;
models.items = items;
models.info = info;

const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result   
};

const checkErrors = function(state, action, validation){
    let errors = [];
    if(action.skip){
        return errors; 
    }
    for(let field in validation){
        if(validation.hasOwnProperty(field)){
            let ruleSet = validation[field];
            for(let rule in ruleSet){
                if(ruleSet.hasOwnProperty(rule)){
                    let input = action[field];
                    errors = validations[rule](input, ruleSet[rule], errors);  
                }
            }             
        }
    }
    if(action.insert){
        errors = validations.primaryKey([action, state], models[action.model].primaryKeys, errors);
    }
    return errors;
};

const validate = store => next => action => {
    let validation = action.model && models[action.model].validation;
    let errors = validation ? checkErrors(store.getState()[action.model], action, validation) : [];
    return errors.length !== 0  ? store.dispatch(displayErrorMessages(errors)) : next(action); 
};

export { logger, validate }
