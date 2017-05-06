const ADD_ITEM = "ADD_ITEM";
function addItem(item){
    return {
        type: ADD_ITEM,
        project: item.project,
        week: item.week, 
        column: item.column || "",
        name: item.name
    }
}
const REMOVE_ITEM = "REMOVE_ITEM";
function removeItem(item){
    return {
        type: REMOVE_ITEM,
        project: item.project,  
        name: item.name
    }
}

const MOVE_ITEM = "MOVE_ITEM";
function moveItem(item,itemTo){
    return {
        type: MOVE_ITEM, 
        project: item.project,
        name: item.name, 
        weekTo: itemTo.week || "",
        columnTo: itemTo.column || "",
        backlogTo: itemTo.backLog || ""
    }
}
const ADD_INFO = "ADD_INFO";
function addInfo(info){
    return {
        type: ADD_INFO, 
        project: info.project,
        name: info.name,
        val: info.val    
    }
}
const REMOVE_INFO = "REMOVE_INFO";
function removeInfo(info){
    return {
        type: REMOVE_INFO,
        project: info.project,
        name: info.name,
        val: info.val          
    }    
}
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

export {addItem, removeItem, moveItem, addInfo, removeInfo, addSprint, setCurrentSprint, ADD_ITEM, REMOVE_ITEM, MOVE_ITEM, ADD_INFO, REMOVE_INFO, ADD_SPRINT, SET_CURRENT_SPRINT}
