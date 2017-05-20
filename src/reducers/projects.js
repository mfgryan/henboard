//action types
import { SET_CURRENT_PROJECT, setCurrentProject } from "../actions/projects";

function projects(state = [], action){
    switch (action.type){
        case SET_CURRENT_PROJECT: 
            return state.map((project) =>{
                return (project.project === action.project) ? Object.assign({},project,{current: true}) : Object.assign({},project,{current: false})
            })
        default:
            return state
    }
}

export default projects;
