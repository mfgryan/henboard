const mapKeysToValues = function(state,keys){
    return keys.map((key) => JSON.stringify(state[key]));
};

let watch = function(store, keys, callback){ 
    let currentValues = mapKeysToValues(store.getState(),keys);

    function handleChange(){
        let previousValues = currentValues;
        currentValues = mapKeysToValues(store.getState(),keys);

        let changedKeys = [];
        let changedValuesBefore = [];
        let changedValuesAfter = [];

        for(let i=0; i< keys.length; i++){
            if(previousValues[i] !== currentValues[i]){
                changedKeys.push(keys[i]); 
                changedValuesBefore.push(JSON.parse(previousValues[i])); 
                changedValuesAfter.push(JSON.parse(currentValues[i])); 
            }
        };
        
        changedKeys.length > 0 && callback(changedKeys,changedValuesBefore,changedValuesAfter, false);
    };

    return store.subscribe(handleChange);
};

export default watch;
