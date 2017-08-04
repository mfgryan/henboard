import info from "./info.js";

describe("info", () => {
    test("should be non falsy info", () => {
        expect(info).toBeTruthy();
    });

    test("non falsy fields", () => {
        expect(info.fields).toBeTruthy();
    });

    test("non falsy primaryKeys", () => {
        expect(info.primaryKeys).toBeTruthy();
    });

    test("getInfoArray", () => {
        let state = { info: [{ project: "x", name: "foo" }] };
        expect(info.getInfoArray(state, "x", "foo")).toEqual(state.info);
    });
});
