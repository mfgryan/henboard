const DISPLAY_ERROR_MESSAGES = "DISPLAY_ERROR_MESSAGE";
function displayErrorMessages(messages){
    return {
        type: DISPLAY_ERROR_MESSAGES,
        skipValidaiton: true,
        messages: messages
    }
};

const REMOVE_MESSAGES = "REMOVE_MESSAGES";
function removeMessages(){
    return {
        type: REMOVE_MESSAGES,
        skipValidation: true
    }
};

export { DISPLAY_ERROR_MESSAGES, REMOVE_MESSAGES, displayErrorMessages, removeMessages }
