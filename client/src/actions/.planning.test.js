import * as actions from "./planning.js";

const fieldTest = function(action, expectedFields) {
    for (let field in expectedFields) {
        if (expectedFields.hasOwnProperty(field)) {
            test("should contain correct " + field, () => {
                expect(action[field]).toEqual(expectedFields[field]);
            });
        }
    }
};

describe("init planning", () => {
    let input = [];
    let expectedFields = {
        type: actions.INIT_PLANNING,
        planning: input
    };
    let action = actions.init(input);
    fieldTest(action, expectedFields);
});

describe("set planning", () => {
    let input = {
        project: "henboard",
        missionStatement: "foo bar mission statement"
    };
    let expectedFields = {
        type: actions.SET_PLANNING,
        project: input.project,
        missionStatement: input.missionStatement
    };
    let action = actions.setPlanning(input);
    fieldTest(action, expectedFields);
});

describe("toggle planning", () => {
    let input = { project: "henboard" };
    let expectedFields = {
        type: actions.TOGGLE_PLANNING,
        project: input.project
    };
    let action = actions.togglePlanning(input);
    fieldTest(action, expectedFields);
});

describe("change planning value", () => {
    let input = { project: "henboard", value: "foo bar mission statement" };
    let expectedFields = {
        type: actions.CHANGE_PLANNING_VALUE,
        project: input.project,
        value: input.value
    };
    let action = actions.changePlanningValue(input);
    fieldTest(action, expectedFields);
});
