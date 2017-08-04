const history = {};

history.fields = ["project", "moving", "undo", "redo"];
history.undoFields = ["keys", "redo", "undo"];
history.redoFields = ["keys", "redo", "undo"];

history.primaryKeys = ["project", "index"];

export default history;
