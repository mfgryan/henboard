import projects from "./projects.js";

describe("projects", () => {
    test("should be non falsy projects", () => {
        expect(projects).toBeTruthy();
    });

    test("non falsy fields", () => {
        expect(projects.fields).toBeTruthy();
    });
    
    test("non falsy primaryKeys", () => {
        expect(projects.primaryKeys).toBeTruthy();
    });
    
    test("getCurrentProject", () => {
        let state = {projects: [{project: "x", current: true}]};
        expect(projects.getCurrentProject(state)).toEqual(state.projects[0]);
    });
});
