/**
 * @author andy on 6/29/17.
 * @module func
 */


/**
 * function memo pattern,when the arguments is same,
 * it will hit cache,improved the performance!
 * @return {*}
 * @see jasmine test
 */
var funCachePattern = function () {
    var cacheKey = JSON.stringify(Array.prototype.slice.call(arguments)),
        result;
    if (!arguments.callee.cache[cacheKey]) {
        result = {};
        // big spend time operation,set result value
        arguments.callee.cache[cacheKey] = result;
        console.log('This cacheKey:', cacheKey, 'not hit cache!')
    }
    return result;
};
// cache store
funCachePattern.cache = {};


/**
 * curry
 * @param {Function} fn a function will curry
 * @return {Function} a curry function
 * @see jasmine test
 */
function schonfinkelize(fn) {
    var slice = Array.prototype.slice,
        stored_args = slice.call(arguments, 1);
    return function () {
        var new_args = slice.call(arguments),
            args = stored_args.concat(new_args);
        return fn.apply(null, args);
    }
}