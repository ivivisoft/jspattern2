/**
 * @author andy on 7/1/17.
 * @module member
 */

/**
 * @constructor
 * @param price
 * @see jasmine test
 */
var Gadget = function (price) {
    this.price = price;
};

/**
 * static method(class method)
 */
Gadget.isShiny = function () {
    //always execute
    var msg = "you bet";
    //this only works if called not-statically
    if (this instanceof Gadget) {
        msg += ", it costs $" + this.price + "!";
    }
    return msg;
};
/**
 * a instance method
 * @return {*}
 */
Gadget.prototype.isShiny = function () {
    return Gadget.isShiny.call(this);
};


/**
 * @constructor
 * @see jasmine test
 */
var Godget = (function () {
    //private static variable/attribute
    var counter = 0,
        NewGodget;
    //it will be new constructor implement
    NewGodget = function () {
        counter += 1;
    };
    //privileged method
    NewGodget.prototype.getLastId = function () {
        return counter;
    };
    //over the old constructs
    return NewGodget;
}());


/**
 * constant wrapper
 * @constructor
 * @see jasmine test
 */
var constant = (function () {
    var constants = {},
        ownProp = Object.prototype.hasOwnProperty,
        allowed = {
            string: 1,
            number: 1,
            boolean: 1
        },
        prefix = (Math.random() + '_').slice(2);
    return {
        set: function (name, value) {
            if (this.isDefined(name)) {
                return false;
            }
            if (!ownProp.call(allowed, typeof value)) {
                return false;
            }
            constants[prefix + name] = value;
            return true;
        },
        isDefined: function (name) {
            return ownProp.call(constants, prefix + name);
        },
        get: function (name) {
            if (this.isDefined(name)) {
                return constants[prefix + name];
            }
            return null;
        }
    }
}());


/**
 * define method implements chaining pattern
 * @see jasmine test
 */
if (typeof Function.prototype.method !== "function") {
    Function.prototype.method = function (name, implementation) {
        // the 'this' is the constructor
        this.prototype[name] = implementation;
        return this;
    }
}



