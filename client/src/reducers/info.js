//action types
import { ADD_INFO, REMOVE_INFO, INIT_INFO } from "../actions/info";

function info(state = [], action) {
    switch (action.type) {
        case INIT_INFO:
            return action.info;
        case ADD_INFO:
            return [
                ...state,
                {
                    project: action.project,
                    name: action.name,
                    value: action.value
                }
            ];
        case REMOVE_INFO:
            return state.filter(
                info =>
                    !(
                        info.project === action.project &&
                        info.name === action.name &&
                        info.value === action.value
                    )
            );
        default:
            return state;
    }
}

export default info;
