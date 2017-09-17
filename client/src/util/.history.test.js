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
    });
    
    test("key redo", () => {
    });
});
