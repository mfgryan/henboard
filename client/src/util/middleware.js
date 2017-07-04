import { displayErrorMessages } from "../actions/messages.js"
import { validations } from "./validations.js"

const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result   
};

const validate = store => next => action => {
    let errors = [];
    if(action.validation){
        for(let i =0; i < action.validation.length; i++){
            let field = action.validation[i].field;
            let rules = action.validation[i].rules;
            for(let j = 0; j < rules.length; j++){
                errors = validations[rules[j].key](action[field], rules[j].value, errors) 
            }
        }
    }
    return errors.length !== 0  ? store.dispatch(displayErrorMessages(errors)) : next(action); 
};

export { logger, validate }
