import validations from "./validations.js";

test('should return non falsy state', () => {
    expect(validations).toBeTruthy();
});

describe('rules', () => {
    let rules = validations.rules;

    test('should return non falsy state', () => {
        expect(rules).toBeTruthy();
    });

    describe('empty', () => {
        test('should return error messages', () =>{
            let input = "";
            let input1 = false;
            expect(rules.empty(input,input1).length).toBeGreaterThan(0);
        });
        test('should not return error messages', () =>{
            let input = "yo";
            let input1 = false;
            expect(rules.empty(input,input1).length).toBe(0);
        });
        test('should not return error messages', () =>{
            let input = "";
            let input1 = true;
            expect(rules.empty(input,input1).length).toBe(0);
        });
        test('should not return error messages', () =>{
            let input = "yo";
            let input1 = true;
            expect(rules.empty(input,input1).length).toBe(0);
        });
    });

    //TODO primaryKey

    describe('maxLength', () => {
        test('should be empty when less than condition', () =>{
            let input = "yo";
            let input1 = 5;
            expect(rules.maxLength(input,input1).length).toBe(0);
        });
        test('should not be empty when not less than condition', () =>{
            let input = "helloworld";
            let input1 = 5;
            expect(rules.maxLength(input,input1).length).toBeGreaterThan(0);
        });
    });
});

//TODO checkErrors

//TODO check primary keys same tests as the rules one

