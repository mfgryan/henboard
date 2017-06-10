//action types
import { ADD_INFO, REMOVE_INFO, REMOVE_ITEM } from "../actions/info";

function info(state = [], action){
    switch (action.type){
        case ADD_INFO:
            return [...state,
                { 
                    project: action.project, 
                    name: action.name,
                    value: action.value
                }
            ]
        case REMOVE_INFO:
                return state.filter((info) =>
                    !(info.project === action.project && info.name === action.name && info.value === action.value)
                    )
        case REMOVE_ITEM:
            return state.filter((info) =>
                    !(info.project === action.project && info.name === action.name)
                )
        default:
            return state
    }
}

export default info
