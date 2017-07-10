import axios from "axios";

const info = {};

info.primaryKeys = ["project", "name", "value"];

info.validation = {
    value: {
        empty: false,
        maxLength: 30
    }
}

info.initialState = [];

// PK [info.project, info.name, info.value]
info.get = function(){
    return axios.get("/api/info"); 
};

info.post = function(data){
    return axios.post("/api/info",data); 
};

info.remove = function(data){
    return axios.post("/api/info/delete",data); 
};

export default info;

