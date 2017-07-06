/**
 * @author andy on 6/30/17.
 * @module ObjectCreate
 */

/**
 * the sandbox constructor
 * @constructor
 */
function SandBox() {
    //translate arguments to array
    var args = Array.prototype.slice.call(arguments),
        //the last argument is callback function
        callback = args.pop(),
        // module can pass in by array or single param
        modules = (args[0] && typeof args[0] === "string") ? args : args[0],
        i;
    //make sure the function called by constructor
    if (!(this instanceof SandBox)) {
        return new SandBox(modules, callback);
    }
    //add attribute to 'this' object
    this.a = 1;
    this.b = 2;

    //add modules to 'this' object
    if (!modules || modules === "*") {
        modules = [];
        for (i in SandBox.modules) {
            if (SandBox.modules.hasOwnProperty(i)) {
                modules.push(i);
            }
        }
    }
    //init the modules
    for (i = 0; i < modules.length; i += 1) {
        SandBox.modules[modules[i]](this);
    }
    //call the callback
    callback(this);
}


/**
 * some prototype attribute
 * @type {{name: string, version: string, getName: SandBox.getName}}
 */
SandBox.prototype = {
    name: "My Application",
    version: "1.0",
    getName: function () {
        return this.name;
    }
};

/**
 * module attribute
 */
SandBox.modules = {};

SandBox.modules.dom = function (box) {
    box.getElement = function () {
        console.log("dom modules:getElement method invoke!");
    };
    box.getStyle = function () {
        console.log("dom modules:getStyle method invoke!");
    };
    box.foo = "bar";
};

SandBox.modules.event = function (box) {
    //if you need you can visit the Sandbox's prototype,like that:
    //box.constructor.prototype.m = "mmm"
    box.attachEvent = function () {
        console.log("event modules:attachEvent method invoke!");
    };
    box.detachEvent = function () {
        console.log("event modules:detachEvent method invoke!");
    };
};

SandBox.modules.ajax = function (box) {
    box.makeRequest = function () {
        console.log("ajax modules:makeRequest method invoke!");
    };
    box.getResponse = function () {
        console.log("ajax modules:getResponse method invoke!");
    };
};