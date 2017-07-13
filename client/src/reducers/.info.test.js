import info from "./info.js";
import * as actions from "../actions/info.js";

describe('info reducer', () => {
    test('should be non falsy info reducer', () => {
        expect(info).toBeTruthy();  
    });
    
    test('initInfo', () => {
        let initialState = [];
        let input = [{foo: "bar"}];
        let action = actions.initInfo(input);

        let expectedState = input;
        expect(info(initialState, action)).toEqual(expectedState);  
    });
    
    test('addInfo', () => {
        let initialState = [];
        let input = {project: "henboard", name: "foo", value: "bar"};
        let action = actions.addInfo(input);

        let expectedState = [{ project: "henboard", name: "foo", value: "bar" }];
        expect(info(initialState, action)).toEqual(expectedState);  
    });
    
    test('removeInfo', () => {
        let initialState = [{ project: "henboard", name: "foo", value: "bar" }];
        let input = {project: "henboard", name: "foo", value: "bar"};
        let action = actions.removeInfo(input);

        let expectedState = [];
        expect(info(initialState, action)).toEqual(expectedState);  
    });
});
