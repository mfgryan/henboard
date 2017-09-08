import axios from "axios";

let date = () => {
    const _MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;
    return {
        // returns the most recent monday
        getNearestMonday: function(d) {
            d = new Date(d);
            var day = d.getDay(),
                diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
            return new Date(d.setDate(diff));
        },
        // return date object given a mm / dd / yy string
        getDate: function(dateString) {
            let dates = dateString.split("/");
            return new Date(
                parseInt(dates[2], 10),
                parseInt(dates[0], 10) - 1,
                parseInt(dates[1], 10)
            );
        },
        // returns date formatted mm/dd/yy
        getDateFormat: function(date) {
            var dd = date.getDate();
            var mm = date.getMonth() + 1;
            var yy = date.getFullYear().toString().substr(-2);
            dd = dd < 10 ? "0" + dd : dd;
            mm = mm < 10 ? "0" + mm : mm;
            return mm + "/" + dd + "/" + yy;
        },
        // returns the numerical difference between two dates
        dayDiff: function(a, b) {
            var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
            var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
            return Math.floor((utc2 - utc1) / _MILLISECONDS_IN_DAY);
        }
    };
};

let url = () => {
    let expression = /[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi;
    let regex = new RegExp(expression);
    return {
        isUrl: function(test) {
            return test.match(regex);
        },
        checkProtocol: function(url) {
            if (this.isUrl(url) && !url.includes("http")) {
                return "//" + url;
            } else {
                return url;
            }
        }
    };
};

let tools = () => {
    
    let checkInserts = function(collection) {
        let inserts = [];
        for (let k = 0, len = collection.length; k < len; k++) {
            if(collection[k])
                inserts.push(collection[k]); // not null means it must be a new doc
        }
        return inserts;
    };

    return {
        keysMatch: function(keys, objectA, objectB) {
            for (let i = 0; i < keys.length; i++) {
                if (objectA[keys[i]] !== objectB[keys[i]]) {
                    return false;
                }
            }
            return true;
        },
        indexOfMatch: function(keys, object, collection) {
            let i = 0,len = (collection && collection.length) || 0;
            while (
                i < len &&
                (!collection[i] || !this.keysMatch(keys, object, collection[i]))
            ) {
                i++;
            }
            return i === len ? -1 : i;
        },
        checkCollectionChanges: function(primaryKeys, bc, ac) {
            // clone before and after collections so we don't mutate originals
            let befCol = Object.assign([], bc);
            let aftCol = Object.assign([], ac);
            
            let updates = [];
            let removals = [];
            
            for (let j = 0, bcLen = befCol.length; j < bcLen; j++) {
                let befObj = befCol[j];
                let index = this.indexOfMatch(primaryKeys,befObj,aftCol);
                if (index >= 0) {
                    if (JSON.stringify(befObj) !== JSON.stringify(aftCol[index]))
                        updates.push(aftCol[index]); // the object was updated
                    aftCol[index] = null; // the object can be marked off now that it's been found
                } else {
                    removals.push(befObj); // obj not in aftCol therefore it was removed
                }
            }

            return {
                updates: updates,
                removals: removals,
                inserts: checkInserts(aftCol)
            }
        },
        checkChanges: function(keys, beforeArray, afterArray, models) {
            let changes = {};

            // for each key in keys, see what changes were made
            for (let i = 0, keyLen = keys.length; i < keyLen; i++) {
                let befCol = beforeArray[i];
                let aftCol = afterArray[i];
                let primaryKeys = models[keys[i]].primaryKeys;

                changes[keys[i]] = this.checkCollectionChanges(
                    primaryKeys,
                    befCol,
                    aftCol
                );
            }
            return changes;
        },
    };
};

export { date, url, tools};
