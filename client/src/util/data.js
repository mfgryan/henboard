import axios from "axios";
// mongo schema examples included in each get method

var data = {};

//PK [projects]
data.getProjects = function(local){
    var localData = [
        { project: "henboard", current: true }
    ];
    return local ? localData : axios.get("/api/projects"); 
};

//PK [fk projects.project, week]
data.getSprints = function(local){
    var localData = [
        { project: "henboard", week: "05/15/17", current: true }]
    return local ? localData : axios.get("/api/sprints"); 
};

//PK [fk projects.project,column]
data.getLanes = function(local){
    var localData = [
        { project: "henboard", column: "Todo", addItem: false, value: "" },
        { project: "henboard", column: "Dev", addItem: false, value: "" }, 
        { project: "henboard", column: "Done", addItem: false, value: "" }]
    return local ? localData : axios.get("/api/lanes"); 
};

//PK [fk projects.project,name]
data.getItems = function(local){
    // examples
    // { project: "henboard", week: "5/8/17", column: "Dev", name: "save state" }
    return local ? [] : axios.get("/api/items"); 
};

//PK [fk projects.project,items.name,val]
data.getInfo = function(local){
    // examples
    // { project: "henboard", name: "save state", val: "will save to local storage for now" },
    // { project: "henboard", name: "save state", val: "working to normalize data and push into redux" }
    return local ? [] : axios.get("/api/info"); 
};

data.getInitialState = function(callback){
    if(typeof callback !== "function"){
       return { 
            projects: data.projects(true), 
            sprints: data.sprints(true), 
            lanes: data.lanes(true), 
            items: data.items(true), 
            info: data.info(true)
        };
    }else{
        axios.all([data.getProjects(), data.getSprints(), data.getLanes(), data.getItems(), data.getInfo()])
            .then(axios.spread(function(projects, sprints, lanes, items, info){
                    callback({
                        projects: projects.data, 
                        sprints: sprints.data, 
                        lanes: lanes.data, 
                        items: items.data, 
                        info: info.data
                    })
                }
            ))
            .catch(function(err){
                console.log(err);
            });
    }
};

export default data;
