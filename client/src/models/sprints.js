import axios from "axios";

const sprints = {};

sprints.fields = ["project", "week", "current"];

sprints.primaryKeys = ["project", "week"];

sprints.validation = {
    week: {
        empty: false
    }
};

sprints.initialState = [
    { project: "henboard", week: "05/15/17", current: true }
];

sprints.getCurrentSprint = function(state){
    return state.sprints.find( sprint => sprint.current === true ) || {};
};

sprints.getSprintArray = function(state, project){
    return state.sprints.filter((sprint) =>
        sprint.project === project
    );
};

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
