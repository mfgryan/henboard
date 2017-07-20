const model = "planning";
const INIT_PLANNING = "INIT_PLANNING";
function initPlanning(plan){
    return {
        type: INIT_PLANNING, 
        model: model,
        skipValidation: true,
        planning: plan  
    }
}
const SET_PLANNING = "SET_PLANNING";
function setPlanning(plan){
    return {
        type: SET_PLANNING,
        model: model,
        project: plan.project,
        missionStatement: plan.missionStatement
    }
}

export { INIT_PLANNING, SET_PLANNING, initPlanning, setPlanning }
