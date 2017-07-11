import * as actions from './messages.js';

const fieldTest = function(action, expectedFields){
    for(let field in expectedFields){
        if(expectedFields.hasOwnProperty(field)){
            test('should contain correct '+field, () => {
                expect(action[field]).toEqual(expectedFields[field]);
            });
        } 
    }
};

describe('display error messages', () => {
    let input = []; 
    let expectedFields = {
        type: actions.DISPLAY_ERROR_MESSAGES,
        messages: []
    }
    let action = actions.displayErrorMessages(input);
    fieldTest(action, expectedFields);
});

describe('remove messages', () => { 
    let expectedFields = {
        type: actions.REMOVE_MESSAGES
    }
    let action = actions.removeMessages();
    fieldTest(action, expectedFields);
});
