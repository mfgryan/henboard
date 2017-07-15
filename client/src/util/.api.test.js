import api from "./api.js";

test('should return non falsy api', () => {
    expect(api).toBeTruthy();
});
