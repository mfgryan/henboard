const validations = {
    empty: function(input, condition, errors = []){
        let message = "Value must not be empty";
        return input.length === 0 && !condition ? errors.concat([message]) : errors; 
    },   
    unique: function(input, condition, errors = []){
        return errors; 
    },
    maxLength: function(input, condition, errors = []){
        let message = "Value must not be more than "+condition+" characters";
        return input.length > condition ? errors.concat([message]) : errors;
    }
};

export { validations }
