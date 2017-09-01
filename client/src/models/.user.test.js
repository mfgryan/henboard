import user from "./user.js";

describe("user", () => {
    test("should be non falsy user", () => {
        expect(user).toBeTruthy();
    });

    test("non falsy fields", () => {
        expect(user.fields).toBeTruthy();
    });

    test("non falsy primaryKeys", () => {
        expect(user.primaryKeys).toBeTruthy();
    });
    
    test("non falsy validation", () => {
        expect(user.validation).toBeTruthy();
    });
});
