//action types
import { CREATE_USER, LOGIN, LOGOUT } from "../actions/user";

export const initialState = [{ email: "", name: ""}];

function user(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case CREATE_USER: 
            return [{ email: action.email, name: action.name }];
        case LOGIN:
            return [{ email: action.email, name: action.name }];
        case LOGOUT: 
            return [{ email: "", name: "" }];
        default:
            return state;
    }
}

export default user;
