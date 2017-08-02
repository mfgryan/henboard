//action types
import { INIT_HISTORY, PUSH_CHANGE, UNDO, REDO, UPDATES, INSERTS, REMOVALS } from "../actions/history.js";

import projects from "../models/projects";
import sprints from "../models/sprints";
import lanes from "../models/lanes";
import items from "../models/items";
import info from "../models/info";
import planning from "../models/planning";

import { tools } from "../util/util.js";

const models = {
    projects,
    sprints,
    lanes,
    items,
    info,
    planning
};

const initialState = [{project: "henboard", undo: [], redo: []}];

const history = function(state = initialState, action) {
    switch (action.type) {
        case INIT_HISTORY:
            return action.history;
        case PUSH_CHANGE:
            return state.map((history) => {
                return history.project === action.project ? Object.assign({}, history, 
                        {
                            undo: history.undo.concat([{
                                project: action.project,
                                keys: action.keys,
                                redo: action.redo,
                                undo: action.undo
                            }]), 
                            redo: []
                        }) : history;
            });
        case UNDO:
            return state.map((history) => {
                return history.project === action.project ? Object.assign({}, history, 
                    {
                        undo: history.undo.slice(0, history.undo.length-1),
                        redo: history.redo.concat(history.undo[history.undo.length-1] || [])
                    }) : history;
            });
        case REDO:
            return state.map((history) => {
                return history.project === action.project ? Object.assign({}, history, 
                    {
                        undo: history.undo.concat(history.redo[history.redo.length-1] || []),
                        redo: history.redo.slice(0, history.redo.length-1)
                    }) : history;
            });
        default:
            return state;
    }
}

const provideHistory = (next) => (state,action) => {
    let newKey = {};
    switch(action.type){
        case UPDATES: 
            newKey[action.key] = state[action.key].map((obj) => {
                let index = tools().indexOfMatch(models[action.key].primaryKeys, obj, action.data); 
                return index >= 0 ? action.data[index] : obj;
            });
            return next(Object.assign({},state,newKey), action);
        case INSERTS:
            newKey[action.key] = state[action.key].concat(action.data);
            return next(Object.assign({},state,newKey), action);
        case REMOVALS:
            newKey[action.key] = state[action.key].filter((obj) => {
                tools().indexOfMatch(models[action.key].primaryKeys, obj, action.data) < 0
            });
            return next(Object.assign({},state,newKey), action);
        default:
            return next(state, action);
    } 
};

export { history, provideHistory }
