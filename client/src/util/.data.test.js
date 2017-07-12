import data from "./data.js";

describe('getLocalState', () => {
    test('should return non falsy state', () => {
        expect(data.getLocalState()).toBeTruthy();
    });
});

