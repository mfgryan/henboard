const sprints = {};

sprints.fields = ["project", "week", "current"];

sprints.primaryKeys = ["project", "week"];

sprints.validation = {
    week: {
        empty: false
    }
};

sprints.getCurrentSprint = function(state) {
    return state.sprints.find(sprint => sprint.current === true) || {};
};

sprints.getSprintArray = function(state, project) {
    return state.sprints.filter(sprint => sprint.project === project);
};

export default sprints;
