import { tools } from "./util.js";

const validations = {};
const toolBox = tools();

validations.rules = {
    empty: function(input, condition, errors = []) {
        let message = "Value must not be empty";
        return input.length === 0 && !condition
            ? errors.concat([message])
            : errors;
    },
    primaryKey: function(input, condition, errors = []) {
        let object = input.object;
        let objectArray = input.objectArray;
        let keys = condition;
        let message = '" ';
        for (let i = 0; i < keys.length; i++) {
            message += object[keys[i]] + " ";
        }
        message += '"\n Already exists.';
        return toolBox.indexOfMatch(keys, object, objectArray) !== -1
            ? errors.concat([message])
            : errors;
    },
    maxLength: function(input, condition, errors = []) {
        let message =
            "Value must not be more than " + condition + " characters";
        return input.length > condition ? errors.concat([message]) : errors;
    }
};

validations.checkErrors = function(action, state, fields, errors = []) {
    for (let field in fields) {
        if (fields.hasOwnProperty(field)) {
            let ruleSet = fields[field];
            for (let rule in ruleSet) {
                if (ruleSet.hasOwnProperty(rule)) {
                    let input = action[field];
                    errors = validations.rules[rule](
                        input,
                        ruleSet[rule],
                        errors
                    );
                }
            }
        }
    }
    return errors;
};

validations.checkPrimaryKeys = function(
    object,
    objectArray,
    keys,
    errors = []
) {
    return validations.rules.primaryKey(
        { object: object, objectArray: objectArray },
        keys,
        errors
    );
};

export default validations;
