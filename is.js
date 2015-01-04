// is.js 0.0.1
// Author Aras Atasaygin

;(function() {

    // Baseline
    /* -------------------------------------------------------------------------- */

    var root = this;

    // define 'is' object and current version
    var is = {};
    is.not = {};
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
    }

    // Regexp checks
    /* -------------------------------------------------------------------------- */

    // Environment checks
    // ------------------

    // Arithmetic checks
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

}.call(this));
