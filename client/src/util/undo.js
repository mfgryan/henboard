import history from "./history.js";

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.ctrlKey && evt.keyCode == 37) {
        history.undo();
    } else if (evt.ctrlKey && evt.keyCode === 39) {
        history.redo();
    }
};
