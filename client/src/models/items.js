import axios from "axios";

const items = {};

items.fields = ["project", "name", "column", "value", "week", "openInfo"];

items.primaryKeys = ["project", "name"];

items.validation = {
    name: {
        empty: false,
        maxLength: 40
    }
};

items.initialState = [];

items.getItem = function(state, project, name){
    return state.items.find((item) =>
            item.project === project && 
            item.name === name
    );
};

//PK [items]
items.get = function(){
    return axios.get("/api/items"); 
};

items.post = function(data){
    return axios.post("/api/items",data); 
};

items.remove = function(data){
    return axios.post("/api/items/delete",data); 
};

export default items;

