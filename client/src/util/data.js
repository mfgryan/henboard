import axios from "axios";

import projects from "../api/projects.js";
import sprints from "../api/sprints.js";
import lanes from "../api/lanes.js";
import items from "../api/items.js";
import info  from "../api/info.js";

import { initProjects } from "../actions/projects.js";
import { initSprints } from "../actions/sprints.js";
import { initLanes } from "../actions/lanes.js";
import { initItems } from "../actions/items.js";
import { initInfo } from "../actions/info.js";

const data = {};

data.projects = projects;
data.sprints = sprints;
data.lanes = lanes;
data.items = items;
data.info = info;

data.getLocalState = function(){   
    return { 
        projects: projects.initialState,
        sprints: sprints.initialState,
        lanes: lanes.initialState,
        items: items.initialState,
        info: info.initialState,
        messages: []
    };
};

data.getInitialState = function(callback){
    axios.all([projects.get(), sprints.get(), lanes.get(), info.get(), items.get()])
        .then(axios.spread(function(projects, sprints, lanes, items, info){
            callback({
                projects: projects.data, 
                sprints: sprints.data, 
                lanes: lanes.data, 
                items: items.data, 
                info: info.data
            })
        }))
        .catch(function(err){
            console.log(err);
        });
};

data.updateInitialState = (store,callback) => {
    data.getInitialState(function(state){
        store.dispatch(initProjects(state.projects));
        store.dispatch(initSprints(state.sprints));
        store.dispatch(initLanes(state.lanes));
        store.dispatch(initItems(state.items));
        store.dispatch(initInfo(state.info));
        callback();
    });
};

const primaryKeysMatch = function(primaryKeys,beforeObject,afterObject){
    for(let i = 0; i < primaryKeys.length; i++){
        if(beforeObject[primaryKeys[i]] !== afterObject[primaryKeys[i]]){
            return false;
        }
    }
    return true;
};

const indexOfMatch = function(primaryKeys,beforeObject,afterCollection){
    let i = 0, acLen = afterCollection.length;
    while(i < acLen && (!afterCollection[i] || !primaryKeysMatch(primaryKeys,beforeObject,afterCollection[i]))){
        i++;
    }
    return i === acLen ? -1 : i;
};

const checkInserts = function(collection){
    let inserts = [];
    for(let k = 0, len = collection.length; k < len; k++){
        let doc = collection[k];
        if(doc){
            // match was not found earlier which is why not null
            // insert collection[k] into DB
            inserts.push(doc);
        }
    }
    return inserts;
};

const checkCollectionChanges = function(primaryKeys,beforeCollection,afterCollection){
    let updates = [];
    let removals = [];
    for(let j = 0, bcLen = beforeCollection.length; j < bcLen; j++){
        let beforeObject = beforeCollection[j];
        let index = indexOfMatch(primaryKeys,beforeObject,afterCollection);
        if(index >= 0){
            if(JSON.stringify(beforeObject) !== JSON.stringify(afterCollection[index])){
                // the object was updated
                // add afterCollection[index] to DB
                updates.push(afterCollection[index]);
            } 
            // mark afterCollection[index] as matched
            // set the object equal to null
            afterCollection[index] = null;
        }else{
            // no match in afterCollection. it must have been deleted.
            // remove beforeObject from DB
            removals.push(beforeObject);
        }
    } 
    return {updates: updates, removals: removals, inserts: checkInserts(afterCollection)};
};

const checkChanges = function(keys,beforeArray,afterArray){ 
    let changes = {};
    for(let i = 0, keyLen = keys.length; i < keyLen; i++){
        let beforeCollection = beforeArray[i];
        let afterCollection = afterArray[i];
        let primaryKeys = data[keys[i]].primaryKeys;
        
        // check for updates, removals, and inserts
        changes[keys[i]] = checkCollectionChanges(primaryKeys,beforeCollection,afterCollection);
    }
    return changes;
};

const writeUpdates = function(key, updates){
    for(let i = 0; i < updates.length; i++){
        data[key].post(updates[i]); 
    }
}

const writeRemovals = function(key, updates){
    for(let i = 0; i < updates.length; i++){
        data[key].remove(updates[i]); 
    }
}

const writeInserts = writeUpdates;

data.write = function(keys,beforeArray,afterArray){
    let changes = checkChanges(keys,beforeArray,afterArray);
    for(let i = 0, len = keys.length; i < len; i++){
        if(changes[keys[i]] !== undefined){
            writeUpdates(keys[i], changes[keys[i]].updates);
            writeRemovals(keys[i], changes[keys[i]].removals);
            writeInserts(keys[i], changes[keys[i]].inserts);
        }
    }
};

export default data;
