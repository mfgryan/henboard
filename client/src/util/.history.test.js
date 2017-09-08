import history from "./history.js";
import store from "./store.js";

let h = history(store, ["projects", "sprints", "lanes", "items", "info", "planning"]);

describe("history", () => {
    test("should return non falsy history", () => {
        expect(h).toBeTruthy();
    });

    test("undo", () => {
    });

    test("redo", () => {
    });

    test("push", () => {
    });
    
    let testUndoRedo = h.setUndoRedoKeys();
    test("typeof undoRedo", () => {
        expect(typeof testUndoRedo).toEqual("function");
    });
    
    test("key undo", () => {
        h.undo = jest.fn();
        let evt = {
            ctrlKey: 37, 
            keyCode: 37
        }
        testUndoRedo(evt);
        expect(h.undo.mock.calls.length).toBe(1);
    });
    
    test("key redo", () => {
        h.redo = jest.fn();
        global.event = {
            ctrlKey: 39, 
            keyCode: 39
        };
        testUndoRedo();
        expect(h.redo.mock.calls.length).toBe(1);
    });
});
