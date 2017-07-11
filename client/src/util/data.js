import axios from "axios";

import { initProjects } from "../actions/projects.js";
import { initSprints } from "../actions/sprints.js";
import { initLanes } from "../actions/lanes.js";
import { initItems } from "../actions/items.js";
import { initInfo } from "../actions/info.js";

import { tools } from "./util.js";

import models from "../models/models.js";

const data = {};
const toolBox = tools();

data.getLocalState = function(){   
    return { 
        projects: models.projects.initialState,
        sprints: models.sprints.initialState,
        lanes: models.lanes.initialState,
        items: models.items.initialState,
        info: models.info.initialState,
        messages: []
    };
};

data.getInitialState = function(callback){
    axios.all([models.projects.get(), models.sprints.get(), models.lanes.get(), models.info.get(), models.items.get()])
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
        let index = toolBox.indexOfMatch(primaryKeys,beforeObject,afterCollection);
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

data.checkChanges = function(keys,beforeArray,afterArray){ 
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
    data[key].post(updates);
};

const writeRemovals = function(key, updates){
    data[key].remove(updates);
};

const writeInserts = writeUpdates;

data.write = function(changes){
    for(let key in changes){
        if(changes.hasOwnProperty(key)){
            writeUpdates(key, changes[key].updates);
            writeRemovals(key, changes[key].removals);
            writeInserts(key, changes[key].inserts);
        }
    }
};

export default data;
