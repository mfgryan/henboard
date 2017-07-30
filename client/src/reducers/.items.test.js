import items from "./items.js";
import * as actions from "../actions/items.js";

describe("items reducer", () => {
    test("should be non falsy items reducer", () => {
        expect(items).toBeTruthy();
    });

    test("initItems", () => {
        let initialState = [];
        let input = [{ foo: "bar" }];
        let action = actions.initItems(input);

        let expectedState = input;
        expect(items(initialState, action)).toEqual(expectedState);
    });

    test("openInfo", () => {
        let initialState = [
            { project: "henboard", name: "fooItem", openInfo: false }
        ];
        let input = { project: "henboard", name: "fooItem" };
        let action = actions.openInfo(input);

        let expectedState = [
            { project: "henboard", name: "fooItem", openInfo: true }
        ];
        expect(items(initialState, action)).toEqual(expectedState);
    });

    test("closeInfo", () => {
        let initialState = [
            { project: "henboard", name: "fooItem", openInfo: true }
        ];
        let input = { project: "henboard", name: "fooItem" };
        let action = actions.closeInfo(input);

        let expectedState = [
            { project: "henboard", name: "fooItem", openInfo: false }
        ];
        expect(items(initialState, action)).toEqual(expectedState);
    });

    test("addItem", () => {
        let initialState = [];
        let input = { project: "henboard", name: "fooItem" };
        let action = actions.addItem(input);

        let expectedState = [
            {
                project: "henboard",
                name: "fooItem",
                week: "",
                column: "",
                openInfo: false,
                value: "",
                addItem: true
            }
        ];
        expect(items(initialState, action)).toEqual(expectedState);
    });

    test("moveItem", () => {
        let initialState = [
            {
                project: "henboard",
                name: "fooItem",
                week: "",
                column: "",
                openInfo: false,
                value: ""
            }
        ];
        let input = {
            project: "henboard",
            name: "fooItem",
            week: "05/22/17",
            column: "Todo"
        };
        let action = actions.moveItem(input);

        let expectedState = [
            {
                project: "henboard",
                name: "fooItem",
                week: "05/22/17",
                column: "Todo",
                openInfo: false,
                value: ""
            }
        ];
        expect(items(initialState, action)).toEqual(expectedState);
    });

    test("removeItem", () => {
        let initialState = [
            {
                project: "henboard",
                name: "fooItem",
                week: "",
                column: "",
                openInfo: false,
                value: ""
            }
        ];
        let input = { project: "henboard", name: "fooItem" };
        let action = actions.removeItem(input);

        let expectedState = [];
        expect(items(initialState, action)).toEqual(expectedState);
    });

    test("changeItemValue", () => {
        let initialState = [
            {
                project: "henboard",
                name: "fooItem",
                week: "",
                column: "",
                openInfo: false,
                value: ""
            }
        ];
        let input = { project: "henboard", name: "fooItem", value: "bar" };
        let action = actions.changeItemValue(input);

        let expectedState = [
            {
                project: "henboard",
                name: "fooItem",
                week: "",
                column: "",
                openInfo: false,
                value: "bar"
            }
        ];
        expect(items(initialState, action)).toEqual(expectedState);
    });

    test("default ", () => {
        let initialState = [];

        let expectedState = [];
        let action = { type: "UNKNOWN_TYPE" };
        expect(items(initialState, action)).toEqual(expectedState);
    });
});
