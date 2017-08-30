import users from "./users.js";

describe("users", () => {
    test("should be non falsy users", () => {
        expect(users).toBeTruthy();
    });

    test("non falsy fields", () => {
        expect(users.fields).toBeTruthy();
    });

    test("non falsy primaryKeys", () => {
        expect(users.primaryKeys).toBeTruthy();
    });
    
    test("non falsy validation", () => {
        expect(users.validation).toBeTruthy();
    });
});
