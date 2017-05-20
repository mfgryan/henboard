const ADD_SPRINT = "ADD_SPRINT";
function addSprint(sprint){
    return {   
        type: ADD_SPRINT,
        project: sprint.project,
        week: sprint.week
    }
}
const SET_CURRENT_SPRINT = "SET_CURRENT_SPRINT";
function setCurrentSprint(sprint){
    return{
        type: SET_CURRENT_SPRINT,
        project: sprint.project,        
        week: sprint.week
    }
}

export { ADD_SPRINT, SET_CURRENT_SPRINT, addSprint, setCurrentSprint }
