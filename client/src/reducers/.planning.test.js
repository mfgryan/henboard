import planning from "./planning.js";
import * as actions from "../actions/planning.js";

describe('planning reducer', () => {
    test('should be non falsy planning reducer', () => {
        expect(planning).toBeTruthy();  
    });
    
    test('initPlanning', () => {
        let initialState = [];
        let input = [{foo: "bar"}];
        let action = actions.initPlanning(input);
        let expectedState = input;
        expect(planning(initialState, action)).toEqual(expectedState);  
    });
    
    test('setPlanning', () => {
        let initialState = [{project: "henboard", missionStatement: ""}];
        let input = {project: "henboard", missionStatement: "foo bar mission statement"};
        let action = actions.setPlanning(input);
        let expectedState = [input];
        expect(planning(initialState, action)).toEqual(expectedState);  
    });
    
    test('default ', () => {
        let initialState = [];
        let action = {type: "UNKNOWN_TYPE"};
        let expectedState = [];
        expect(planning(initialState, action)).toEqual(expectedState);  
    });
});
