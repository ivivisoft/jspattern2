/**
 * @author andy on 17-7-6.
 */

/**
 * parent constructors
 * @constructor
 * @see  jasmine test
 */
function CarMaker() {
}
// a method of the parent
CarMaker.prototype.drive = function () {
    return "Vroom,I have " + this.doors + " doors";
};

//a static method
CarMaker.factory = function (type) {
    var constr = type,
        newcar;
    //if constructor is not defined,throw errors
    if (typeof CarMaker[constr] !== "function") {
        throw {
            name: "Error",
            message: constr + " doesn't exist!"
        };
    }
    //if the constructor is exist,we inherit the parent with prototype only once
    if (typeof CarMaker[constr].prototype.drive !== "function") {
        CarMaker[constr].prototype = new CarMaker();
    }
    //create a specify instance
    newcar = new CarMaker[constr]();
    return newcar;
};

//defined the constructors
CarMaker.Compact = function () {
    this.doors = 4;
};
CarMaker.Convertible = function () {
    this.doors = 2;
};
CarMaker.SUV = function () {
    this.doors = 24;
};
