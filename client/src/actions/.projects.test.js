import * as actions from "./projects.js";

const fieldTest = function(action, expectedFields) {
    for (let field in expectedFields) {
        if (expectedFields.hasOwnProperty(field)) {
            test("should contain correct " + field, () => {
                expect(action[field]).toEqual(expectedFields[field]);
            });
        }
    }
};

describe("init projects", () => {
    let input = [];
    let expectedFields = {
        type: actions.INIT_PROJECTS,
        projects: input
    };
    let action = actions.initProjects(input);
    fieldTest(action, expectedFields);
});

describe("set current project", () => {
    let input = "henboard";
    let expectedFields = {
        type: actions.SET_CURRENT_PROJECT,
        project: input
    };
    let action = actions.setCurrentProject(input);
    fieldTest(action, expectedFields);
});
