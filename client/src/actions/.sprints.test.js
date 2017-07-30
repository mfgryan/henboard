import * as actions from "./sprints.js";

const fieldTest = function(action, expectedFields) {
    for (let field in expectedFields) {
        if (expectedFields.hasOwnProperty(field)) {
            test("should contain correct " + field, () => {
                expect(action[field]).toEqual(expectedFields[field]);
            });
        }
    }
};

describe("init sprints", () => {
    let input = [];
    let expectedFields = {
        type: actions.INIT_SPRINTS,
        sprints: input
    };
    let action = actions.initSprints(input);
    fieldTest(action, expectedFields);
});

describe("add sprint", () => {
    let input = {
        project: "henboard",
        week: "5/17/22"
    };
    let expectedFields = {
        type: actions.ADD_SPRINT,
        project: input.project,
        week: input.week
    };
    let action = actions.addSprint(input);
    fieldTest(action, expectedFields);
});

describe("set current sprint", () => {
    let input = {
        project: "henboard",
        week: "5/17/22"
    };
    let expectedFields = {
        type: actions.SET_CURRENT_SPRINT,
        project: input.project,
        week: input.week
    };
    let action = actions.setCurrentSprint(input);
    fieldTest(action, expectedFields);
});
