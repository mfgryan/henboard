import axios from "axios";

const sprints = {};

sprints.initialState = [
    { project: "henboard", week: "05/15/17", current: true }
];

//PK [fk projects.project, week]
sprints.get = function(){
    return axios.get("/api/sprints"); 
};

sprints.post = function(){
    return axios.post("/api/sprints"); 
};

export default sprints;
