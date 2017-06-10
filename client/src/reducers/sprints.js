// action types
import { ADD_SPRINT, SET_CURRENT_SPRINT } from "../actions/sprints";

function sprints(state = [], action){
    switch (action.type){
        case ADD_SPRINT:  
            return [...state,
                {
                    project: action.project,
                    week: action.week,
                    current: false
                }
            ].map((sprint) =>
                !(sprint.project === action.project && sprint.week === action.week) ? Object.assign({},sprint,{current:false}) : Object.assign({},sprint,{current: true}) 
            );
        case SET_CURRENT_SPRINT:
            return state.map((sprint) =>
                !(sprint.project === action.project && sprint.week === action.week) ? Object.assign({},sprint,{current:false}) : Object.assign({},sprint,{current: true}) 
            )
        default:
            return state
    }
}

export default sprints;
