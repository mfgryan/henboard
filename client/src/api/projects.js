import axios from "axios";

const projects = {};

projects.initialState = [
    { project: "henboard", current: true }
];

//PK [projects]
projects.get = function(){
    return axios.get("/api/projects"); 
};

projects.post = function(){
    return axios.post("/api/projects"); 
};

export default projects;
