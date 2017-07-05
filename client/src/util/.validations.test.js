import { validations } from "./validations.js";

test('should return non falsy state', () => {
    expect(validations).toBeTruthy();
});

describe('empty', () => {
    test('should return error messages', () =>{
        let input = "";
        let input1 = false;
        expect(validations.empty(input,input1).length).toBeGreaterThan(0);
    });
    test('should not return error messages', () =>{
        let input = "yo";
        let input1 = false;
        expect(validations.empty(input,input1).length).toBe(0);
    });
    test('should not return error messages', () =>{
        let input = "";
        let input1 = true;
        expect(validations.empty(input,input1).length).toBe(0);
    });
    test('should not return error messages', () =>{
        let input = "yo";
        let input1 = true;
        expect(validations.empty(input,input1).length).toBe(0);
    });
});

describe('unique', () => {
    expect(1).toBe(1);
});

describe('maxLength', () => {
    test('should be empty when less than condition', () =>{
        let input = "yo";
        let input1 = 5;
        expect(validations.maxLength(input,input1).length).toBe(0);
    });
    test('should not be empty when not less than condition', () =>{
        let input = "helloworld";
        let input1 = 5;
        expect(validations.maxLength(input,input1).length).toBeGreaterThan(0);
    });
});
