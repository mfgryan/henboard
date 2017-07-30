const lanes = {};

lanes.fields = ["project", "column", "value", "addItem"];

lanes.primaryKeys = ["project", "column"];

lanes.validation = {
    column: {
        empty: false,
        maxLength: 15
    }
};

lanes.getLane = function(state, project, column) {
    return state.lanes.find(
        lane => lane.project === project && lane.column === column
    );
};

lanes.getLanes = function(state, project) {
    return state.lanes.filter(
        lane => lane.project === project && lane.column !== "Backlog"
    );
};
lanes.getBacklog = function(state, project) {
    return state.lanes.filter(
        lane => lane.project === project && lane.column === "Backlog"
    );
};

export default lanes;
