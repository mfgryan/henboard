// redux dep
import { updates, inserts, removals, pushChange, undo, redo } from "../actions/history.js";
import projects from "../models/projects.js";
import models from "../models/models";

// utilities
import watch from "./watch.js";
import { tools } from "./util.js";

export default (store, keys) => {
    
    // when true this means undo / redo are being moved through and it locks push history changes.
    let locked = false;

    let lock = function(){
        locked = true; 
    };

    let unlock = function(){
        locked = false; 
    };
    
    let getState = function(){
        return store.getState(); 
    };

    let getProject = function(state){
        return projects.getCurrentProject(state).project;
    };

    let getStack = function(key){
        let state = getState();
        let project = getProject(state); 
        let stack = state.history.find(history => history.project === project)[key];
        return stack.length - 1 >= 0 ? stack[stack.length - 1][key] : [];
    };

    let api = {
        write: function(changes){
            for (let key in changes) {
                if (changes.hasOwnProperty(key)) {
                    changes[key].removals.length > 0 && store.dispatch(removals(key, changes[key].removals));
                    changes[key].updates.length > 0 && store.dispatch(updates(key, changes[key].updates));
                    changes[key].inserts.length > 0 && store.dispatch(inserts(key, changes[key].inserts));
                }
            }
            return changes;
        },
        undo: function(){
            let changes = getStack("undo");
            store.dispatch(undo({ project: getProject(getState()) }));

            lock();
            this.write(changes);
            unlock();

            return changes;
        },
        redo: function(){
            let changes = getStack("redo");
            store.dispatch(redo({ project: getProject(getState()) }));
            
            lock();
            this.write(changes);
            unlock();

            return changes;
        },
        push: function(keys, beforeArray, afterArray){
            if (!locked) {
                let redo = tools().checkChanges(keys, beforeArray, afterArray, models);
                let undo = tools().checkChanges(keys, afterArray, beforeArray, models);
                store.dispatch(
                    pushChange({ project: getProject(getState()), keys: keys, redo: redo, undo: undo })
                );
                return true;
            }
            return false;
        },
        setUndoRedoKeys: function(u, r){ 
            return document.onkeydown = (evt) => {
                evt = evt || window.event;
                if (evt.ctrlKey && evt.keyCode === u) {
                    this.undo();
                } else if (evt.ctrlKey && evt.keyCode === r) {
                    this.redo();
                }
            };
        }
    }       

    api.setUndoRedoKeys(37, 39);
    watch(store, keys, api.push.bind(api));

    return api;
};
