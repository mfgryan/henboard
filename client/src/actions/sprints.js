const model = "sprints";
const INIT_SPRINTS = "INIT_SPRINTS";
function initSprints(sprints){
    return {
        type: INIT_SPRINTS, 
        model: model,
        skipValidation: true,
        sprints: sprints  
    }
}
const ADD_SPRINT = "ADD_SPRINT";
function addSprint(sprint){
    return {   
        type: ADD_SPRINT,
        insert: true,
        model: model,
        project: sprint.project,
        week: sprint.week
    }
}
const SET_CURRENT_SPRINT = "SET_CURRENT_SPRINT";
function setCurrentSprint(sprint){
    return{
        type: SET_CURRENT_SPRINT,
        model: model,
        project: sprint.project,        
        week: sprint.week
    }
}

export { ADD_SPRINT, SET_CURRENT_SPRINT, INIT_SPRINTS, initSprints, addSprint, setCurrentSprint }
