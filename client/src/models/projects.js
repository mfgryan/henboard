import axios from "axios";

const projects = {};

projects.fields = ["project", "current"];

projects.primaryKeys = ["project"];

projects.validation = {
    project: {
        empty: false,
        maxLength: 30
    }
};

projects.initialState = [
    { project: "henboard", current: true }
];

projects.getCurrentProject = function(state){
    return state.projects.find( project => project.current === true ) || {};
};

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
