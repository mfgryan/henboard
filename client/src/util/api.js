import axios from "axios";

const api = {};

//PK [projects]
api.get = function(key){
    return axios.get("/api/"+key); 
};

api.post = function(key, data){
    return axios.post("/api/"+key,data); 
};

api.remove = function(key, data){
    return axios.post("/api/"+key+"/delete",data);
};

export default api
