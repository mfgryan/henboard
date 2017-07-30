const model = "planning";
const INIT_PLANNING = "INIT_PLANNING";
function initPlanning(plan) {
    return {
        type: INIT_PLANNING,
        model: model,
        skipValidation: true,
        planning: plan
    };
}
const SET_PLANNING = "SET_PLANNING";
function setPlanning(plan) {
    return {
        type: SET_PLANNING,
        model: model,
        project: plan.project,
        missionStatement: plan.missionStatement
    };
}
const TOGGLE_PLANNING = "TOGGLE_PLANNING";
function togglePlanning(plan) {
    return {
        type: TOGGLE_PLANNING,
        model: model,
        project: plan.project
    };
}
const CHANGE_PLANNING_VALUE = "CHANGE_PLANNING_VALUE";
function changePlanningValue(plan) {
    return {
        type: CHANGE_PLANNING_VALUE,
        model: model,
        project: plan.project,
        value: plan.value
    };
}

export {
    INIT_PLANNING,
    SET_PLANNING,
    TOGGLE_PLANNING,
    CHANGE_PLANNING_VALUE,
    initPlanning,
    setPlanning,
    togglePlanning,
    changePlanningValue
};
