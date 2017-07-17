//action types
import { ADD_LANE, TOGGLE_ADD_ITEM, CHANGE_VALUE, INIT_LANES } from "../actions/lanes";

export const initialState = [
    { project: "henboard", column: "Todo", addItem: false, value: "" },
    { project: "henboard", column: "Dev", addItem: false, value: "" }, 
    { project: "henboard", column: "Done", addItem: false, value: "" },
    { project: "henboard", column: "Backlog", addItem: false, value: "" }
];

function lanes(state = initialState, action){
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
