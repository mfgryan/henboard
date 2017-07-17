const items = {};

items.fields = ["project", "name", "column", "value", "week", "openInfo", "addItem"];

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

items.getItemsBySprint = function(state, project, week){
    return state.items.filter((item) => 
        item.project === project &&  
        item.week === week
    );
};

export default items;

