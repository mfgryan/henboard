import * as actions from './items.js';

test('should create an action to init items', () => {
    const input = []; 
    const expectedAction = {
        type: actions.INIT_ITEMS,
        items: input
    }
    expect(actions.initItems(input)).toEqual(expectedAction)
});

test('should create an action to open info', () => {
    const input = {
        project: "henboard", 
        name: "item1"
    }
    const expectedAction = {
        type: actions.OPEN_INFO,
        project: input.project,    
        name: input.name
    }
    expect(actions.openInfo(input)).toEqual(expectedAction)
});

test('should create an action to close info', () => {
    const input = {
        project: "henboard",
        name: "item1"
    }
    const expectedAction = {
        type: actions.CLOSE_INFO,
        project: input.project,
        name: input.name
    }
    expect(actions.closeInfo(input)).toEqual(expectedAction)
});

test('should create an action to add item', () => {
    const input = {
        project: "henboard",
        week: "5/22/17",
        column: "todo",
        name: "blah"
    }
    const expectedAction = {
        type: actions.ADD_ITEM,
        project: input.project,
        week: input.week,
        column: input.column,
        name: input.name,
        validation: [
            {
                field: "name",
                rules: [
                    {key: "unique", value: true},
                    {key: "empty", value: false},
                    {key: "maxLength", value: 30}
                ]
            }
        ]
    }
    expect(actions.addItem(input)).toEqual(expectedAction)
});

test('should create an action to remove item', () => {
    const input = {
        project: "henboard",
        name: "item1"
    }
    const expectedAction = {
        type: actions.REMOVE_ITEM,
        project: input.project,
        name: input.name
    }
    expect(actions.removeItem(input)).toEqual(expectedAction)
});


test('should create an action to move item', () => {
    const input = {
        project: "henboard",
        name: "item1",
        week: "5/17/22",
        column: "todo"
    }
    const expectedAction = {
        type: actions.MOVE_ITEM,
        project: input.project,
        name: input.name,
        week: input.week,
        column: input.column
    }
    expect(actions.moveItem(input)).toEqual(expectedAction)
});

test('should create an action to change item value', () => {
    const input = {
        project: "henboard",
        name: "item1",
        value: "yo"
    }
    const expectedAction = {
        type: actions.CHANGE_ITEM_VALUE,
        project: input.project,
        name: input.name,
        value: input.value
    }
    expect(actions.changeItemValue(input)).toEqual(expectedAction)
});
