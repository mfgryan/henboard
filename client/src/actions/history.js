const model = "history";
const INIT_HISTORY = "INIT_HISTORY";
function initHistory(history) {
    return {
        type: INIT_HISTORY,
        model: model,
        skipValidation: true,
        history: history
    };
}
const PUSH_CHANGE = "PUSH_CHANGE";
function pushChange(history) {
    return {
        type: PUSH_CHANGE, 
        model: model,
        skipValidation: true,
        project: history.project,
        keys: history.keys,
        undo: history.undo,
        redo: history.redo
    };
}
const UNDO = "UNDO";
function undo(history) {
    return {
        type: UNDO,
        model: model,
        skipValidation: true,
        project: history.project
    };
}
const REDO = "REDO";
function redo(history) {
    return {
        type: REDO,
        model: model,
        skipValidation: true,
        project: history.project
    };
}

const UPDATES = "UPDATES";
function updates(key, changes) {
    return {
        type: UPDATES,
        skipValidation: true,
        key: key,
        data: changes
    }
};

const REMOVALS = "REMOVALS";
function removals(key, changes) {
    return {
        type: REMOVALS,
        skipValidation: true,
        key: key,
        data: changes
    }
};

const INSERTS = "INSERTS";
function inserts(key, changes) {
    return {
        type: INSERTS,
        skipValidation: true,
        key: key,
        data: changes
    }
};

export {
    INIT_HISTORY,
    PUSH_CHANGE,
    UNDO,
    REDO,
    UPDATES,
    REMOVALS,
    INSERTS,
    initHistory,
    pushChange,
    undo,
    redo,
    updates,
    removals,
    inserts
};
