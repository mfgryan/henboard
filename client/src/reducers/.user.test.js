import user from "./user.js";
import * as actions from "../actions/user.js";

describe("user reducer", () => {
    test("should be non falsy user reducer", () => {
        expect(user).toBeTruthy();
    });

    test("createUser", () => {
        let initialState = [];
        let input = { name: "bob", email: "bob@g.com" };
        let action = actions.createUser(input);
        let expectedState = [input];
        expect(user(initialState, action)).toEqual(expectedState);
    });

    test("Login", () => {
        let initialState = [{ name: "", email: ""}];
        let input = { email: "bob@g.com", password: "123" };
        let action = actions.login(input);
        
        // steps taken by middleware after authenticated
        action.name = "bob";
        delete action.password;

        let expectedState = [{ email: "bob@g.com", name: "bob" }];
        expect(user(initialState, action)).toEqual(expectedState);
    });
    
    test("Logout", () => {
        let initialState = [{ name: "bob", email: "bob@g.com"}];
        let input = {};
        let action = actions.logout(input);
        let expectedState = [{ name: "", email: "" }];
        expect(user(initialState, action)).toEqual(expectedState);
    });

    test("default ", () => {
        let initialState = [];
        let action = { type: "UNKNOWN_TYPE" };
        let expectedState = [];
        expect(user(initialState, action)).toEqual(expectedState);
    });
});
