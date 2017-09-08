import * as actions from "./items.js";

const fieldTest = function(action, expectedFields) {
    for (let field in expectedFields) {
        if (expectedFields.hasOwnProperty(field)) {
            test("should contain correct " + field, () => {
                expect(action[field]).toEqual(expectedFields[field]);
            });
        }
    }
};

describe("init items", () => {
    let input = [];
    let expectedFields = {
        type: actions.INIT_ITEMS,
        items: input
    };
    let action = actions.init(input);
    fieldTest(action, expectedFields);
});

describe("open info", () => {
    let input = {
        project: "henboard",
        name: "item1"
    };
    let expectedFields = {
        type: actions.OPEN_INFO,
        project: input.project,
        name: input.name
    };
    let action = actions.openInfo(input);
    fieldTest(action, expectedFields);
});

describe("close info", () => {
    let input = {
        project: "henboard",
        name: "item1"
    };
    let expectedFields = {
        type: actions.CLOSE_INFO,
        project: input.project,
        name: input.name
    };
    let action = actions.closeInfo(input);
    fieldTest(action, expectedFields);
});

describe("add item", () => {
    let input = {
        project: "henboard",
        week: "5/22/17",
        column: "todo",
        name: "item1"
    };
    let expectedFields = {
        type: actions.ADD_ITEM,
        week: input.week,
        column: input.column,
        name: input.name
    };
    let action = actions.addItem(input);
    fieldTest(action, expectedFields);
    
    describe("empty values", () => {
        let input = {
            project: "henboard",
            week: null,
            column: null,
            name: "item1"
        };
        let expectedFields = {
            type: actions.ADD_ITEM,
            week: "",
            column: "",
            name: input.name
        };
        action = actions.addItem(input);
        fieldTest(action, expectedFields);
    });
});

describe("remove item", () => {
    let input = {
        project: "henboard",
        name: "item1"
    };
    let expectedFields = {
        type: actions.REMOVE_ITEM,
        project: input.project,
        name: input.name
    };
    let action = actions.removeItem(input);
    fieldTest(action, expectedFields);
});

describe("move item", () => {
    let input = {
        project: "henboard",
        name: "item1",
        week: "5/17/22",
        column: "Todo"
    };
    let expectedFields = {
        type: actions.MOVE_ITEM,
        project: input.project,
        name: input.name,
        week: input.week,
        column: input.column
    };
    let action = actions.moveItem(input);
    fieldTest(action, expectedFields);
    
    describe("empty values", () => {
        let input = {
            project: "henboard",
            week: null,
            column: null,
            name: "item1"
        };
        let expectedFields = {
            type: actions.MOVE_ITEM,
            week: "",
            column: "",
            name: input.name
        };
        action = actions.moveItem(input);
        fieldTest(action, expectedFields);
    });
});

describe("change item value", () => {
    let input = {
        project: "henboard",
        name: "item1",
        value: "yo"
    };
    let expectedFields = {
        type: actions.CHANGE_ITEM_VALUE,
        project: input.project,
        name: input.name,
        value: input.value
    };
    let action = actions.changeItemValue(input);
    fieldTest(action, expectedFields);
});

describe("toggle info add", () => {
    let input = {
        project: "henboard",
        name: "item1"
    };
    let expectedFields = {
        type: actions.TOGGLE_INFO_ADD,
        project: input.project,
        name: input.name
    };
    let action = actions.toggleInfoAdd(input);
    fieldTest(action, expectedFields);
});
