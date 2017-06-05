const TOGGLE_ADD_ITEM = "TOGGLE_ADD_ITEM";
function toggleAddItem(col){
    return {
        type: TOGGLE_ADD_ITEM,
        project: col.project,
        column: col.column
    }
}
const ADD_LANE = "ADD_LANE";
function addLane(lane){
    return {
        type: ADD_LANE,
        project: lane.project,
        column: lane.column
    }
}
const CHANGE_VALUE = "CHANGE_VALUE";
function changeValue(lane){
    return {
        type: CHANGE_VALUE, 
        project: lane.project,
        column: lane.column,
        addItem: lane.addItem,
        value: lane.value
    }
}

export { TOGGLE_ADD_ITEM, ADD_LANE, CHANGE_VALUE, toggleAddItem, addLane, changeValue }

