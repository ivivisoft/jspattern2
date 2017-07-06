/**
 * @author andy on 7/3/17.
 * @module RepeatCode
 */

/**
 * inherit Holy Frail version
 * class module
 * @return {Function}
 * @see jasmine test
 */
var inherit = (function () {
    var F = function () {
    };
    return function (C, P) {
        F.prototype = P.prototype;
        C.prototype = new F();
        C.uber = P.prototype;
        C.prototype.constructor = C;
    };
}());


/**
 * class module
 * @see jasmine test
 */
var klass = function (Parent, props) {
    var Child, F, i;
    //1.new constructors
    Child = function () {
        //parent construct
        if (Child.uber && Child.uber.hasOwnProperty("__construct")) {
            Child.uber.__construct.apply(this, arguments);
        }
        //init construct
        if (Child.prototype.hasOwnProperty("__construct")) {
            Child.prototype.__construct.apply(this, arguments);
        }
    };
    //2.inherit
    Parent = Parent || Object;
    F = function () {
    };
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.uber = Parent.prototype;
    Child.prototype.constructor = Child;

    //3.add implements methods
    for (i in props) {
        if (props.hasOwnProperty(i)) {
            Child.prototype[i] = props[i];
        }
    }
    return Child;
};

/**
 * prototype inherit(modern inherit)
 * @param {Object} o
 * @see jasmine test
 */
function object(o) {
    function F() {
    }

    F.prototype = o;
    return new F();
}

/**
 * coping inherit(modern inherit)
 * shallow copy
 * @param {Object} parent
 * @param {Object} child
 */
function extend(parent, child) {
    var i;
    child = child || {};
    for (i in parent) {
        if (parent.hasOwnProperty(i)) {
            child[i] = parent[i];
        }
    }
    return child;
}

/**
 * coping inherit(modern inherit)
 * deep copy
 * @param {Object} parent
 * @param {Object} child
 */
function extendDeep(parent, child) {
    var i,
        toStr = Object.prototype.toString,
        aStr = "[object Array]";
    child = child || {};
    for (i in parent) {
        if (parent.hasOwnProperty(i)) {
            if (typeof parent[i] === "object") {
                child[i] = (toStr.call(parent[i]) === aStr) ? [] : {};
                extendDeep(parent[i], child[i]);
            } else {
                child[i] = parent[i];
            }
        }
    }
    return child;
}

/**
 * mix-in pattern
 * @see jasmine test
 */
function mix() {
    var arg, max, prop, child = {};
    for (arg = 0, max = arguments.length; arg < max; arg += 1) {
        for (prop in arguments[arg]) {
            if (arguments[arg].hasOwnProperty(prop)) {
                child[prop] = arguments[arg][prop];
            }
        }
    }
    return child;
}

/**
 * bind and curry
 * @see jasmine test
 */
if (typeof Function.prototype.myBind === "undefined") {
    Function.prototype.myBind = function (thisObj) {
        var fn = this,
            slice = Array.prototype.slice,
            args = slice.call(arguments, 1);
        return function () {
            return fn.apply(thisObj, args.concat(slice.call(arguments)));
        };
    };
}