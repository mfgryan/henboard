import user from "./user.js"

let u = user();

describe("user", () => {
    test("non falsy", () => {
        expect(u.toBeTruthy());
    });
});
