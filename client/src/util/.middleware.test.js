import {logger, validate} from "./middleware.js";

test('should have truthy logger', () => {
    expect(logger).toBeTruthy();
});

test('should have truthy validate', () => {
    expect(validate).toBeTruthy();
});

//TODO test the logger function

//TODO test the validate function
