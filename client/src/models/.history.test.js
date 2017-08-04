import history from "./history.js";

describe("history", () => {
    test("should be non falsy history", () => {
        expect(history).toBeTruthy();
    });

    test("non falsy fields", () => {
        expect(history.fields).toBeTruthy();
    });

    test("non falsy primaryKeys", () => {
        expect(history.primaryKeys).toBeTruthy();
    });
});
