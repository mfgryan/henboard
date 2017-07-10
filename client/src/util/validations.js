const primaryKeysMatch = function(primaryKeys,beforeObject,afterObject){
    for(let i = 0; i < primaryKeys.length; i++){
        if(beforeObject[primaryKeys[i]] !== afterObject[primaryKeys[i]]){
            return false;
        }
    }
    return true;
};

const indexOfMatch = function(primaryKeys, object, collection){
    let i =0, len = collection.length;
    while(i < len && (!collection[i] || !primaryKeysMatch(primaryKeys,object,collection[i]))){
        i++;
    }
    return i === len ? -1 : i;
};

const validations = {
    empty: function(input, condition, errors = []){
        let message = "Value must not be empty";
        return input.length === 0 && !condition ? errors.concat([message]) : errors; 
    },   
    primaryKey: function(input, condition, errors = []){
        let message = "Value must be unique";
        return indexOfMatch(condition, input[0], input[1]) !== -1 ? errors.concat([message]) : errors;
    },
    maxLength: function(input, condition, errors = []){
        let message = "Value must not be more than "+condition+" characters";
        return input.length > condition ? errors.concat([message]) : errors;
    }
};

export { validations }
