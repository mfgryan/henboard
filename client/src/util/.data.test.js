import data from "./data.js";

test('should return non falsy state', () => {
    expect(data.getLocalState()).toBeTruthy();
});

// no unit tests on network req due to external dep 
