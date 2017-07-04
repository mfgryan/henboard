import * as actions from './info.js';

test('should create an action to init info', () => {
    const info = []; 
    const expectedAction = {
        type: actions.INIT_INFO,
        info: []
    }
    expect(actions.initInfo(info)).toEqual(expectedAction)
});

test('should create an action to add info', () => {
    const info = {
        project: "henboard", 
        name: "item1", 
        value: "hello"
    }
    const expectedAction = {
        type: actions.ADD_INFO,
        project: info.project,    
        name: info.name,    
        value: info.value    
    }
    expect(actions.addInfo(info)).toEqual(expectedAction)
});

test('should create an action to remove info', () => {
    const info = {
        project: "henboard",
        name: "item1",
        value: "hello"
    }
    const expectedAction = {
        type: actions.REMOVE_INFO,
        project: info.project,
        name: info.name,
        value: info.value
    }
    expect(actions.removeInfo(info)).toEqual(expectedAction)
});
