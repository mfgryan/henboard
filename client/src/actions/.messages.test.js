import * as actions from './messages.js';

test('should create an action to display error messages', () => {
    const input = []; 
    const expectedAction = {
        type: actions.DISPLAY_ERROR_MESSAGES,
        messages: input
    }
    expect(actions.displayErrorMessages(input)).toEqual(expectedAction)
});

test('should create an action to set remove messages', () => {
    const expectedAction = {
        type: actions.REMOVE_MESSAGES
    }
    expect(actions.removeMessages()).toEqual(expectedAction)
});
