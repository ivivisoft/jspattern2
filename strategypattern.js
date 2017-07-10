/**
 * @author by root on 17-7-10.
 */


/**
 *
 * @type {{types: {}, messages: Array, config: {}, validate: validator.validate, hasErrors: validator.hasErrors}}
 * @see jasmine test
 */
var validator = {
    //all support types
    types: {},
    //the error message in current session
    messages: [],
    //the config in current session
    //config like 'name:checkType'
    config: {},
    //interface method
    validate: function (data) {
        var i, msg, type, checker, result_ok;
        //reset all the message
        this.messages = [];
        for (i in  data) {
            if (data.hasOwnProperty(i)) {
                type = this.config[i];
                checker = this.types[type];
                if (!type) {
                    continue;//not need check
                }
                if (!checker) {
                    throw {
                        name: 'ValidationError',
                        message: 'No handler to validate type ' + type
                    };
                }
                result_ok = checker.validate(data[i]);
                if (!result_ok) {
                    msg = 'Invalid value for *' + i + '*, ' + checker.instructions;
                    this.messages.push(msg);
                }
            }
        }
        return this.hasErrors();
    },
    hasErrors: function () {
        return this.messages.length !== 0;
    }
};


validator.types.isNonEmpty = {
    validate: function (value) {
        return value !== '';
    },
    instructions: 'the value cannot br empty!'
};

validator.types.isNumber = {
    validate: function (value) {
        return !isNaN(value);
    },
    instructions: 'the value can only be a valid number,e.g.1, 3.14 or 2017'
};
validator.types.isAlphaNum = {
    validate: function (value) {
        return !/[^a-z0-9]/i.test(value);
    },
    instructions: 'the value can only contain characters and numbers,no special symbols'
};