import data from "./data.js";

describe("data", () => {
    test("should return non falsy data", () => {
        expect(data).toBeTruthy();
    });

    test("should return non falsy getInitialState", () => {
        expect(data.updateInitialState).toBeTruthy();
    });

    test("check changes update", () => {
        let keys = ["projects"];
        let beforeArray = [[{ project: "henboard", current: false }]];
        let afterArray = [[{ project: "henboard", current: true }]];
        let expectedChanges = {};
        expectedChanges[keys[0]] = {
            updates: afterArray[0],
            removals: [],
            inserts: []
        };
        expect(data.checkChanges(keys, beforeArray, afterArray)).toEqual(
            expectedChanges
        );
    });

    test("check changes removals", () => {
        let keys = ["projects"];
        let beforeArray = [[{ project: "henboard", current: false }]];
        let afterArray = [[]];
        let expectedChanges = {};
        expectedChanges[keys[0]] = {
            updates: [],
            removals: beforeArray[0],
            inserts: []
        };
        expect(data.checkChanges(keys, beforeArray, afterArray)).toEqual(
            expectedChanges
        );
    });

    test("check changes inserts", () => {
        let keys = ["projects"];
        let beforeArray = [[]];
        let afterArray = [[{ project: "henboard", current: true }]];
        let expectedChanges = {};
        expectedChanges[keys[0]] = {
            updates: [],
            removals: [],
            inserts: afterArray[0]
        };
        expect(data.checkChanges(keys, beforeArray, afterArray)).toEqual(
            expectedChanges
        );
    });
});
