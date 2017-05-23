//redux schema:

//PK [project]
const projects = [
    { project: "henboard", current: true }
];

//PK [fk projects.project,week]
const sprints = [
    { project: "henboard", week: "05/15/17", current: true }
];

//PK [fk projects.project,column]
const lanes = [
    { project: "henboard", column: "Todo", addItem: false, value: "" },
    { project: "henboard", column: "Dev", addItem: false, value: "" }, 
    { project: "henboard", column: "Done", addItem: false, value: "" } 
];

//PK [fk projects.project,name]
const items = [
    //{ project: "henboard", week: "5/8/17", column: "Dev", name: "save state" }
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
    sprints: sprints,
    projects: projects
}

export default initialState;
