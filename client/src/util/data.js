import axios from "axios";
// mongo schema examples included in each get method

//PK [projects]
const getProjects = function(){
    //{ project: "henboard", current: true }
    return axios.get("/api/projects"); 
};

//PK [fk projects.project, week]
const getSprints = function(){
    //{ project: "henboard", week: "05/15/17", current: true }
    return axios.get("/api/sprints"); 
};

//PK [fk projects.project,column]
const getLanes = function(){
    //{ project: "henboard", column: "Todo", addItem: false, value: "" },
    //{ project: "henboard", column: "Dev", addItem: false, value: "" }, 
    //{ project: "henboard", column: "Done", addItem: false, value: "" } 
    return axios.get("/api/lanes"); 
};

//PK [fk projects.project,name]
const getItems = function(){
    //{ project: "henboard", week: "5/8/17", column: "Dev", name: "save state" }
    return axios.get("/api/items"); 
};

//PK [fk projects.project,items.name,val]
const getInfo = function(){
    //{ project: "henboard", name: "save state", val: "will save to local storage for now" },
    //{ project: "henboard", name: "save state", val: "working to normalize data and push into redux" }
    return axios.get("/api/info"); 
};

const getInitialState = function(callback){
    axios.all([getProjects(), getSprints(), getLanes(), getItems(), getInfo()])
        .then(axios.spread(function(projects, sprints, lanes, items, info){
            callback({
                projects: projects.data, 
                sprints: sprints.data, 
                lanes: lanes.data, 
                items: items.data, 
                info: info.data
            });
        .catch(function(err){
            console.log(err);
        });
};

export default getInitialState;
