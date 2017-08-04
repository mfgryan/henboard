import lanes from "./lanes.js";

describe("lanes", () => {
    test("should be non falsy lanes", () => {
        expect(lanes).toBeTruthy();
    });

    test("non falsy fields", () => {
        expect(lanes.fields).toBeTruthy();
    });

    test("non falsy primaryKeys", () => {
        expect(lanes.primaryKeys).toBeTruthy();
    });

    test("getLane", () => {
        let state = { lanes: [{ project: "x", column: "todo" }] };
        expect(lanes.getLane(state, "x", "todo")).toEqual(state.lanes[0]);
    });

    test("getLanes", () => {
        let state = {
            lanes: [
                { project: "x", column: "todo" },
                { project: "x", column: "Backlog" }
            ]
        };
        expect(lanes.getLanes(state, "x")).toEqual([
            { project: "x", column: "todo" }
        ]);
    });

    test("getBacklog", () => {
        let state = {
            lanes: [
                { project: "x", column: "todo" },
                { project: "x", column: "Backlog" }
            ]
        };
        expect(lanes.getBacklog(state, "x")).toEqual([
            { project: "x", column: "Backlog" }
        ]);
    });
});
