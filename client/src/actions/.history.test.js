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
