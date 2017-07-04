import axios from "axios";

const info = {};

info.initialState = [];

//PK [info]
info.get = function(){
    return axios.get("/api/info"); 
};

info.post = function(){
    return axios.post("/api/info"); 
};

export default info;

