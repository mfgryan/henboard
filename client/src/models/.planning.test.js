import planning from "./planning.js";

describe("planning", () => {
    test("should be non falsy planning", () => {
        expect(planning).toBeTruthy();
    });

    test("non falsy fields", () => {
        expect(planning.fields).toBeTruthy();
    });

    test("non falsy primaryKeys", () => {
        expect(planning.primaryKeys).toBeTruthy();
    });
    
    test("non falsy validation", () => {
        expect(planning.validation).toEqual({});
    });

    test("getPlan", () => {
        let state = { planning: [{ project: "x", plan: "foo" }] };
        expect(planning.getPlan(state, "x")).toEqual(state.planning[0]);
    });
    
    test("getPlan should be empty", () => {
        let state = { planning: [{ project: "x", plan: "foo" }] };
        expect(planning.getPlan(state, "henboard")).toEqual({});
    });
});
