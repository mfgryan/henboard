//action types
import { OPEN_INFO, CLOSE_INFO, ADD_ITEM, REMOVE_ITEM, MOVE_ITEM, CHANGE_ITEM_VALUE, INIT_ITEMS } from "../actions/items";

function items(state = [], action){
    switch (action.type){
        case INIT_ITEMS:
            return action.items
        case OPEN_INFO:
            return state.map((item) => {
                return (item.project === action.project && item.name === action.name) ? Object.assign({},item,{openInfo:true}) : item;
            })
        case CLOSE_INFO:
            return state.map((item) => {
                return (item.project === action.project && item.name === action.name) ? Object.assign({},item,{openInfo:false}) : item;
            })
        case ADD_ITEM: 
            return [...state,
                { 
                    project: action.project, 
                    week: action.week, 
                    column: action.column, 
                    name: action.name,
                    openInfo: false,
                    value: ""
                }
            ]
        case REMOVE_ITEM:
            return state.filter((item) =>
                    !(item.project === action.project && item.name === action.name) 
                )
        case MOVE_ITEM:
            return state.map((item) =>{
                return !(item.project === action.project && item.name === action.name) ? item : Object.assign({},item,{week: action.week, column: action.column})  
            })
        case CHANGE_ITEM_VALUE:
            return state.map((item) =>{
                return !(item.project === action.project && item.name === action.name) ? item : Object.assign({},item,{value: action.value})
            })
        default:
            return state
    }
}

export default items;
