import * as actions from './projects.js';

test('should create an action to init projects', () => {
    const input = []; 
    const expectedAction = {
        type: actions.INIT_PROJECTS,
        projects: input
    }
    expect(actions.initProjects(input)).toEqual(expectedAction)
});

test('should create an action to set current project', () => {
    const input = "henboard";
    const expectedAction = {
        type: actions.SET_CURRENT_PROJECT,
        project: input
    }
    expect(actions.setCurrentProject(input)).toEqual(expectedAction)
});
