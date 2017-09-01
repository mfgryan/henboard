import * as actions from "./user.js";

const fieldTest = function(action, expectedFields) {
    for (let field in expectedFields) {
        if (expectedFields.hasOwnProperty(field)) {
            test("should contain correct " + field, () => {
                expect(action[field]).toEqual(expectedFields[field]);
            });
        }
    }
};

describe("create user", () => {
    let input = {
        name: "bob", 
        email: "bob@bob.com",
        password: "123"
    };
    let expectedFields = {
        type: actions.CREATE_USER,
        name: input.name, 
        email: input.email, 
        password: input.password
    };
    let action = actions.createUser(input);
    fieldTest(action, expectedFields);
});

describe("login", () => {
    let input = {
        email: "bob@bob.com",
        password: "123"
    };
    let expectedFields = {
        type: actions.LOGIN,
        email: input.email,
        password: input.password
    };
    let action = actions.login(input);
    fieldTest(action, expectedFields);
});

describe("logout", () => {
    let expectedFields = {
        type: actions.LOGOUT
    };
    let action = actions.logout();
    fieldTest(action, expectedFields);
});
