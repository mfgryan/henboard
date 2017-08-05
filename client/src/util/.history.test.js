import history from "./history.js";

describe("history", () => {
    test("should return non falsy history", () => {
        expect(history).toBeTruthy();
    });

    describe("locking and unlocking", () => {
        expect(history.locked).toBe(false);
        test("lock", () => { 
            history.lock();
            expect(history.locked).toBe(true);
        });
        
        test("unlock", () => { 
            history.unlock();
            expect(history.locked).toBe(false);
        });
    });

    test("write", () => {
        let changes = {};
        expect(history.write(changes)).toEqual({});
    });

    test("undo", () => {
        expect(history.undo()).toEqual([]);
    });

    test("redo", () => {
        expect(history.redo()).toEqual([]);
    });

    test("push locked", () => {
        history.lock();
        expect(history.push()).toBe(false);
    });
    
    test("push unlocked", () => {
        history.unlock();
        expect(history.push(["projects"],[{"project": "foo"}],[{"project": "bar"}])).toBe(true);
    });

    let testUndoRedo = history.setUndoRedoKeys();
    test("typeof undoRedo", () => {
        expect(typeof testUndoRedo).toEqual("function");
    });
    
    test("key undo", () => {
        history.undo = jest.fn();
        let evt = {
            ctrlKey: 37, 
            keyCode: 37
        }
        testUndoRedo(evt);
        expect(history.undo.mock.calls.length).toBe(1);
    });
    
    test("key redo", () => {
        history.redo = jest.fn();
        let evt = {
            ctrlKey: 39, 
            keyCode: 39
        }
        testUndoRedo(evt);
        expect(history.redo.mock.calls.length).toBe(1);
    });
});
