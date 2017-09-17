import history from "./history.js";
import store from "./store.js";

store.dispatch = jest.fn();
store.getState = function(){
    return {
        projects: [{project: "henboard", current: true}],
        history: [{project: "henboard", redo: [{redo: ""}], undo: [{undo: ""}]}]
    }; 
};
let h = history(store, ["projects", "sprints", "lanes", "items", "info", "planning"]);

describe("history", () => {
    test("write ", () => {
        let item = {
            addItem: true,
            column: "Todo",
            project: "henboard", 
            value: "a"
        };
        let changes = {
            lanes: {
                inserts: [item], 
                removals: [item],
                updates: [item]
            } 
        };
        let actions = [
            { 
                type: "REMOVALS",
                data: changes.lanes.removals, 
            },
            { 
                type: "UPDATES",
                data: changes.lanes.updates, 
            },
            { 
                type: "INSERTS",
                data: changes.lanes.inserts, 
            },
        ];
        h.write(changes);
        expect(store.dispatch.mock.calls.length).toBe(3);
        for(let i = 0; i < actions.length; i++){
            expect(store.dispatch.mock.calls[i][0].type).toEqual(actions[i].type);
            expect(store.dispatch.mock.calls[i][0].data).toEqual(actions[i].data);
        }
    });
    
    test("undo", () => {
        expect(h.undo()).toEqual("");
    });

    test("redo", () => {
        expect(h.redo()).toEqual("");
    });

    test("push", () => {
        let keys = ["lanes"];    

        let beforeItem = {addItem: true, column: "Todo", project: "henboard", value: ""};
        let afterItem = {addItem: false, column: "Todo", project: "henboard", value: ""};

        let beforeArray = [[beforeItem]];
        let afterArray = [[afterItem]];

        let undo = {lanes: {inserts: [], removals: [], updates: [beforeItem]}};
        let redo = {lanes: {inserts: [], removals: [], updates: [afterItem]}};

        h.push(keys, beforeArray, afterArray);
        expect(store.dispatch.mock.calls[5][0].type).toEqual("PUSH_CHANGE");
        expect(store.dispatch.mock.calls[5][0].keys).toEqual(keys);
        expect(store.dispatch.mock.calls[5][0].redo).toEqual(redo);
        expect(store.dispatch.mock.calls[5][0].undo).toEqual(undo);
    });

    describe("setUndoRedoKeys", () => {
        let mocks = {undo: jest.fn(), redo: jest.fn()};
        let undoRedo = h.setUndoRedoKeys.call(mocks, 37, 39);
        
        test("redo key", () => {
            global.event = {
                ctrlKey: 39, 
                keyCode: 39
            }
            undoRedo.call();
            expect(mocks.redo.mock.calls.length).toBe(1);
            undoRedo(global.event);
            expect(mocks.redo.mock.calls.length).toBe(2);
        });
        
        test("undo key", () => {
            global.event = {
                ctrlKey: 37, 
                keyCode: 37
            }
            undoRedo.call();
            expect(mocks.undo.mock.calls.length).toBe(1);
            undoRedo(global.event);
            expect(mocks.undo.mock.calls.length).toBe(2);
        });
    });
});
