const lanes = {};

lanes.fields = ["project", "column", "value", "addItem"];

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

lanes.getLane = function(state, project, column){
    return state.lanes.find((lane) =>
            lane.project === project && 
            lane.column === column
    );
};

lanes.getLanes = function(state, project){
    return state.lanes.filter((lane) =>
        lane.project === project
    );
};

export default lanes;
