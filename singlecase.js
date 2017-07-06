/**
 * @author andy on 7/4/17.
 */

/**
 * static attribute save instance but everyone can change it
 * @constructor
 * @see jasmine test
 */
function Universe() {
    if (typeof Universe.instance === "object") {
        return Universe.instance;
    }
    //some function
    this.bang = "Big";
    //cache instance
    Universe.instance = this;
    return this;
}

/**
 *self-defining implements single case,but after  self defining
 * the before prototype attribute will lost
 * @constructor
 * @see jasmine test
 */

function UniverseYet() {
    //cache instance
    var instance = this;
    //some function
    this.bang = "Big";
    UniverseYet = function () {
        return instance;
    };
}


/**
 * self-defining implements single case improved!
 * @constructor
 * @see jasmine test
 */
function UniverseYett() {
    //cache
    var instance;
    //change the constructor
    UniverseYett = function () {
        return instance;
    };
    //save the prototype
    UniverseYett.prototype = this;
    //instance
    instance = new UniverseYett();
    //reset instance constructor
    instance.constructor = UniverseYett;
    //some function
    this.bang = "Big";
    return instance;
}

/**
 * single case Holy Frail version:closure and immediate function
 * @constructor
 * @see jasmine test
 */
var UniverseLast;
(function () {
    var instance;
    UniverseLast = function () {
        if (instance) {
            return instance;
        }
        instance = this;
        //some function
        this.bang = "Big";
    };
}());

