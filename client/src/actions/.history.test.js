import * as actions from "./history.js";

const fieldTest = function(action, expectedFields) {
    for (let field in expectedFields) {
        if (expectedFields.hasOwnProperty(field)) {
            test("should contain correct " + field, () => {
                expect(action[field]).toEqual(expectedFields[field]);
            });
        }
    }
};

describe("init history", () => {
    let input = [];
    let expectedFields = {
        type: actions.INIT_HISTORY,
        history: input
    };
    let action = actions.initHistory(input);
    fieldTest(action, expectedFields);
});

describe("push change", () => {
    let input = {
        project: "henboard",
        keys: ["foo"],
        undo: "foo",
        redo: "bar"
    };
    let expectedFields = {
        type: actions.PUSH_CHANGE,
        project: input.project,
        keys: input.keys,
        undo: input.undo,
        redo: input.redo
    };
    let action = actions.pushChange(input);
    fieldTest(action, expectedFields);
});

describe("undo", () => {
    let input = { project: "henboard" };
    let expectedFields = {
        type: actions.UNDO,
        project: input.project
    };
    let action = actions.undo(input);
    fieldTest(action, expectedFields);
});

describe("redo", () => {
    let input = { project: "henboard" };
    let expectedFields = {
        type: actions.REDO,
        project: input.project
    };
    let action = actions.redo(input);
    fieldTest(action, expectedFields);
});

describe("UPDATES", () => {
    let input = { key: "foo", data: "bar" };
    let expectedFields = {
        type: actions.UPDATES,
        key: input.key,
        data: input.data
    };
    let action = actions.updates(input.key, input.data);
    fieldTest(action, expectedFields);
});

describe("REMOVALS", () => {
    let input = { key: "foo", data: "bar" };
    let expectedFields = {
        type: actions.REMOVALS,
        key: input.key,
        data: input.data
    };
    let action = actions.removals(input.key, input.data);
    fieldTest(action, expectedFields);
});

describe("INSERTS", () => {
    let input = { key: "foo", data: "bar" };
    let expectedFields = {
        type: actions.INSERTS,
        key: input.key,
        data: input.data
    };
    let action = actions.inserts(input.key, input.data);
    fieldTest(action, expectedFields);
});
