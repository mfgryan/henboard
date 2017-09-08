import store from "./store.js";

test("should return non falsy state", () => {
    expect(store).toBeTruthy();
});
