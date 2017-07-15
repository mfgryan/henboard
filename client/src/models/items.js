const items = {};

items.fields = ["project", "name", "column", "value", "week", "openInfo"];

items.primaryKeys = ["project", "name"];

items.validation = {
    name: {
        empty: false,
        maxLength: 40
    }
};

items.initialState = [];

items.getItem = function(state, project, name){
    return state.items.find((item) =>
            item.project === project && 
            item.name === name
    );
};

export default items;

