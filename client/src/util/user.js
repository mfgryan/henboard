// utilities
import watch from "./watch.js";
import Api from "./api.js";
import actions from "../actions/actions.js";
import { initialStates } from "../reducers/reducers.js";

export default (store, keys) => {

    let api = Api();

    let unsubscribe;
    
    let subscribe = function(store, keys, cb){
        return watch(store, keys, cb); 
    };

    let getInitialState = function(callback) {
        return api
            .read(keys)
            .then(function(res){
                callback(res);
            })
            .catch(function(err) {
                console.error(err);
            });
    };

    let updateState = function(state){
        for(let i = 0; i < state.length; i++){
            store.dispatch(actions[keys[i]](state[i].data));
        }
    };

    let clearState = function(){
        for(let i =0; i < keys.length; i++){
            store.dispatch(actions[keys[i]](initialStates[keys[i]] || []));
        }
    };
    
    watch(store, ["user"], function(user, beforeArray, afterArray){
        let beforeEmail = beforeArray[0][0].email;
        let afterEmail = afterArray[0][0].email;

        if(!beforeEmail && afterEmail){
            getInitialState(function(state){
                // dispatch updates here
                updateState(state);
                unsubscribe = subscribe(store, keys, api.writeChanges.bind(api));
            });
        }else if(!afterEmail && beforeEmail){
            typeof unsubscribe === "function" && unsubscribe();
            clearState();
        }
    });
};
