//action types
import {
    INIT_PLANNING,
    SET_PLANNING,
    TOGGLE_PLANNING,
    CHANGE_PLANNING_VALUE
} from "../actions/planning.js";

export const initialState = [
    {
        project: "henboard",
        missionStatement: "Click \"Mission Statement\" to create a new plan",
        editing: false,
        value: ""
    }
];

function planning(state = initialState, action) {
    switch (action.type) {
        case INIT_PLANNING:
            return action.planning;
        case SET_PLANNING:
            return state.map(plan => {
                return plan.project === action.project
                    ? Object.assign({}, plan, {
                          missionStatement: action.missionStatement
                      })
                    : plan;
            });
        case TOGGLE_PLANNING:
            return state.map(plan => {
                return plan.project === action.project
                    ? Object.assign({}, plan, { editing: !plan.editing })
                    : plan;
            });
        case CHANGE_PLANNING_VALUE:
            return state.map(plan => {
                return plan.project === action.project
                    ? Object.assign({}, plan, { value: action.value })
                    : plan;
            });
        default:
            return state;
    }
}

export default planning;
