import models from "./models.js";

describe("models", () => {
    test("should be non falsy models", () => {
        expect(models).toBeTruthy();
    });
});
