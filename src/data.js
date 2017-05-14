//redux schema

//PK [project]
const projects = [
    { project: "henboard" },
    { project: "x" }
];

//PK [fk projects.project,week]
const sprints = [
    { project: "henboard", week: "5/8/17" },
];

//PK [fk projects.project,column]
const lanes = [
    { project: "henboard", column: "Todo", addItem: false },
    { project: "henboard", column: "Dev", addItem: false }, 
    { project: "henboard", column: "Done", addItem: false } 
];

//PK [fk projects.project,name]
const items = [
    //{ project: "henboard", week: "5/8/17", column: "Dev", name: "save state" },
];

//PK [fk projects.project,items.name,val]
const info = [
    //{ project: "henboard", name: "save state", val: "will save to local storage for now" },
    //{ project: "henboard", name: "save state", val: "working to normalize data and push into redux" }
];

const initialState = {
   info: info, 
   items: items,
   lanes: lanes,
   sprints: sprints
}

export default initialState;
