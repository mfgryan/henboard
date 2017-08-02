const history = {};

history.fields = ["project", "moving", ("undo": []), ("redo": [])];
history.fields.undo.fields = ["keys", "do", "undo"];
history.fields.redo.fields = ["keys", "do", "undo"];

history.primaryKeys = ["project", "index"];

export default history;
