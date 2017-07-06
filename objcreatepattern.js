/**
 * @author andy on 6/29/17.
 * @module ObjectCreate
 */


/**
 * @type {Object}
 * @name MYAPP
 */
var MYAPP = MYAPP || {};

/**
 * namespace util function
 * @method namespace
 * @param {String} ns_string
 * @return {Object} namespace string
 * @see jasmine test
 */
MYAPP.namespace = function (ns_string) {
    var parts = ns_string.split('.'),
        parent = MYAPP,
        i, max;
    //delete the global variable
    if (parts[0] === 'MYAPP') {
        parts = parts.slice(1);
    }
    for (i = 0, max = parts.length; i < max; i++) {
        //if it not exist create it
        if (typeof parent[parts[i]] === "undefined") {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
};


/**
 * module pattern
 */

//defined namespace
MYAPP.namespace('utilities.array');
/**
 * @type {Object}
 * @property utilities.array
 * @see jasmine test
 */
MYAPP.utilities.array = (function () {
    // dependency
    var uobj = MYAPP.utilities.object,
        ulang = MYAPP.utilities.lang,

        //private attribute
        array_string = "[object Array]",
        ops = Object.prototype.toString;

    //private method
    //...


    //var defined end
    //optional once init
    //...
    // public API
    return {
        inArray: function (needle, haystack) {
            for (var i = 0, max = haystack.length; i < max; i += 1) {
                if (haystack[i] === needle) {
                    return true;
                }
            }
        },
        isArray: function (a) {
            return ops.call(a) === array_string;
        }
    }
}());

/**
 * revelation pattern
 */

//defined namespace
MYAPP.namespace('utilities.revelation.array');
/**
 * revelation pattern
 * @see jasmine test
 * @type {object}
 * @property revelation
 */
MYAPP.utilities.revelation.array = (function () {
    var array_string = "[object Array]",
        ops = Object.prototype.toString,
        //private method
        inArray = function (haystack, needle) {
            for (var i = 0, max = haystack.length; i < max; i += 1) {
                if (haystack[i] === needle) {
                    return i;
                }
            }
            return -1;
        },
        isArray = function (a) {
            return ops.call(a) === array_string;
        };
    // variable defined end
    //revelation public API
    return {
        isArray: isArray,
        inArray: inArray
    };
}());


/**
 * constructor pattern
 */

//defined namespace
MYAPP.namespace('utilities.constructor.array');
/**
 * @type {Object}
 * @property MYAPP
 */
MYAPP.utilities.constructor.array = (function () {
    //dependency
    var uobj = MYAPP.utilities.object,
        ulang = MYAPP.utilities.lang,
        //private attribute and method
        Constr;
    // var defined variable end
    //public API -- constructor function
    Constr = function (o) {
        this.elements = this.toArray(o);
    };
    //public API -- prototype
    Constr.prototype = {
        constructor: MYAPP.utilities.constructor.array,
        version: "2.0",
        toArray: function (obj) {
            for (var i = 0, a = [], len = obj.length; i < len; i += 1) {
                a[i] = obj[i];
            }
            return a;
        }
    };
    //return new namespace constructor
    return Constr;
}());