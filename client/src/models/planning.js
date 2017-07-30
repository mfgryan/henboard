const planning = {};

planning.fields = ["project", "missionStatement", "value", "editing"];

planning.primaryKeys = ["project", "missionStatement"];

planning.validation = {};

planning.getPlan = function(state, project) {
    return state.planning.find(plan => plan.project === project) || {};
};

export default planning;
