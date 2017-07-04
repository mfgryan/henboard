import * as actions from './lanes.js';

test('should create an action to init lanes', () => {
    const input = []; 
    const expectedAction = {
        type: actions.INIT_LANES,
        lanes: input
    }
    expect(actions.initLanes(input)).toEqual(expectedAction)
});

test('should create an action to toggle add item', () => {
    const input = {
        project: "henboard", 
        column: "todo"
    }
    const expectedAction = {
        type: actions.TOGGLE_ADD_ITEM,
        project: input.project,    
        column: input.column
    }
    expect(actions.toggleAddItem(input)).toEqual(expectedAction)
});

test('should create an action to add lane', () => {
    const input = {
        project: "henboard",
        column: "columnx"
    }
    const expectedAction = {
        type: actions.ADD_LANE,
        project: input.project,
        column: input.column
    }
    expect(actions.addLane(input)).toEqual(expectedAction)
});

test('should create an action to change value', () => {
    const input = {
        project: "henboard",
        column: "todo",
        addItem: false,
        value: "blah"
    }
    const expectedAction = {
        type: actions.CHANGE_VALUE,
        project: input.project,
        column: input.column,
        addItem: input.addItem,
        value: input.value
    }
    expect(actions.changeValue(input)).toEqual(expectedAction)
});
