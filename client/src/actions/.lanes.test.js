import * as actions from "./lanes.js";

const fieldTest = function(action, expectedFields) {
    for (let field in expectedFields) {
        if (expectedFields.hasOwnProperty(field)) {
            test("should contain correct " + field, () => {
                expect(action[field]).toEqual(expectedFields[field]);
            });
        }
    }
};

describe("init lanes", () => {
    let input = [];
    let expectedFields = {
        type: actions.INIT_LANES,
        lanes: input
    };
    let action = actions.init(input);
    fieldTest(action, expectedFields);
});

describe("toggle add item", () => {
    let input = {
        project: "henboard",
        column: "Todo"
    };
    let expectedFields = {
        type: actions.TOGGLE_ADD_ITEM,
        project: input.project,
        column: input.column
    };
    let action = actions.toggleAddItem(input);
    fieldTest(action, expectedFields);
});

describe("add lane", () => {
    let input = {
        project: "henboard",
        column: "Todo"
    };
    let expectedFields = {
        type: actions.ADD_LANE,
        project: input.project,
        column: input.column
    };
    let action = actions.addLane(input);
    fieldTest(action, expectedFields);
});

describe("change value", () => {
    let input = {
        project: "henboard",
        column: "Todo",
        addItem: false,
        value: "blah"
    };
    let expectedFields = {
        type: actions.CHANGE_VALUE,
        project: input.project,
        column: input.column,
        addItem: input.addItem,
        value: input.value
    };
    let action = actions.changeValue(input);
    fieldTest(action, expectedFields);
});
