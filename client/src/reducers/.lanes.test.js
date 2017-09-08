import lanes from "./lanes.js";
import * as actions from "../actions/lanes.js";

describe("lanes reducer", () => {
    test("should be non falsy lanes reducer", () => {
        expect(lanes).toBeTruthy();
    });

    test("initLanes", () => {
        let initialState = [];
        let input = [{ foo: "bar" }];
        let action = actions.init(input);

        let expectedState = input;
        expect(lanes(initialState, action)).toEqual(expectedState);
    });

    test("toggleAddItem", () => {
        let initialState = [
            { project: "henboard", column: "Todo", addItem: false, value: "" },
            { project: "x", column: "Todo", addItem: false, value: "" }
        ];
        let input = { project: "henboard", column: "Todo" };
        let action = actions.toggleAddItem(input);

        let expectedState = [
            { project: "henboard", column: "Todo", addItem: true, value: "" },
            { project: "x", column: "Todo", addItem: false, value: "" }
        ];
        expect(lanes(initialState, action)).toEqual(expectedState);
    });

    test("addLane", () => {
        let initialState = [
            { project: "henboard", column: "Todo", addItem: false, value: "" }
        ];
        let input = {
            project: "henboard",
            column: "FooLane",
            addItem: false,
            value: ""
        };
        let action = actions.addLane(input);

        let expectedState = [
            { project: "henboard", column: "Todo", addItem: false, value: "" },
            {
                project: "henboard",
                column: "FooLane",
                addItem: false,
                value: ""
            }
        ];
        expect(lanes(initialState, action)).toEqual(expectedState);
    });

    test("changeValue", () => {
        let initialState = [
            { project: "henboard", column: "Todo", addItem: false, value: "" },
            { project: "x", column: "Todo", addItem: false, value: "" }
        ];
        let input = {
            project: "henboard",
            column: "Todo",
            addItem: false,
            value: "foo"
        };
        let action = actions.changeValue(input);

        let expectedState = [
            {
                project: "henboard",
                column: "Todo",
                addItem: false,
                value: "foo"
            },
            { 
                project: "x", 
                column: "Todo", 
                addItem: false, 
                value: "" 
            }
        ];
        expect(lanes(initialState, action)).toEqual(expectedState);
    });

    test("default ", () => {
        let initialState = [];

        let expectedState = [];
        let action = { type: "UNKNOWN_TYPE" };
        expect(lanes(initialState, action)).toEqual(expectedState);
    });
});
