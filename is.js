// is.js 0.7.4
// Author: Aras Atasaygin

// AMD with global, Node, or global
;(function(root, factory) {
  if(typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['is'], function(is) {
      // Also create a global in case some scripts
      // that are loaded still are looking for
      // a global even when an AMD loader is in use.
      return (root.is = factory(is));
    });
  } else if(typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory(require('is_js'));
  } else {
    // Browser globals (root is window)
    root.is = factory(root.is);
  }
} (this, function(is) {

  // Baseline
  /* -------------------------------------------------------------------------- */

  var root = this || global;
  var previousIs = root.is;

  // define 'is' object and current version
  is = {};
  is.VERSION = '0.7.4';

  // define interfaces
  is.not = {};
  is.all = {};
  is.any = {};

  // Define some helper function
  var toString = Object.prototype.toString;
  var arraySlice = Array.prototype.slice;
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  /**
   * Helper function to check a value is array
   * @type {boolean}
   */
  var isArray = Array.isArray || function(value) {    // check native isArray first
      return toString.call(value) === '[object Array]';
    };

  /**
   * Helper function to check a value is function
   * @type {boolean}
   */
  function isFunction(value) {    // fallback check is for IE
    return toString.call(value) === '[object Function]' || typeof value === 'function';
  }

  /**
   * Helper function which reverses the sense of predicate result
   * @param func
   * @returns {Function}
   */
  function not(func) {
    return function() {
      return !func.apply(null, arraySlice.call(arguments));
    };
  }

  /**
   * helper function which call predicate function per parameter and return true if all pass
   * @param func
   * @returns {Function}
   */
  function all(func) {
    return not(any(not(func)));
  }

  /**
   * helper function which call predicate function per parameter and return true if any pass
   * @param func
   * @returns {Function}
   */
  function any(func) {
    return function() {
      var parameters = arraySlice.call(arguments);
      var length = parameters.length;
      if(length === 1 && isArray(parameters[0])) {    // support array
        parameters = parameters[0];
        length = parameters.length;
      }
      for (var i = 0; i < length; i++) {
        if (func.call(null, parameters[i])) {
          return true;
        }
      }
      return false;
    };
  }


  /** Regexp checks will stored here */
  var regexps = {};

  /**
   * Add an regular expression check to this library
   * @param regexp
   * @param regexps
   */
  function addRegexpCheck(regexp, regexps) {
    is[regexp] = function(value) {
      return regexps[regexp].test(value);
    };
  }


  // Configuration methods
  /* -------------------------------------------------------------------------- */
  /**
   * Set(Override) regular expressions as prediction
   * @param regexpName
   * @param regexp
   */
  is.setRegexp = function(regexpName, regexp) {
    var isExist = false;
    for(var r in regexps) {
      if(hasOwnProperty.call(regexps, r) && (regexpName === r)) {
        regexps[r] = regexp;
        isExist = true;
      }
    }

    // Add new regexp
    if (!isExist) {
      regexps[regexpName] = regexp;
      addRegexpCheck(regexpName, regexps);
    }
  };
  is.setRegexp.api = [];

  /**
   * Change namespace of library to prevent name collisions
   * var preferredName = is.setNamespace();
   * preferredName.odd(3);
   * => true
   * @returns {is}
   */
  is.setNamespace = function() {
    root.is = previousIs;
    return this;
  };
  is.setNamespace.api = [];

  /**
   * Reset Interfaces after configuration.
   * Set 'not', 'all' and 'any' interfaces to methods based on their api property
   */
  is.update = function() {
    var options = is;
    for(var option in options) {
      if(hasOwnProperty.call(options, option) && isFunction(options[option])) {
        var interfaces = options[option].api || ['not', 'all', 'any'];
        for (var i = 0; i < interfaces.length; i++) {
          if(interfaces[i] === 'not') {
            is.not[option] = not(is[option]);
          }
          if(interfaces[i] === 'all') {
            is.all[option] = all(is[option]);
          }
          if(interfaces[i] === 'any') {
            is.any[option] = any(is[option]);
          }
        }
      }
    }
  };
  is.update.api = [];

  return is;
}));
