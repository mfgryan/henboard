import { combineReducers } from "redux"
import {TOGGLE_ADD_ITEM,ADD_LANE, ADD_ITEM, REMOVE_ITEM, MOVE_ITEM, ADD_INFO, REMOVE_INFO, ADD_SPRINT, SET_CURRENT_SPRINT} from "../actions/index";

function lanes(state = [], action){
    switch (action.type){
        case ADD_LANE:
            return [...state,
                {
                    project: action.project,
                    column: action.column 
                }
            ]
        case TOGGLE_ADD_ITEM:
            return state.map((lane) =>{
                return (lane.project === action.project && lane.column === action.column) ? Object.assign({},lane,{addItem: !lane.addItem}) : lane
            })
        default:
            return state
    }
}

function items(state = [], action){
    switch (action.type){
        case ADD_ITEM: 
            return [...state,
                { 
                    project: action.project, 
                    week: action.week, 
                    column: action.column, 
                    name: action.name
                }
            ]
        case REMOVE_ITEM:
            return state.filter((item) =>
                    !(item.project === action.project && item.name === action.name) 
                )
        case MOVE_ITEM:
            return state.map((item) =>{
                return !(item.project === action.project && item.name === action.name) ? item : Object.assign({},item,{week: action.weekTo, column: action.columTo})  
            })
        default:
            return state
    }
}

function info(state = [], action){
    switch (action.type){
        case ADD_INFO:
            return [...state,
                { 
                    project: action.project, 
                    name: action.name,
                    val: action.val
                }
            ]
        case REMOVE_INFO:
                return state.filter((info) =>
                    !(info.project === action.project && info.name === action.name && info.val === action.val)
                    )
        default:
            return state
    }
}

function sprints(state = [], action){
    switch (action.type){
        case ADD_SPRINT:  
            return [...state,
                {
                    project: action.project,
                    week: action.week,
                    current: false
                }
            ]
        case SET_CURRENT_SPRINT:
            return state.map((sprint) =>
                !(sprint.project === action.project && sprint.week === action.week) ? Object.assign({},sprint,{current:false}) : Object.assign({},sprint,{current: true}) 
            )
        default:
            return state
    }
}

const henboardApp = combineReducers({
    lanes,
    sprints,
    items,
    info
})

export default henboardApp
