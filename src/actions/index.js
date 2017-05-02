const ADD_ITEM = "ADD_ITEM";
function addItem(value, info){
    return {
        type: ADD_ITEM,
        value,
        info 
    }
}

const REMOVE_ITEM = "REMOVE_ITEM";
function removeItem(value){
    return {
        type: REMOVE_ITEM,
        value
    }
}
