const info = {};

info.fields = ["project", "name", "value"];

info.primaryKeys = ["project", "name", "value"];

info.validation = {
    value: {
        empty: false,
        maxLength: 50
    }
}

info.initialState = [];

info.getInfoArray = function(state, project, name){
    return state.info.filter((info) =>
        info.project === project && info.name === name 
    );
};

export default info;

