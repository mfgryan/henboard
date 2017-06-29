const INIT_INFO = "INIT_INFO";
function initInfo(info){
    return {
        type: INIT_INFO, 
        info: info  
    }
}
const ADD_INFO = "ADD_INFO";
function addInfo(info){
    return {
        type: ADD_INFO, 
        project: info.project,
        name: info.name,
        value: info.value    
    }
}
const REMOVE_INFO = "REMOVE_INFO";
function removeInfo(info){
    return {
        type: REMOVE_INFO,
        project: info.project,
        name: info.name,
        value: info.value          
    }    
}

export { ADD_INFO, REMOVE_INFO, INIT_INFO, initInfo, addInfo, removeInfo }
