import * as actions from './sprints.js';

test('should create an action to init sprints', () => {
    const input = []; 
    const expectedAction = {
        type: actions.INIT_SPRINTS,
        sprints: input
    }
    expect(actions.initSprints(input)).toEqual(expectedAction)
});

test('should create an action to add sprint', () => {
    const input = {
        project: "henboard", 
        weeek: "5/17/22"
    }
    const expectedAction = {
        type: actions.ADD_SPRINT,
        project: input.project,
        week: input.week
    }
    expect(actions.addSprint(input)).toEqual(expectedAction)
});

test('should create an action to set current sprint', () => {
    const input = {
        project: "henboard",
        week: "5/17/22"
    }
    const expectedAction = {
        type: actions.SET_CURRENT_SPRINT,
        project: input.project,
        week: input.week
    }
    expect(actions.setCurrentSprint(input)).toEqual(expectedAction)
});
