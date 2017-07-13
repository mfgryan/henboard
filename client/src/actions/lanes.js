const model = "lanes";
const INIT_LANES = "INIT_LANES";
function initLanes(lanes){
    return {
        type: INIT_LANES, 
        model: model,
        skipValidation: true,
        lanes: lanes  
    }
}
const TOGGLE_ADD_ITEM = "TOGGLE_ADD_ITEM";
function toggleAddItem(col){
    return {
        type: TOGGLE_ADD_ITEM,
        model: model,
        project: col.project,
        column: col.column
    }
}
const ADD_LANE = "ADD_LANE";
function addLane(lane){
    return {
        type: ADD_LANE,
        model: model,
        project: lane.project,
        column: lane.column,
        addItem: lane.addItem,
        value: lane.value,
    }
}
const CHANGE_VALUE = "CHANGE_VALUE";
function changeValue(lane){
    return {
        type: CHANGE_VALUE, 
        model: model,
        project: lane.project,
        column: lane.column,
        addItem: lane.addItem,
        value: lane.value
    }
}

export { TOGGLE_ADD_ITEM, ADD_LANE, CHANGE_VALUE, INIT_LANES, initLanes, toggleAddItem, addLane, changeValue }

