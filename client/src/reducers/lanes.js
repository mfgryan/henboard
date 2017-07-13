//action types
import { ADD_LANE, TOGGLE_ADD_ITEM, CHANGE_VALUE, INIT_LANES } from "../actions/lanes";

function lanes(state = [], action){
    switch (action.type){
        case INIT_LANES:
            return action.lanes
        case ADD_LANE:
            return [...state,
                {
                    project: action.project,
                    column: action.column,
                    addItem: action.addItem,
                    value: action.value
                }
            ]
        case TOGGLE_ADD_ITEM:
            return state.map((lane) =>{
                return (lane.project === action.project && lane.column === action.column) ? Object.assign({},lane,{addItem: !lane.addItem}) : lane
            })
        case CHANGE_VALUE:
            return state.map((lane) =>{
                return (lane.project === action.project && lane.column === action.column) ? Object.assign({},lane,{value: action.value}) : lane 
            })
        default:
            return state
    }
}

export default lanes;
