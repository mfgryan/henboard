import validations from "./validations.js";

test("should return non falsy state", () => {
    expect(validations).toBeTruthy();
});

describe("rules", () => {
    let rules = validations.rules;

    test("should return non falsy state", () => {
        expect(rules).toBeTruthy();
    });

    describe("empty", () => {
        test("should return error messages", () => {
            let input = "";
            let input1 = false;
            expect(rules.empty(input, input1).length).toBeGreaterThan(0);
        });
        test("should not return error messages", () => {
            let input = "yo";
            let input1 = false;
            expect(rules.empty(input, input1).length).toBe(0);
        });
        test("should not return error messages", () => {
            let input = "";
            let input1 = true;
            expect(rules.empty(input, input1).length).toBe(0);
        });
        test("should not return error messages", () => {
            let input = "yo";
            let input1 = true;
            expect(rules.empty(input, input1).length).toBe(0);
        });
    });

    describe("primaryKey", () => {
        test("should return error messages", () => {
            let object = { project: "henboard" };
            let objectArray = [object];
            let input = { object: object, objectArray: objectArray };
            let keys = ["project"];
            let errors = [];
            expect(
                rules.primaryKey(input, keys, errors).length
            ).toBeGreaterThan(0);
        });
    });

    describe("primaryKey", () => {
        test("should not return error messages", () => {
            let object = { project: "henboard" };
            let objectArray = [];
            let input = { object: object, objectArray: objectArray };
            let keys = ["project"];
            let errors = [];
            expect(rules.primaryKey(input, keys, errors).length).toBe(0);
        });
    });

    describe("maxLength", () => {
        test("should be empty when less than condition", () => {
            let input = "yo";
            let input1 = 5;
            expect(rules.maxLength(input, input1).length).toBe(0);
        });
        test("should not be empty when not less than condition", () => {
            let input = "helloworld";
            let input1 = 5;
            expect(rules.maxLength(input, input1).length).toBeGreaterThan(0);
        });
    });
});

describe("check errors", () => {
    let checkErrors = validations.checkErrors;

    test("should be empty when no rules given", () => {
        let action = { projects: "henboard" };
        let state = [];
        let fields = {};
        expect(checkErrors(action, state, fields).length).toBe(0);
    });

    test("should not be empty when failing rules given", () => {
        let action = { projects: "" };
        let state = [];
        let fields = { projects: { empty: false } };
        expect(checkErrors(action, state, fields).length).toBeGreaterThan(0);
    });
});
