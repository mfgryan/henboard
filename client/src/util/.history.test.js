import history from "./history.js";

describe("history", () => {
    test("should return non falsy history", () => {
        expect(history).toBeTruthy();
    });

    test("undo", () => {
        expect(history.undo).toBeTruthy();
    });

    test("redo", () => {
        expect(history.redo).toBeTruthy();
    });

    test("push", () => {
        expect(history.push).toBeTruthy();
    });
});
