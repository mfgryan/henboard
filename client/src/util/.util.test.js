import { date, url, tools, api } from "./util.js";

const d = date();
describe("the date utility", () => {
    test("should return non falsy date", () => {
        expect(d).toBeTruthy();
    });

    describe("getNearestMonday function", () => {
        test("should return previous monday across two weeks", () => {
            let input = new Date(2017, 1, 12);
            let expectedValue = new Date(2017, 1, 6);
            expect(d.getNearestMonday(input)).toMatchObject(expectedValue);
        });

        test("should return previous monday across two months", () => {
            let input = new Date(2017, 1, 1);
            let expectedValue = new Date(2017, 0, 30);
            expect(d.getNearestMonday(input)).toMatchObject(expectedValue);
        });

        test("should return previous monday across two years", () => {
            let input = new Date(2017, 0, 1);
            let expectedValue = new Date(2016, 11, 26);
            expect(d.getNearestMonday(input)).toMatchObject(expectedValue);
        });
    });

    describe("getDate function", () => {
        test("should return correct date object", () => {
            let input = "01/14/2017";
            let expectedValue = new Date(2017, 0, 14);
            expect(d.getDate(input)).toMatchObject(expectedValue);
        });
    });

    describe("getDateFormat function", () => {
        test("should return correct date string", () => {
            let input = new Date(2017, 1, 1);
            let expectedValue = "02/01/17";
            expect(d.getDateFormat(input)).toBe(expectedValue);
        });
        
        test("should return correct date string double digits", () => {
            let input = new Date(2017, 10, 10);
            let expectedValue = "11/10/17";
            expect(d.getDateFormat(input)).toBe(expectedValue);
        });
    });

    describe("dayDiff function", () => {
        test("should return correct date difference with past date", () => {
            let input = new Date(2017, 0, 14);
            let input1 = new Date(2016, 11, 30);
            let expectedValue = -15;
            expect(d.dayDiff(input, input1)).toBe(expectedValue);
        });

        test("should return correct date difference with future date", () => {
            let input = new Date(2016, 11, 30);
            let input1 = new Date(2017, 0, 14);
            let expectedValue = 15;
            expect(d.dayDiff(input, input1)).toBe(expectedValue);
        });
    });
});

const u = url();
describe("the url utility", () => {
    test("should return non falsy url", () => {
        expect(u).toBeTruthy();
    });

    describe("isUrl function", () => {
        test("should return input string", () => {
            let input = "http://www.test.com";
            expect(u.isUrl(input)[0]).toBe(input);
        });

        test("should return input string", () => {
            let input = "www.test.com";
            expect(u.isUrl(input)[0]).toBe(input);
        });
        test("should not return array", () => {
            let input = "test";
            expect(u.isUrl(input)).toBeFalsy();
        });
    });

    describe("checkProtocol", () => {
        test("should return url with double slash prefix", () => {
            let input = "www.test.com";
            expect(u.checkProtocol(input)).toBe("//" + input);
        });
        
        test("should not return url with double slash prefix", () => {
            let input = "www";
            expect(u.checkProtocol(input)).toBe(input);
        });
    });
});

const t = tools();
describe("the tools utility", () => {
    test("should return non falsy tools", () => {
        expect(t).toBeTruthy();
    });

    test("keysMatch with no keys", () => {
        let keys = [];
        let objectA = {
            foo: "bar"
        };
        let objectB = {
            foo: "bar"
        };
        expect(t.keysMatch(keys, objectA, objectB)).toBe(true);
    });

    test("keysMatch with one key and a match", () => {
        let keys = ["foo"];
        let objectA = {
            foo: "bar"
        };
        let objectB = {
            foo: "bar"
        };
        expect(t.keysMatch(keys, objectA, objectB)).toBe(true);
    });

    test("keysMatch with one key and no match", () => {
        let keys = ["foo"];
        let objectA = {
            foo: "bar"
        };
        let objectB = {
            foo: "baz"
        };
        expect(t.keysMatch(keys, objectA, objectB)).toBe(false);
    });

    test("keysMatch with n keys and a match", () => {
        let keys = ["foo", "bar", "baz"];
        let objectA = {
            foo: "foo",
            bar: "bar",
            baz: "baz"
        };
        let objectB = {
            foo: "foo",
            bar: "bar",
            baz: "baz"
        };
        expect(t.keysMatch(keys, objectA, objectB)).toBe(true);
    });

    test("keysMatch with n keys and no match", () => {
        let keys = ["foo", "bar", "baz"];
        let objectA = {
            foo: "foo",
            bar: "bar",
            baz: "baz"
        };
        let objectB = {
            foo: "bar",
            bar: "bar",
            baz: "bar"
        };
        expect(t.keysMatch(keys, objectA, objectB)).toBe(false);
    });

    test("indexOfMatch", () => {
        test("no match should return -1", () => {
            let keys = ["foo", "bar"];
            let object = {
                foo: "bar",
                bar: "foo"
            };
            let collection = [
                {
                    foo: "foo",
                    bar: "foo"
                }
            ];
            expect(t.indexOfMatch(keys, object, collection)).toBe(-1);
        });

        test("should return correct index of match", () => {
            let keys = ["foo", "bar"];
            let object = {
                foo: "bar",
                bar: "foo"
            };
            let collection = [
                {
                    foo: "foo",
                    bar: "foo"
                },
                object,
                {
                    foo: "foo",
                    bar: "foo"
                }
            ];
            expect(t.indexOfMatch(keys, object, collection)).toBe(1);
        });
    });
});

const a = api();
describe("api tests", () => {
    let key = "projects";
    test("getPath", () => {
        expect(a.getPath(key)).toEqual("/api/projects");     
    });
    test("postPath", () => {
        expect(a.postPath(key)).toEqual("/api/projects");     
    });
    test("removePath", () => {
        expect(a.removePath(key)).toEqual("/api/projects/delete");     
    });
});
