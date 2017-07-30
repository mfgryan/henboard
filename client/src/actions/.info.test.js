import * as actions from "./info.js";

const fieldTest = function(action, expectedFields) {
    for (let field in expectedFields) {
        if (expectedFields.hasOwnProperty(field)) {
            test("should contain correct " + field, () => {
                expect(action[field]).toEqual(expectedFields[field]);
            });
        }
    }
};

describe("init info", () => {
    let input = [];
    let expectedFields = {
        type: actions.INIT_INFO,
        info: []
    };
    let action = actions.initInfo(input);
    fieldTest(action, expectedFields);
});

describe("add info", () => {
    let input = {
        project: "henboard",
        name: "item1",
        value: "hello"
    };
    let expectedFields = {
        type: actions.ADD_INFO,
        project: input.project,
        name: input.name,
        value: input.value
    };
    let action = actions.addInfo(input);
    fieldTest(action, expectedFields);
});

describe("remove info", () => {
    let input = {
        project: "henboard",
        name: "item1",
        value: "hello"
    };
    let expectedFields = {
        type: actions.REMOVE_INFO,
        project: input.project,
        name: input.name,
        value: input.value
    };
    let action = actions.removeInfo(input);
    fieldTest(action, expectedFields);
});
