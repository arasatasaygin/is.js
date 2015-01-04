// is.js 0.0.1
// Author Aras Atasaygin

;(function() {

    // Baseline
    /* -------------------------------------------------------------------------- */

    var root = this;

    // define 'is' object and current version
    var is = {};
    is.not = {};
    is.all = {};
    is.VERSION = '0.0.1';

    // TODO: Add AMD and CommonJS support
    // 'is' object set global to the browser window
    root.is = is;

    // cache some methods to call later on
    var toString = Object.prototype.toString;
    var arraySlice = Array.prototype.slice;

    // helper function which reverses the sense of predicate result
    function not(func) {
        return function() {
            return !func.apply(null, arraySlice.call(arguments));
        };
    }

    // helper function which call predicate function per parameter
    function all(func) {
        return function() {
            var parameters = arraySlice.call(arguments);
            var length = parameters.length;
            var results = [];
            for (var i = 0; i < length; i++) {
                results.push(func.call(null, parameters[i]));
            }
            for (i = 0; i < results.length; i++) {
                if(results[i] === false) return false;
            }
            return true;
        };
    }

    // Type checks
    /* -------------------------------------------------------------------------- */

    // is a given value Arguments?
    is.arguments = function(value) {    // fallback check is for IE
        return toString.call(value) === '[object Arguments]' || (typeof value === 'object' && 'callee' in value);
    };

    // is a given value Array?
    is.array = Array.isArray || function(value) {    // check native isArray first
        return toString.call(value) === '[object Array]';
    };

    // is a given value Boolean?
    is.boolean = function(value) {
        return value === true || value === false;
    };

    // is a given value Date Object?
    is.date = function(value) {
        return toString.call(value) === '[object Date]';
    };

    // is a given value Error object?
    is.error = function(value) {    // TODO: check error types
        return toString.call(value) === '[object Error]';
    };

    // is a given value function?
    is.function = function(value) {    // fallback check is for IE
        return toString.call(value) === '[object Function]' || typeof value == 'function';
    };

    // is a given value NaN?
    is.nan = isNaN || function(value) {    // NaN is number :) Also it is the only value which does not equal itself
        return is.number(value) && value !== value;
    };

    // is a given value null?
    is.null = function(value) {
        return value === null || toString.call(value) === '[object Null]';
    };

    // is a given value number?
    is.number = function(value) {
        return toString.call(value) === '[object Number]';
    };

    // is a given value object?
    is.object = function(value) {
        return toString.call(value) === '[object Object]';
    };

    // is a given value RegExp?
    is.regexp = function(value) {
        return toString.call(value) === '[object RegExp]';
    };

    // are given values same type?
    is.sameType = function(value1, value2) {
        if(is.nan(value1) || is.nan(value2)) {    // prevent NaN, Number same type check
            return is.nan(value1) === is.nan(value2);
        }
        return toString.call(value1) === toString.call(value2);
    };

    // is a given value String?
    is.string = function(value) {
        return toString.call(value) === '[object String]';
    };

    // is a given value undefined?
    is.undefined = function(value) {
        return value === void 0;
    };

    // Presence checks
    /* -------------------------------------------------------------------------- */

    // is a given value empty? Objects, arrays, strings
    is.empty = function(value) {
        if(is.null(value)) {
            return false;
        } else if(is.object(value)) {
            for(var prop in value) {
                if(value.hasOwnProperty(prop))
                    return false;
            }
            return true;
        } else if(is.array(value) || is.arguments(value)) {
            return value.length === 0;
        } else {    // string case
            return value === '';
        }
    };

    // is a given value existy?
    is.existy = function(value) {    // check null and undefined with loose =!
        return value != null;
    };

    // is a given value truthy?
    is.truthy = function(value) {
        return is.existy(value) && value !== false;
    };

    // is a given value falsy?
    is.falsy = not(is.truthy);

    // is a given value space?
    // horizantal tab: 9, line feed: 10, vertical tab: 11, form feed: 12, carriage return: 13, space: 32
    is.space =  function(value) {
        if(is.string(value)) {        
            var characterCode = value.charCodeAt(0);
            return (characterCode >  8 && characterCode < 14) || characterCode === 32;
        }
    };

    // Arithmetic checks
    /* -------------------------------------------------------------------------- */
    
    // are given values equal? supports numbers, strings, regexps, booleans
    // TODO: Add object and array support
    is.equal = function(value1, value2) {
        // check 0 and -0 equity with Infinity and -Infinity
        if(is.all.number(value1, value2)) return value1 === value2 && 1 / value1 === 1 / value2;
        // check regexps as strings too
        if(is.all.string(value1, value2) || is.all.regexp(value1, value2)) return '' + value1 === '' + value2;
        if(is.all.boolean(value1, value2)) return value1 === value2;
        return false;
    };

    // is a given value even?
    is.even = function(value) {
        return is.number(value) && value % 2 === 0;
    };

    // is a given value odd?
    is.odd = not(is.even);

    // is a given value positive?
    is.positive = function(value) {
        return is.number(value) && value > 0;
    };

    // is a given value positive?
    is.negative = not(is.positive);

    // is a given value above minimum parameter?
    is.above = function(value, min) {
        return is.all.number(value, min) && value > min;
    };

    // is a given value equal or higher than a minimum parameter?
    is.least = not(is.above);

    // is a given value within minimum and maximum parameters?
    is.within = function(value, min, max) {
        return is.all.number(value, min) && value > min && value < max;
    };

    is.decimal = function(value) {
        return is.number(value) && value % 1 === 0;
    };

    is.finite = isFinite || function(value) {
        return value !== Infinity && value !== -Infinity && is.not.nan(value);
    };

    is.infinite = not(is.finite);

    // Regexp checks
    /* -------------------------------------------------------------------------- */

    // Environment checks
    // -----------------

    // Time checks
    // -----------

    // Array checks
    // ------------

    // Object checks
    // -------------

    // DOM checks
    // ----------

    // Syntax checks
    // ----------

    // String checks
    // ----------

    // ES6 checks
    // ----------

    // 'not' and 'all' interfaces
    // --------------------------
    is.not.number = not(is.number);
    is.all.number = all(is.number);
    is.not.string = not(is.string);
    is.all.string = all(is.string);
    is.not.regexp = not(is.regexp);
    is.all.regexp = all(is.regexp);
    is.not.boolean = not(is.boolean);
    is.all.boolean = all(is.boolean);
    is.not.nan = not(is.nan);
    is.all.nan = all(is.nan);

}.call(this));
