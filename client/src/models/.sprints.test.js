import sprints from "./sprints.js";

describe("sprints", () => {
    test("should be non falsy sprints", () => {
        expect(sprints).toBeTruthy();
    });

    test("non falsy fields", () => {
        expect(sprints.fields).toBeTruthy();
    });

    test("non falsy primaryKeys", () => {
        expect(sprints.primaryKeys).toBeTruthy();
    });
    
    test("non falsy validation", () => {
        expect(sprints.validation).toBeTruthy();
    });

    test("getCurrentSprint", () => {
        let state = { sprints: [{ project: "x", current: true }] };
        expect(sprints.getCurrentSprint(state)).toEqual(state.sprints[0]);
    });

    test("getSprintArray", () => {
        let state = { sprints: [{ project: "x", week: "foo" }] };
        expect(sprints.getSprintArray(state, "x")).toEqual(state.sprints);
    });
});
