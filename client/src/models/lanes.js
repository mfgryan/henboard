import axios from "axios";

const lanes = {};

lanes.primaryKeys = ["project", "column"];

lanes.validation = {   
    column: {
        empty: false, 
        maxLength: 15
    } 
};

lanes.initialState = [
    { project: "henboard", column: "Todo", addItem: false, value: "" },
    { project: "henboard", column: "Dev", addItem: false, value: "" }, 
    { project: "henboard", column: "Done", addItem: false, value: "" }
];

//PK [lanes]
lanes.get = function(){
    return axios.get("/api/lanes"); 
};

lanes.post = function(data){
    return axios.post("/api/lanes",data); 
};

lanes.remove = function(data){
    return axios.post("/api/lanes/delete",data); 
};

export default lanes;
