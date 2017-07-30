import projects from "./projects.js";
import * as actions from "../actions/projects.js";

describe("projects reducer", () => {
    test("should be non falsy projects reducer", () => {
        expect(projects).toBeTruthy();
    });

    test("initProjects", () => {
        let initialState = [];
        let input = [{ foo: "bar" }];
        let action = actions.initProjects(input);
        let expectedState = input;
        expect(projects(initialState, action)).toEqual(expectedState);
    });

    test("setCurrentProject", () => {
        let initialState = [{ project: "henboard", current: false }];
        let input = "henboard";
        let action = actions.setCurrentProject(input);
        let expectedState = [{ project: "henboard", current: true }];
        expect(projects(initialState, action)).toEqual(expectedState);
    });

    test("default ", () => {
        let initialState = [];
        let action = { type: "UNKNOWN_TYPE" };
        let expectedState = [];
        expect(projects(initialState, action)).toEqual(expectedState);
    });
});
