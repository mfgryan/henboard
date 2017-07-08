import axios from "axios";

const sprints = {};

sprints.primaryKeys = ["project", "week"];

sprints.initialState = [
    { project: "henboard", week: "05/15/17", current: true }
];

//PK [fk projects.project, week]
sprints.get = function(){
    return axios.get("/api/sprints"); 
};

sprints.post = function(data){
    return axios.post("/api/sprints",data); 
};

sprints.remove = function(data){
    return axios.post("/api/sprints/delete",data); 
};

export default sprints;
