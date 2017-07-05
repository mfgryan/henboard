import { dateUtil, urlUtil } from "./Util.js";

const d = dateUtil();
const u = urlUtil();

describe('the date utility', () => {
    test('should return non falsy dateUtil', () => {
        expect(d).toBeTruthy();
    });
    
    describe('getNearestMonday function', () => {
        test('should return previous monday across two weeks', () => {
            let input = new Date(2017,1,12);
            let expectedValue = new Date(2017,1,6);
            expect(d.getNearestMonday(input)).toMatchObject(expectedValue);
        });

        test('should return previous monday across two months', () => {
            let input = new Date(2017,1,1);
            let expectedValue = new Date(2017,0,30);
            expect(d.getNearestMonday(input)).toMatchObject(expectedValue);
        });
        
        test('should return previous monday across two years', () => {
            let input = new Date(2017,0,1);
            let expectedValue = new Date(2016,11,26);
            expect(d.getNearestMonday(input)).toMatchObject(expectedValue);
        });
    });
    
    describe('getDate function', () => {
        test('should return correct date object', () => {
            let input = "01/14/2017"; 
            let expectedValue = new Date(2017,0,14);
            expect(d.getDate(input)).toMatchObject(expectedValue);
        });
    });

    describe('getDateFormat function', () => {
        test('should return correct date string', () => {
            let input = new Date(2017,0,14)
            let expectedValue = "01/14/17";
            expect(d.getDateFormat(input)).toBe(expectedValue);
        });
    });
    
    describe('dayDiff function', () => {
        test('should return correct date difference with past date', () => {
            let input = new Date(2017,0,14)
            let input1 = new Date(2016,11,30)
            let expectedValue = -15;
            expect(d.dayDiff(input,input1)).toBe(expectedValue);
        });
        
        test('should return correct date difference with future date', () => {
            let input = new Date(2016,11,30)
            let input1 = new Date(2017,0,14)
            let expectedValue = 15;
            expect(d.dayDiff(input,input1)).toBe(expectedValue);
        });
    });
});

describe('the url utility', () => {
    test('should return non falsy urlUtil', () => {
        expect(u).toBeTruthy();
    });

    describe('isUrl function', () => {
        test('should return input string', () => {
            let input = "http://www.test.com"
            expect(u.isUrl(input)[0]).toBe(input);
        });
        
        test('should return input string', () => {
            let input = "www.test.com"
            expect(u.isUrl(input)[0]).toBe(input);
        });
        test('should not return array', () => {
            let input = "test"
            expect(u.isUrl(input)).toBeFalsy();
        });
    });

    describe('checkProtocol', () => {
        test('should return url with double slash prefix', () => {
            let input = "www.test.com"; 
            expect(u.checkProtocol(input)).toBe("//"+input);
        });
    });
});
