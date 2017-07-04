import axios from "axios";

const items = {};

items.initialState = [];

//PK [items]
items.get = function(){
    return axios.get("/api/items"); 
};

items.post = function(){
    return axios.post("/api/items"); 
};

export default items;

