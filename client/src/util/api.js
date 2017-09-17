import axios from "axios";
import { tools } from "./util";
import models from "../models/models";

export default () => {

    let base = "/api/";

    let getEmail = function(){
        return localStorage.getItem("email");
    };
    
    let getPassword = function(){
        return localStorage.getItem("password");
    };

    let config = function(path, method){
        return {
            url: path,
            method: method || "get",
            auth: {
                username: getEmail(), 
                password: getPassword() 
            }
        }
    };

    return {
        read: function(key){
            // if key is an array recursively read each key
            return typeof key === "string" ? axios(config(base + key)) : axios.all(key.map(key => this.read(key)));
        },
        update: function(key, data){
            let conf = config(base + key, "post");
            conf.data = data;
            return axios(conf); 
        },
        remove: function(key, data){
            let conf = config(base + key + "/delete", "post");
            conf.data = data;
            return axios(conf); 
        },
        writeChanges: function(keys, beforeArray, afterArray){
            let changes = tools().checkChanges(keys, beforeArray, afterArray, models);
            for (let key in changes) {
                if (changes.hasOwnProperty(key)) {
                    let updates = changes[key].updates;
                    let removals = changes[key].removals;
                    let inserts = changes[key].inserts;
                    updates.length > 0 && this.update(key, updates);
                    removals.length > 0 && this.remove(key, removals);
                    inserts.length > 0 && this.update(key, inserts);
                }
            }
        }
    };
};
