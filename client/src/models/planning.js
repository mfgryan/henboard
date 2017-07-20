const planning = {};

planning.fields = ["project", "missionStatement"];

planning.primaryKeys = ["project"];

planning.validation = {
    planning: {
        maxLength: 1000
    }
};

planning.getMissionStatement = function(state){
    return state.planning.find( project => project.current === true ) || {};
};

export default planning;
