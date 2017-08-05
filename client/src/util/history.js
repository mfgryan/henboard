import data from "./data.js";
import {
    updates,
    inserts,
    removals,
    pushChange,
    undo,
    redo
} from "../actions/history.js";
import { store } from "./store.js";
import projects from "../models/projects.js";

const history = {};

// when true this means undo / redo are being moved through and it locks push history changes.
history.locked = false;
history.lock = () => {
    history.locked = true;
};

history.unlock = () => {
    history.locked = false;
};

const writeUpdates = function(key, changes) {
    changes.length > 0 && store.dispatch(updates(key, changes));
};

const writeRemovals = function(key, changes) {
    changes.length > 0 && store.dispatch(removals(key, changes));
};

const writeInserts = function(key, changes) {
    changes.length > 0 && store.dispatch(inserts(key, changes));
};

history.write = function(changes) {
    for (let key in changes) {
        if (changes.hasOwnProperty(key)) {
            writeRemovals(key, changes[key].removals);
            writeUpdates(key, changes[key].updates);
            writeInserts(key, changes[key].inserts);
        }
    }
};

history.undo = function() {
    let state = store.getState();
    let project = projects.getCurrentProject(state).project;
    let undoStack = state.history.find(history => history.project === project)
        .undo;
    let undoChanges =
        undoStack.length - 1 >= 0 ? undoStack[undoStack.length - 1].undo : {};

    store.dispatch(undo({ project: project }));
    history.lock();
    history.write(undoChanges);
    history.unlock();
};

history.redo = function() {
    let state = store.getState();
    let project = projects.getCurrentProject(state).project;
    let redoStack = state.history.find(history => history.project === project)
        .redo;
    let redoChanges =
        redoStack.length - 1 >= 0 ? redoStack[redoStack.length - 1].redo : [];

    store.dispatch(redo({ project: project }));
    history.lock();
    history.write(redoChanges);
    history.unlock();
};

history.push = function(keys, beforeArray, afterArray) {
    if (!history.locked) {
        let project = projects.getCurrentProject(store.getState()).project;
        let redo = data.checkChanges(keys, beforeArray, afterArray);
        let undo = data.checkChanges(keys, afterArray, beforeArray);
        store.dispatch(
            pushChange({ project: project, keys: keys, redo: redo, undo: undo })
        );
    }
};

history.setUndoRedoKeys = function(){
    return document.onkeydown = (evt) => {
        evt = evt || window.event;
        if (evt.ctrlKey && evt.keyCode === 37) {
            history.undo();
        } else if (evt.ctrlKey && evt.keyCode === 39) {
            history.redo();
        }
    };
};

export default history;
