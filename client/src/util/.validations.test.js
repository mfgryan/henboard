import { validations } from "./validations.js";

test('should return non falsy state', () => {
    expect(validations).toBeTruthy();
});
