//action types
import { DISPLAY_ERROR_MESSAGES, REMOVE_MESSAGES } from "../actions/messages.js";

function messages(state = [], action){
    switch (action.type){
        case DISPLAY_ERROR_MESSAGES:
            return action.messages;
        case REMOVE_MESSAGES:
            return [];
        default:
            return state
    }
}

export default messages;
