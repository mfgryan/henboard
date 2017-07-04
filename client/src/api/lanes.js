import axios from "axios";

const lanes = {};

lanes.initialState = [
    { project: "henboard", column: "Todo", addItem: false, value: "" },
    { project: "henboard", column: "Dev", addItem: false, value: "" }, 
    { project: "henboard", column: "Done", addItem: false, value: "" }
];

//PK [lanes]
lanes.get = function(){
    return axios.get("/api/lanes"); 
};

lanes.post = function(){
    return axios.post("/api/lanes"); 
};

export default lanes;
