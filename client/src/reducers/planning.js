//action types
import { INIT_PLANNING, SET_PLANNING, initPlanning, setPlanning } from "../actions/planning.js";

export const initialState = [{
    project: "henboard", missionStatement: ""
}];

function planning(state = initialState, action){
    switch (action.type){
        case INIT_PLANNING:
            return action.planning
        case SET_PLANNING: 
            return state.map((plan) =>{
                return (plan.project === action.project) ? Object.assign({},{project: action.project, missionStatement: action.missionStatement}) : plan
            })
        default:
            return state
    }
}

export default planning;
