import api from "./api.js";

let a = api();

describe("api", () => {
    test("should return non falsy api", () => {
        expect(a).toBeTruthy();
    });
});
