import axios from "axios";

import { initProjects } from "../actions/projects.js";
import { initSprints } from "../actions/sprints.js";
import { initLanes } from "../actions/lanes.js";
import { initItems } from "../actions/items.js";
import { initInfo } from "../actions/info.js";
import { initPlanning } from "../actions/planning.js";

import { tools, api as apis } from "./util.js";

import models from "../models/models.js";

const data = {};
const toolBox = tools();
const api = apis();

const getInitialState = function(callback) {
    return api
        .read(["projects","sprints","lanes","items","info","planning"])
        .then(axios.spread(function(projects,sprints,lanes,items,info,planning) {
                callback({
                    projects: projects.data,
                    sprints: sprints.data,
                    lanes: lanes.data,
                    items: items.data,
                    info: info.data,
                    planning: planning.data
                });
            })
        )
        .catch(function(err) {
            console.error(err);
        });
};

const dispatches = (store, state) => {
    store.dispatch(initProjects(state.projects));
    store.dispatch(initSprints(state.sprints));
    store.dispatch(initLanes(state.lanes));
    store.dispatch(initItems(state.items));
    store.dispatch(initInfo(state.info));
    store.dispatch(initPlanning(state.planning));
};

data.updateInitialState = (store, callback) => { 
    return getInitialState((state) => {
        dispatches(store, state);
        callback(state);
    });
};

const checkInserts = function(collection) {
    let inserts = [];
    for (let k = 0, len = collection.length; k < len; k++) {
        let doc = collection[k];
        if (doc) {
            // match was not found earlier which is why not null
            // insert collection[k] into DB
            inserts.push(doc);
        }
    }
    return inserts;
};

const checkCollectionChanges = function(primaryKeys, bc, ac) {
    let beforeCollection = Object.assign([], bc);
    let afterCollection = Object.assign([], ac);
    let updates = [];
    let removals = [];
    for (let j = 0, bcLen = beforeCollection.length; j < bcLen; j++) {
        let beforeObject = beforeCollection[j];
        let index = toolBox.indexOfMatch(
            primaryKeys,
            beforeObject,
            afterCollection
        );
        if (index >= 0) {
            if (
                JSON.stringify(beforeObject) !==
                JSON.stringify(afterCollection[index])
            ) {
                // the object was updated
                // add afterCollection[index] to DB
                updates.push(afterCollection[index]);
            }
            // mark afterCollection[index] as matched
            // set the object equal to null
            afterCollection[index] = null;
        } else {
            // no match in afterCollection. it must have been deleted.
            // remove beforeObject from DB
            removals.push(beforeObject);
        }
    }
    return {
        updates: updates,
        removals: removals,
        inserts: checkInserts(afterCollection)
    };
};

data.checkChanges = function(keys, beforeArray, afterArray) {
    let changes = {};
    for (let i = 0, keyLen = keys.length; i < keyLen; i++) {
        let beforeCollection = beforeArray[i];
        let afterCollection = afterArray[i];
        let primaryKeys = models[keys[i]].primaryKeys;

        // check for updates, removals, and inserts
        changes[keys[i]] = checkCollectionChanges(
            primaryKeys,
            beforeCollection,
            afterCollection
        );
    }
    return changes;
};

const writeUpdates = function(key, updates) {
    updates.length > 0 && api.update(key, updates);
};

const writeRemovals = function(key, updates) {
    updates.length > 0 && api.remove(key, updates);
};

const writeInserts = writeUpdates;

data.write = function(changes) {
    for (let key in changes) {
        if (changes.hasOwnProperty(key)) {
            writeUpdates(key, changes[key].updates);
            writeRemovals(key, changes[key].removals);
            writeInserts(key, changes[key].inserts);
        }
    }
    return changes;
};

data.writeOnChanges = (keys, beforeArray, afterArray) => {
    data.write(data.checkChanges(keys, beforeArray, afterArray));
};

export default data;
