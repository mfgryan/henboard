import sprints from "./sprints.js";
import * as actions from "../actions/sprints.js";

describe("sprints reducer", () => {
    test("should be non falsy sprints reducer", () => {
        expect(sprints).toBeTruthy();
    });

    test("initSprints", () => {
        let initialState = [];
        let input = [{ foo: "bar" }];
        let action = actions.initSprints(input);

        let expectedState = input;
        expect(sprints(initialState, action)).toEqual(expectedState);
    });

    test("addSprint", () => {
        let initialState = [
            { project: "henboard", week: "05/15/17", current: true }
        ];
        let input = { project: "henboard", week: "05/22/17" };
        let action = actions.addSprint(input);

        let expectedState = [
            { project: "henboard", week: "05/15/17", current: false },
            { project: "henboard", week: "05/22/17", current: true }
        ];
        expect(sprints(initialState, action)).toEqual(expectedState);
    });

    test("setCurrentSprint", () => {
        let initialState = [
            { project: "henboard", week: "05/15/17", current: false },
            { project: "henboard", week: "05/22/17", current: true }
        ];
        let input = { project: "henboard", week: "05/15/17" };
        let action = actions.setCurrentSprint(input);

        let expectedState = [
            { project: "henboard", week: "05/15/17", current: true },
            { project: "henboard", week: "05/22/17", current: false }
        ];
        expect(sprints(initialState, action)).toEqual(expectedState);
    });

    test("default ", () => {
        let initialState = [];

        let expectedState = [];
        let action = { type: "UNKNOWN_TYPE" };
        expect(sprints(initialState, action)).toEqual(expectedState);
    });
});
