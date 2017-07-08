import axios from "axios";

const projects = {};

projects.primaryKeys = ["project"];

projects.initialState = [
    { project: "henboard", current: true }
];

//PK [projects]
projects.get = function(){
    return axios.get("/api/projects"); 
};

projects.post = function(data){
    return axios.post("/api/projects",data); 
};

projects.remove = function(data){
    return axios.post("/api/projects/delete",data);
};

export default projects;
