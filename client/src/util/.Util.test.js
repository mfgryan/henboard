import { dateUtil, urlUtil } from "./Util.js";

const d = dateUtil();
const u = urlUtil();

test('should return non falsy dateUtil', () => {
    expect(d).toBeTruthy();
});

test('should return non falsy urlUtil', () => {
    expect(u).toBeTruthy();
});
