//redux schema
//PK [project]
const projects = [
    { project: "henboard" },
    { project: "x" }
];

//PK [fk projects.project,week]
const sprints = [
    { project: "henboard", week: "4/22/17" },
    { project: "henboard", week: "4/29/17" }
];

//PK [fk projects.project,column]
const lanes = [
    { project: "henboard", column: "Todo" },
    { project: "henboard", column: "Dev" }, 
    { project: "henboard", column: "Done" } 
];
//PK [fk projects.project,name]
const items = [
    { project: "henboard", week: "4/22/17", column: "Dev", name: "save state" },
    { project: "henboard", week: "4/22/17", column: "Done", name: "Drag and Drop" }
];
//PK [fk projects.project,items.name,val]
const info = [
    { project: "henboard", name: "save state", val: "will save to local storage for now" },
    { project: "henboard", name: "save state", val: "working to normalize data and push into redux" },
    { project: "henboard", name: "Drag and Drop", val: "will save to local storage for now" }
];
