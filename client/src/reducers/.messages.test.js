import messages from "./messages.js";
import * as actions from "../actions/messages.js";

describe('messages reducer', () => {
    test('should be non falsy messages reducer', () => {
        expect(messages).toBeTruthy();  
    });
    
    test('displayErrorMessages', () => {
        let initialState = [];
        let input = [{foo: "bar"}];
        let action = actions.displayErrorMessages(input);
        let expectedState = input;
        expect(messages(initialState, action)).toEqual(expectedState);  
    });
    
    test('removeMessages', () => {
        let initialState = [{foo: "bar"}];
        let action = actions.removeMessages();
        let expectedState = [];
        expect(messages(initialState, action)).toEqual(expectedState);  
    });
    
    test('default ', () => {
        let initialState = [];
        let action = {type: "UNKNOWN_TYPE"};
        let expectedState = [];
        expect(messages(initialState, action)).toEqual(expectedState);  
    });
});
