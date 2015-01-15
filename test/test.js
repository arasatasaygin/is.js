var expect = chai.expect;
 
describe("type checks", function() {
    describe("is.arguments", function() {
        it("should return true if passed parameter type is arguments", function() {
            var getArguments = function() {
                return arguments;
            };
            var arguments = getArguments('test');
            expect(is.arguments(arguments)).to.be.true;
        });
        it("should return false if passed parameter type is not arguments", function() {
            var notArguments = ['test'];
            expect(is.arguments(notArguments)).to.be.false;
        });
    });
    describe("is.not.arguments", function() {
        it("should return false if passed parameter type is arguments", function() {
            var getArguments = function() {
                return arguments;
            };
            var arguments = getArguments('test');
            expect(is.not.arguments(arguments)).to.be.false;
        });
        it("should return true if passed parameter type is not arguments", function() {
            var notArguments = ['test'];
            expect(is.not.arguments(notArguments)).to.be.true;
        });
    });
    describe("is.all.arguments", function() {
        it("should return true if all passed parameter types are arguments", function() {
            var getArguments = function() {
                return arguments;
            };
            var arguments = getArguments('test');
            expect(is.all.arguments(arguments, arguments)).to.be.true;
            expect(is.all.arguments([arguments, arguments])).to.be.true;
        });
        it("should return false if any passed parameter type is not arguments", function() {
            var notArguments = ['test'];
            var getArguments = function() {
                return arguments;
            };
            var arguments = getArguments('test');
            expect(is.all.arguments(arguments, notArguments)).to.be.false;
            expect(is.all.arguments([arguments, notArguments])).to.be.false;
        });
    });
    describe("is.any.arguments", function() {
        it("should return true if any passed parameter type is arguments", function() {
            var getArguments = function() {
                return arguments;
            };
            var arguments = getArguments('test');
            expect(is.any.arguments('test', arguments)).to.be.true;
            expect(is.any.arguments(['test', arguments])).to.be.true;
        });
        it("should return false if all passed parameter types are not arguments", function() {
            expect(is.any.arguments('test', null)).to.be.false;
            expect(is.any.arguments(['test', null])).to.be.false;
        });
    });
    describe("is.array", function() {
        it("should return true if passed parameter type is array", function() {
            var array = ['test'];
            expect(is.array(array)).to.be.true;
        });
        it("should return false if passed parameter type is not array", function() {
            var notArray = 'test';
            expect(is.array(notArray)).to.be.false;
        });
    });
    describe("is.not.array", function() {
        it("should return false if passed parameter type is array", function() {
            var array = ['test'];
            expect(is.not.array(array)).to.be.false;
        });
        it("should return true if passed parameter type is not array", function() {
            var notArray = 'test';
            expect(is.not.array(notArray)).to.be.true;
        });
    });
    describe("is.all.array", function() {
        it("should return true if all passed parameters types are array", function() {
            var array = ['test'];
            var array2 = ['test2'];
            expect(is.all.array(array, array2)).to.be.true;
            expect(is.all.array([array, array2])).to.be.true;
        });
        it("should return false if any passed parameter type is not array", function() {
            var notArray = 'test';
            var array = ['test'];
            expect(is.all.array(notArray, array)).to.be.false;
            expect(is.all.array([notArray, array])).to.be.false;
        });
    });
    describe("is.any.array", function() {
        it("should return true if any passed parameter type is array", function() {
            var array = ['test'];
            var array2 = ['test2'];
            expect(is.any.array(array, array2, 'test')).to.be.true;
            expect(is.any.array([array, array2, 'test'])).to.be.true;
        });
        it("should return false if all passed parameter types are not array", function() {
            expect(is.any.array('test', 'test2')).to.be.false;
            expect(is.any.array(['test', 'test2'])).to.be.false;
        });
    });
    describe("is.boolean", function() {
        it("should return true if passed parameter type is boolean", function() {
            var bool = true;
            expect(is.boolean(bool)).to.be.true;
        });
        it("should return false if passed parameter type is not boolean", function() {
            var notBool = 'test';
            expect(is.boolean(notBool)).to.be.false;
        });
    });
    describe("is.not.boolean", function() {
        it("should return true if passed parameter type is not boolean", function() {
            var notBool = 'test';
            expect(is.not.boolean(notBool)).to.be.true;
        });
        it("should return false if passed parameter type is boolean", function() {
            var bool = true;
            expect(is.not.boolean(bool)).to.be.false;
        });
    });
    describe("is.all.boolean", function() {
        it("should return true if all passed parameter types are boolean", function() {
            var bool1 = true;
            var bool2 = false;
            expect(is.all.boolean(bool1, bool2)).to.be.true;
            expect(is.all.boolean([bool1, bool2])).to.be.true;
        });
        it("should return false if passed parameter type is boolean", function() {
            var bool = true;
            var notBool = 'test';
            expect(is.all.boolean(bool, notBool)).to.be.false;
            expect(is.all.boolean([bool, notBool])).to.be.false;
        });
    });
    describe("is.any.boolean", function() {
        it("should return true if any passed parameter type is boolean", function() {
            var bool1 = true;
            var bool2 = false;
            expect(is.any.boolean(bool1, bool2, ['test'])).to.be.true;
            expect(is.any.boolean([bool1, bool2, ['test']])).to.be.true;
        });
        it("should return false if all passed parameter types are not boolean", function() {
            expect(is.any.boolean('test', {}, null)).to.be.false;
            expect(is.any.boolean(['test', {}, null])).to.be.false;
        });
    });
    describe("is.date", function() {
        it("should return true if passed parameter type is date", function() {
            var date = new Date();
            expect(is.date(date)).to.be.true;
        });
        it("should return false if passed parameter type is not date", function() {
            var notDate = 'test';
            expect(is.date(notDate)).to.be.false;
        });
    });
    describe("is.not.date", function() {
        it("should return false if passed parameter type is date", function() {
            var date = new Date();
            expect(is.not.date(date)).to.be.false;
        });
        it("should return true if passed parameter type is not date", function() {
            var notDate = 'test';
            expect(is.not.date(notDate)).to.be.true;
        });
    });
    describe("is.all.date", function() {
        it("should return true if all passed parameter types are date", function() {
            var myBirthDay = new Date('06-28-1986');
            var date = new Date();
            expect(is.all.date(myBirthDay, date)).to.be.true;
            expect(is.all.date([myBirthDay, date])).to.be.true;
        });
        it("should return false if any passed parameter type is not date", function() {
            var date = new Date();
            var notDate = 'test';
            expect(is.all.date(date, notDate)).to.be.false;
            expect(is.all.date([date, notDate])).to.be.false;
        });
    });
    describe("is.any.date", function() {
        it("should return true if any passed parameter type is date", function() {
            var date = new Date();
            expect(is.any.date('test', date)).to.be.true;
            expect(is.any.date(['test', date])).to.be.true;
        });
        it("should return false if all passed parameter types are not date", function() {
            expect(is.any.date('test', 1, undefined)).to.be.false;
            expect(is.any.date(['test', 1, undefined])).to.be.false;
        });
    });
    describe("is.error", function() {
        it("should return true if passed parameter type is error", function() {
            var error = new Error();
            expect(is.error(error)).to.be.true;
        });
        it("should return false if passed parameter type is not error", function() {
            var notError = 'test';
            expect(is.error(notError)).to.be.false;
        });
    });
    describe("is.not.error", function() {
        it("should return false if passed parameter type is error", function() {
            var error = new Error();
            expect(is.not.error(error)).to.be.false;
        });
        it("should return true if passed parameter type is not error", function() {
            var notError = 'test';
            expect(is.not.error(notError)).to.be.true;
        });
    });
    describe("is.all.error", function() {
        it("should return true if all passed parameter types are error", function() {
            var error1 = new Error();
            var error2 = new Error();
            expect(is.all.error(error1, error2)).to.be.true;
            expect(is.all.error([error1, error2])).to.be.true;
        });
        it("should return false if any passed parameter type is not error", function() {
            var error = new Error();
            var notError = 'test';
            expect(is.all.error(error, notError)).to.be.false;
            expect(is.all.error([error, notError])).to.be.false;
        });
    });
    describe("is.any.error", function() {
        it("should return true if any passed parameter type is error", function() {
            var error1 = new Error();
            expect(is.any.error(error1, new Date())).to.be.true;
            expect(is.any.error([error1, new Date()])).to.be.true;
        });
        it("should return false if all passed parameter types are not error", function() {
            expect(is.any.error(1, 2, 3)).to.be.false;
            expect(is.any.error([1, 2, 3])).to.be.false;
        });
    });
    describe("is.function", function() {
        it("should return true if passed parameter type is function", function() {
            expect(is.function(is.function)).to.be.true;
        });
        it("should return false if passed parameter type is not function", function() {
            var notFunction = 'test';
            expect(is.function(notFunction)).to.be.false;
        });
    });
    describe("is.not.function", function() {
        it("should return false if passed parameter type is function", function() {
            var notFunction = 'test';
            expect(is.function(notFunction)).to.be.false;
        });
        it("should return true if passed parameter type is not function", function() {
            expect(is.not.function(is.function)).to.be.false;
        });
    });
    describe("is.all.function", function() {
        it("should return true if all passed parameter types are function", function() {
            expect(is.all.function(is.function, is.string)).to.be.true;
            expect(is.all.function([is.function, is.string])).to.be.true;
        });
        it("should return false if any passed parameter type is not function", function() {
            var notFunction = 'test';
            expect(is.all.function(is.function, notFunction)).to.be.false;
            expect(is.all.function([is.function, notFunction])).to.be.false;
        });
    });
    describe("is.any.function", function() {
        it("should return true if any passed parameter type is function", function() {
            expect(is.any.function(is.function, [])).to.be.true;
            expect(is.any.function([is.function, []])).to.be.true;
        });
        it("should return false if all passed parameter types are not function", function() {
            expect(is.any.function(2, 'test')).to.be.false;
            expect(is.any.function([2, 'test'])).to.be.false;
        });
    });
    describe("is.nan", function() {
        it("should return true if passed parameter type is NaN", function() {
            expect(is.nan(NaN)).to.be.true;
        });
        it("should return false if passed parameter type is not NaN", function() {
            var notNaN = 'test';
            expect(is.nan(notNaN)).to.be.false;
        });
    });
    describe("is.not.nan", function() {
        it("should return false if passed parameter type is NaN", function() {
            var notNaN = 'test';
            expect(is.not.nan(notNaN)).to.be.true;
        });
        it("should return false if passed parameter type is not NaN", function() {
            expect(is.not.nan(NaN)).to.be.false;
        });
    });
    describe("is.all.nan", function() {
        it("should return true if all passed parameter types are NaN", function() {
            expect(is.all.nan(NaN, NaN)).to.be.true;
            expect(is.all.nan([NaN, NaN])).to.be.true;
        });
        it("should return false if any passed parameter type is not NaN", function() {
            var notNaN = 'test';
            expect(is.all.nan(NaN, notNaN)).to.be.false;
            expect(is.all.nan([NaN, notNaN])).to.be.false;
        });
    });
    describe("is.any.nan", function() {
        it("should return true if any passed parameter type is NaN", function() {
            expect(is.any.nan(NaN, NaN, 'test')).to.be.true;
            expect(is.any.nan([NaN, NaN, 'test'])).to.be.true;
        });
        it("should return false if all passed parameter types are not NaN", function() {
            expect(is.any.nan('test', new RegExp())).to.be.false;
            expect(is.any.nan(['test', new RegExp()])).to.be.false;
        });
    });
    describe("is.null", function() {
        it("should return true if passed parameter type is null", function() {
            expect(is.null(null)).to.be.true;
        });
        it("should return false if passed parameter type is not null", function() {
            var notNull = 'test';
            expect(is.null(notNull)).to.be.false;
        });
    });
    describe("is.not.null", function() {
        it("should return false if passed parameter type is null", function() {
            expect(is.not.null(null)).to.be.false;
        });
        it("should return true if passed parameter type is not null", function() {
            var notNull = 'test';
            expect(is.not.null(notNull)).to.be.true;
        });
    });
    describe("is.all.null", function() {
        it("should return true if all passed parameter types are null", function() {
            expect(is.all.null(null, null)).to.be.true;
            expect(is.all.null([null, null])).to.be.true;
        });
        it("should return false if any passed parameter type is not null", function() {
            var notNull = 'test';
            expect(is.all.null(null, notNull)).to.be.false;
            expect(is.all.null([null, notNull])).to.be.false;
        });
    });
    describe("is.any.null", function() {
        it("should return true if any passed parameter type is null", function() {
            expect(is.any.null(null, null, undefined)).to.be.true;
            expect(is.any.null([null, null, undefined])).to.be.true;
        });
        it("should return false if all passed parameter types are not null", function() {
            expect(is.any.null(1, 2)).to.be.false;
            expect(is.any.null([1, 2])).to.be.false;
        });
    });
    describe("is.number", function() {
        it("should return true if passed parameter type is number", function() {
            expect(is.number(1)).to.be.true;
        });
        it("should return false if passed parameter type is not number", function() {
            var notNumber = 'test';
            expect(is.number(notNumber)).to.be.false;
        });
    });
    describe("is.not.number", function() {
        it("should return false if passed parameter type is number", function() {
            expect(is.not.number(1)).to.be.false;
        });
        it("should return true if passed parameter type is not number", function() {
            var notNumber = 'test';
            expect(is.not.number(notNumber)).to.be.true;
        });
    });
    describe("is.all.number", function() {
        it("should return true if all passed parameter types are number", function() {
            expect(is.all.number(1, 2)).to.be.true;
            expect(is.all.number([1, 2])).to.be.true;
        });
        it("should return false if any passed parameter type is not number", function() {
            var notNumber = 'test';
            expect(is.all.number(1, notNumber)).to.be.false;
            expect(is.all.number([1, notNumber])).to.be.false;
        });
    });
    describe("is.any.number", function() {
        it("should return true if any passed parameter type is number", function() {
            expect(is.any.number(1, 2, NaN)).to.be.true;
            expect(is.any.number([1, 2, NaN])).to.be.true;
        });
        it("should return false if all passed parameter types are not number", function() {
            expect(is.any.number(null, 'test')).to.be.false;
            expect(is.any.number([null, 'test'])).to.be.false;
        });
    });
    describe("is.object", function() {
        it("should return true if passed parameter type is object", function() {
            expect(is.object({})).to.be.true;
        });
        it("should return false if passed parameter type is not object", function() {
            var notObject = 'test';
            expect(is.object(notObject)).to.be.false;
        });
    });
    describe("is.not.object", function() {
        it("should return false if passed parameter type is object", function() {
            expect(is.not.object({})).to.be.false;
        });
        it("should return true if passed parameter type is not object", function() {
            var notObject = 'test';
            expect(is.not.object(notObject)).to.be.true;
        });
    });
    describe("is.all.object", function() {
        it("should return true if all passed parameter types are object", function() {
            expect(is.all.object({}, {})).to.be.true;
            expect(is.all.object([{}, {}])).to.be.true;
        });
        it("should return false if any passed parameter type is not object", function() {
            var notObject = 'test';
            expect(is.all.object({}, notObject)).to.be.false;
            expect(is.all.object([{}, notObject])).to.be.false;
        });
    });
    describe("is.any.object", function() {
        it("should return true if any passed parameter type is object", function() {
            expect(is.any.object({}, {}, 'test')).to.be.true;
            expect(is.any.object([{}, {}, 'test'])).to.be.true;
        });
        it("should return false if all passed parameter types are not object", function() {
            expect(is.any.object(1, 2, 3)).to.be.false;
            expect(is.any.object([1, 2, 3])).to.be.false;
        });
    });
    describe("is.regexp", function() {
        it("should return true if passed parameter type is regexp", function() {
            var regexp = new RegExp();
            expect(is.regexp(regexp)).to.be.true;
        });
        it("should return false if passed parameter type is not regexp", function() {
            var notRegexp = 'test';
            expect(is.regexp(notRegexp)).to.be.false;
        });
    });
    describe("is.not.regexp", function() {
        it("should return false if passed parameter type is regexp", function() {
            var regexp = new RegExp();
            expect(is.not.regexp(regexp)).to.be.false;
        });
        it("should return true if passed parameter type is not regexp", function() {
            var notRegexp = 'test';
            expect(is.not.regexp(notRegexp)).to.be.true;
        });
    });
    describe("is.all.regexp", function() {
        it("should return true if all passed parameter types are regexp", function() {
            var regexp = new RegExp();
            expect(is.all.regexp(regexp, /test/)).to.be.true;
            expect(is.all.regexp([regexp, /test/])).to.be.true;
        });
        it("should return false if any passed parameter type is not regexp", function() {
            var notRegexp = 'test';
            var regexp = new RegExp();
            expect(is.all.regexp(regexp, notRegexp)).to.be.false;
            expect(is.all.regexp([regexp, notRegexp])).to.be.false;
        });
    });
    describe("is.any.regexp", function() {
        it("should return true if any passed parameter type is regexp", function() {
            var regexp = new RegExp();
            expect(is.any.regexp(regexp, /test/, 1)).to.be.true;
            expect(is.any.regexp([regexp, /test/, 1])).to.be.true;
        });
        it("should return false if any passed parameter type is not regexp", function() {
            expect(is.any.regexp(1, 2)).to.be.false;
            expect(is.any.regexp([1, 2])).to.be.false;
        });
    });
    describe("is.sameType", function() {
        it("should return true if passed parameter types are same", function() {
            expect(is.sameType(1, 2)).to.be.true;
            expect(is.sameType('test', 'test')).to.be.true;
        });
        it("should return false if passed parameter types are not same", function() {
            expect(is.sameType(1, 'test')).to.be.false;
        });
    });
    describe("is.not.sameType", function() {
        it("should return false if passed parameter types are same", function() {
            expect(is.not.sameType(1, 2)).to.be.false;
            expect(is.not.sameType('test', 'test')).to.be.false;
        });
        it("should return true if passed parameter types are not same", function() {
            expect(is.not.sameType(1, 'test')).to.be.true;
        });
    });
    describe("is.string", function() {
        it("should return true if passed parameter type is string", function() {
            expect(is.string('test')).to.be.true;
        });
        it("should return false if passed parameter type is not string", function() {
            expect(is.string(1)).to.be.false;
        });
    });
    describe("is.not.string", function() {
        it("should return false if passed parameter type is string", function() {
            expect(is.not.string('test')).to.be.false;
        });
        it("should return true if passed parameter type is not string", function() {
            expect(is.not.string(1)).to.be.true;
        });
    });
    describe("is.all.string", function() {
        it("should return true if all passed parameter types are string", function() {
            expect(is.all.string('test', 'test')).to.be.true;
            expect(is.all.string(['test', 'test'])).to.be.true;
        });
        it("should return false if any passed parameter type is not string", function() {
            expect(is.all.string('test', 1)).to.be.false;
            expect(is.all.string(['test', 1])).to.be.false;
        });
    });
    describe("is.any.string", function() {
        it("should return true if any passed parameter type is string", function() {
            expect(is.any.string('test', 1)).to.be.true;
            expect(is.any.string(['test', 1])).to.be.true;
        });
        it("should return false if all passed parameter types are not string", function() {
            expect(is.any.string(null, 1)).to.be.false;
            expect(is.any.string([null, 1])).to.be.false;
        });
    });
    describe("is.undefined", function() {
        it("should return true if passed parameter type is undefined", function() {
            expect(is.undefined(undefined)).to.be.true;
        });
        it("should return false if passed parameter type is not undefined", function() {
            expect(is.undefined(null)).to.be.false;
            expect(is.undefined('test')).to.be.false;
        });
    });
    describe("is.not.undefined", function() {
        it("should return false if passed parameter type is undefined", function() {
            expect(is.not.undefined(undefined)).to.be.false;
        });
        it("should return false if passed parameter type is not undefined", function() {
            expect(is.not.undefined('test')).to.be.true;
        });
    });
    describe("is.all.undefined", function() {
        it("should return true if all passed parameter types are undefined", function() {
            expect(is.all.undefined(undefined, undefined)).to.be.true;
            expect(is.all.undefined([undefined, undefined])).to.be.true;
        });
        it("should return false if any passed parameter type is not undefined", function() {
            expect(is.all.undefined(undefined, null)).to.be.false;
            expect(is.all.undefined([undefined, null])).to.be.false;
        });
    });
    describe("is.any.undefined", function() {
        it("should return true if any passed parameter type is undefined", function() {
            expect(is.any.undefined('test', undefined)).to.be.true;
            expect(is.any.undefined(['test', undefined])).to.be.true;
        });
        it("should return false if any passed parameter type is not undefined", function() {
            expect(is.any.undefined(2, null)).to.be.false;
            expect(is.any.undefined([2, null])).to.be.false;
        });
    });
});
describe("presence checks", function() {
    describe("is.empty", function() {
        it("should return true if given array is empty", function() {
            expect(is.empty([])).to.be.true;
        });
        it("should return false if given object is not empty", function() {
            expect(is.empty({test: 'test'})).to.be.false;
        });
    });
    describe("is.not.empty", function() {
        it("should return false if given strinf is empty", function() {
            expect(is.not.empty('')).to.be.false;
        });
        it("should return true if given array is not empty", function() {
            expect(is.not.empty(['test'])).to.be.true;
        });
    });
    describe("is.all.empty", function() {
        it("should return true if given array, object and srting are empty", function() {
            expect(is.all.empty([], '', {})).to.be.true;
            expect(is.all.empty([[], '', {}])).to.be.true;
        });
        it("should return false if any given element is not empty", function() {
            expect(is.all.empty(['test'], {}, '')).to.be.false;
            expect(is.all.empty([['test'], {}, ''])).to.be.false;
        });
    });
    describe("is.existy", function() {
        it("should return false if given value is null", function() {
            expect(is.existy(null)).to.be.false;
        });
        it("should return false if given value is undefined", function() {
            expect(is.existy(undefined)).to.be.false;
        });
        it("should return true if given value is not null or undefined", function() {
            expect(is.existy('test')).to.be.true;
        });
    });
    describe("is.not.existy", function() {
        it("should return true if given value is null", function() {
            expect(is.not.existy(null)).to.be.true;
        });
        it("should return true if given value is undefined", function() {
            expect(is.not.existy(undefined)).to.be.true;
        });
        it("should return false if given value is not null or undefined", function() {
            expect(is.not.existy('test')).to.be.false;
        });
    });
    describe("is.all.existy", function() {
        it("should return true if all given values are existy", function() {
            expect(is.all.existy([], {}, 'test', true)).to.be.true;
            expect(is.all.existy([[], {}, 'test', true])).to.be.true;
        });
        it("should return false if given any value is not existy", function() {
            expect(is.all.existy([], {}, 'test', true, undefined)).to.be.false;
            expect(is.all.existy([[], {}, 'test', true, undefined])).to.be.false;
        });
    });
    describe("is.truthy", function() {
        it("should return true if given value is existy and not false", function() {
            expect(is.truthy('test')).to.be.true;
        });
        it("should return false if given value is not existy", function() {
            expect(is.truthy(undefined)).to.be.false;
        });
        it("should return false if given value is false", function() {
            expect(is.truthy(false)).to.be.false;
        });
    });
    describe("is.not.truthy", function() {
        it("should return false if given value is existy and not false", function() {
            expect(is.not.truthy(true)).to.be.false;
        });
        it("should return true if given value is not existy", function() {
            expect(is.not.truthy(undefined)).to.be.true;
        });
        it("should return true if given value is false", function() {
            expect(is.not.truthy(false)).to.be.true;
        });
    });
    describe("is.all.truthy", function() {
        it("should return true if all given values are existy and not false", function() {
            expect(is.all.truthy('test', [], true)).to.be.true;
            expect(is.all.truthy(['test', [], true])).to.be.true;
        });
        it("should return false if any given value is not existy or false", function() {
            expect(is.all.truthy('test', undefined)).to.be.false;
            expect(is.all.truthy(['test', undefined])).to.be.false;
        });
    });
    describe("is.falsy", function() {
        it("should return false if given value is existy and not false", function() {
            expect(is.falsy('test')).to.be.false;
        });
        it("should return true if given value is not existy", function() {
            expect(is.falsy(undefined)).to.be.true;
        });
        it("should return true if given value is false", function() {
            expect(is.falsy(false)).to.be.true;
        });
    });
    describe("is.not.falsy", function() {
        it("should return true if given value is existy and not false", function() {
            expect(is.not.falsy(true)).to.be.true;
        });
        it("should return false if given value is not existy", function() {
            expect(is.not.falsy(undefined)).to.be.false;
        });
        it("should return false if given value is false", function() {
            expect(is.not.falsy(false)).to.be.false;
        });
    });
    describe("is.all.falsy", function() {
        it("should return true if all given values are falsy", function() {
            expect(is.all.falsy(undefined, false)).to.be.true;
            expect(is.all.falsy([undefined, false])).to.be.true;
        });
        it("should return false if any given value is not falsy", function() {
            expect(is.all.falsy(undefined, 'test')).to.be.false;
            expect(is.all.falsy([undefined, 'test'])).to.be.false;
        });
    });
    describe("is.space", function() {
        it("should return false if given value is not string", function() {
            expect(is.space(1)).to.be.false;
        });
        it("should return true if given value is space", function() {
            expect(is.space(' ')).to.be.true;
        });
    });
    describe("is.not.space", function() {
        it("should return true if given value is not string", function() {
            expect(is.not.space(null)).to.be.true;
        });
        it("should return false if given value is space", function() {
            expect(is.not.space(' ')).to.be.false;
        });
    });
    describe("is.all.space", function() {
        it("should return false if all given values are not space", function() {
            expect(is.all.space(' ', 'a')).to.be.false;
            expect(is.all.space([' ', 'a'])).to.be.false;
        });
        it("should return true if given values are space", function() {
            expect(is.all.space(' ', ' ')).to.be.true;
            expect(is.all.space([' ', ' '])).to.be.true;
        });
    });
});
describe("arithmetic checks", function() {
    describe("is.equal", function() {
        it("should return true if given two numbers are equal", function() {
            expect(is.equal(3, 1 + 2)).to.be.true;
        });
        it("should return false if given two numbers are not equal", function() {
            expect(is.equal(3, 2)).to.be.false;
        });
        it("should return true if given two strings are same", function() {
            expect(is.equal('test', 'test')).to.be.true;
        });
        it("should return false if given two strings are not same", function() {
            expect(is.equal('test', 'test2')).to.be.false;
        });
        it("should return true if given two boolean are same", function() {
            expect(is.equal(false, false)).to.be.true;
        });
        it("should return false if given two boolean are not same", function() {
            expect(is.equal(false, true)).to.be.false;
        });
    });
    describe("is.not.equal", function() {
        it("should return false if given two numbers are equal", function() {
            expect(is.not.equal(3, 1 + 2)).to.be.false;
        });
        it("should return true if given two numbers are not equal", function() {
            expect(is.not.equal(3, 2)).to.be.true;
        });
        it("should return false if given two strings are same", function() {
            expect(is.not.equal('test', 'test')).to.be.false;
        });
        it("should return true if given two strings are not same", function() {
            expect(is.not.equal('test', 'test2')).to.be.true;
        });
        it("should return false if given two boolean are same", function() {
            expect(is.not.equal(false, false)).to.be.false;
        });
        it("should return true if given two boolean are not same", function() {
            expect(is.not.equal(false, true)).to.be.true;
        });
    });
    describe("is.even", function() {
        it("should return true if given number is even", function() {
            expect(is.even(2)).to.be.true;
        });
        it("should return false if given number is not even", function() {
            expect(is.even(3)).to.be.false;
        });
    });
    describe("is.not.even", function() {
        it("should return false if given number is even", function() {
            expect(is.not.even(2)).to.be.false;
        });
        it("should return true if given number is not even", function() {
            expect(is.not.even(3)).to.be.true;
        });
    });
    describe("is.all.even", function() {
        it("should return true if all given numbers are even", function() {
            expect(is.all.even(2, 4, 6)).to.be.true;
            expect(is.all.even([2, 4, 6])).to.be.true;
        });
        it("should return false if any given number is not even", function() {
            expect(is.all.even(2, 4, 5)).to.be.false;
            expect(is.all.even([2, 4, 5])).to.be.false;
        });
    });
    describe("is.any.even", function() {
        it("should return true if any given number is even", function() {
            expect(is.any.even(2, 3, 5)).to.be.true;
            expect(is.any.even([2, 3, 5])).to.be.true;
        });
        it("should return false if all given numbers are not even", function() {
            expect(is.any.even(1, 3, 5)).to.be.false;
            expect(is.any.even([1, 3, 5])).to.be.false;
        });
    });
    describe("is.odd", function() {
        it("should return true if given number is odd", function() {
            expect(is.odd(3)).to.be.true;
        });
        it("should return false if given number is not odd", function() {
            expect(is.odd(2)).to.be.false;
        });
    });
    describe("is.not.odd", function() {
        it("should return false if given number is odd", function() {
            expect(is.not.odd(3)).to.be.false;
        });
        it("should return true if given number is not odd", function() {
            expect(is.not.odd(2)).to.be.true;
        });
    });
    describe("is.all.odd", function() {
        it("should return true if all given numbers are odd", function() {
            expect(is.all.odd(1, 3, 5)).to.be.true;
            expect(is.all.odd([1, 3, 5])).to.be.true;
        });
        it("should return false if any given number is not odd", function() {
            expect(is.all.odd(1, 3, 4)).to.be.false;
            expect(is.all.odd([1, 3, 4])).to.be.false;
        });
    });
    describe("is.any.odd", function() {
        it("should return true if any given number is odd", function() {
            expect(is.any.odd(2, 4, 5)).to.be.true;
            expect(is.any.odd([2, 4, 5])).to.be.true;
        });
        it("should return false if all given numbers are not odd", function() {
            expect(is.any.odd(2, 4, 6)).to.be.false;
            expect(is.any.odd([2, 4, 6])).to.be.false;
        });
    });
    describe("is.positive", function() {
        it("should return true if given number is positive", function() {
            expect(is.positive(3)).to.be.true;
        });
        it("should return false if given number is not positive", function() {
            expect(is.positive(-2)).to.be.false;
        });
    });
    describe("is.not.positive", function() {
        it("should return false if given number is positive", function() {
            expect(is.not.positive(3)).to.be.false;
        });
        it("should return true if given number is not positive", function() {
            expect(is.not.positive(-2)).to.be.true;
        });
    });
    describe("is.all.positive", function() {
        it("should return true if all given numbers are positive", function() {
            expect(is.all.positive(1, 3, 5)).to.be.true;
            expect(is.all.positive([1, 3, 5])).to.be.true;
        });
        it("should return false if any given number is not positive", function() {
            expect(is.all.positive(1, 3, -4)).to.be.false;
            expect(is.all.positive([1, 3, -4])).to.be.false;
        });
    });
    describe("is.any.positive", function() {
        it("should return true if any given number is positive", function() {
            expect(is.any.positive(2, -4, -5)).to.be.true;
            expect(is.any.positive([2, -4, -5])).to.be.true;
        });
        it("should return false if all given numbers are not positive", function() {
            expect(is.any.positive(-2, -4, -6)).to.be.false;
            expect(is.any.positive([-2, -4, -6])).to.be.false;
        });
    });
    describe("is.negative", function() {
        it("should return true if given number is negative", function() {
            expect(is.negative(-3)).to.be.true;
        });
        it("should return false if given number is not negative", function() {
            expect(is.negative(2)).to.be.false;
        });
    });
    describe("is.not.negative", function() {
        it("should return false if given number is negative", function() {
            expect(is.not.negative(-3)).to.be.false;
        });
        it("should return true if given number is not negative", function() {
            expect(is.not.negative(2)).to.be.true;
        });
    });
    describe("is.all.negative", function() {
        it("should return true if all given numbers are negative", function() {
            expect(is.all.negative(-1, -3, -5)).to.be.true;
            expect(is.all.negative([-1, -3, -5])).to.be.true;
        });
        it("should return false if any given number is not negative", function() {
            expect(is.all.negative(1, -3, -4)).to.be.false;
            expect(is.all.negative([1, -3, -4])).to.be.false;
        });
    });
    describe("is.any.negative", function() {
        it("should return true if any given number is negative", function() {
            expect(is.any.negative(2, 4, -5)).to.be.true;
            expect(is.any.negative([2, 4, -5])).to.be.true;
        });
        it("should return false if all given numbers are not negative", function() {
            expect(is.any.negative(2, 4, 6)).to.be.false;
            expect(is.any.negative([2, 4, 6])).to.be.false;
        });
    });
    describe("is.above", function() {
        it("should return true if given number is above minimum value", function() {
            expect(is.above(13, 12)).to.be.true;
        });
        it("should return false if given number is not above minimum value", function() {
            expect(is.above(12, 13)).to.be.false;
        });
    });
    describe("is.not.above", function() {
        it("should return false if given number is above minimum value", function() {
            expect(is.not.above(13, 12)).to.be.false;
        });
        it("should return true if given number is not above minimum value", function() {
            expect(is.not.above(12, 13)).to.be.true;
        });
    });
    describe("is.under", function() {
        it("should return true if given number is under maximum value", function() {
            expect(is.under(11, 12)).to.be.true;
        });
        it("should return false if given number is not under maximum value", function() {
            expect(is.under(12, 11)).to.be.false;
        });
    });
    describe("is.not.under", function() {
        it("should return true if given number is under maximum value", function() {
            expect(is.not.under(13, 12)).to.be.true;
        });
        it("should return false if given number is not under maximum value", function() {
            expect(is.not.under(12, 13)).to.be.false;
        });
    });
    describe("is.within", function() {
        it("should return true if given number is within minimum and maximum values", function() {
            expect(is.within(10, 5, 15)).to.be.true;
        });
        it("should return false if given number is not within minimum and maximum values", function() {
            expect(is.within(20, 5, 15)).to.be.false;
        });
    });
    describe("is.not.within", function() {
        it("should return false if given number is within minimum and maximum values", function() {
            expect(is.not.within(10, 5, 15)).to.be.false;
        });
        it("should return true if given number is not within minimum and maximum values", function() {
            expect(is.not.within(20, 5, 15)).to.be.true;
        });
    });
    describe("is.decimal", function() {
        it("should return true if given number is decimal", function() {
            expect(is.decimal(4.2)).to.be.true;
        });
        it("should return false if given number is not decimal", function() {
            expect(is.decimal(2)).to.be.false;
        });
    });
    describe("is.not.decimal", function() {
        it("should return false if given number is decimal", function() {
            expect(is.not.decimal(4.2)).to.be.false;
        });
        it("should return true if given number is not decimal", function() {
            expect(is.not.decimal(2)).to.be.true;
        });
    });
    describe("is.all.decimal", function() {
        it("should return true if all given numbers are decimal", function() {
            expect(is.all.decimal(1.2, 3.4, 5.6)).to.be.true;
            expect(is.all.decimal([1.2, 3.4, 5.6])).to.be.true;
        });
        it("should return false if any given number is not decimal", function() {
            expect(is.all.decimal(1.2, 3.4, 5)).to.be.false;
            expect(is.all.decimal([1.2, 3.4, 5])).to.be.false;
        });
    });
    describe("is.any.decimal", function() {
        it("should return true if any given number is decimal", function() {
            expect(is.any.decimal(1.2, 3, 5)).to.be.true;
            expect(is.any.decimal([1.2, 3, 5])).to.be.true;
        });
        it("should return false if all given numbers are not decimal", function() {
            expect(is.any.decimal(1, 3, 5)).to.be.false;
            expect(is.any.decimal([1, 3, 5])).to.be.false;
        });
    });
    describe("is.finite", function() {
        it("should return true if given number is finite", function() {
            expect(is.finite(4)).to.be.true;
        });
        it("should return false if given number is not finite", function() {
            expect(is.finite(Infinity)).to.be.false;
        });
    });
    describe("is.not.finite", function() {
        it("should return false if given number is finite", function() {
            expect(is.not.finite(4)).to.be.false;
        });
        it("should return true if given number is not finite", function() {
            expect(is.not.finite(Infinity)).to.be.true;
        });
    });
    describe("is.all.finite", function() {
        it("should return true if all given numbers are finite", function() {
            expect(is.all.finite(1, 2)).to.be.true;
            expect(is.all.finite([1, 2])).to.be.true;
        });
        it("should return false if any given number is not finite", function() {
            expect(is.all.finite(Infinity, -Infinity)).to.be.false;
            expect(is.all.finite([Infinity, -Infinity])).to.be.false;
        });
    });
    describe("is.any.finite", function() {
        it("should return true if any given number is finite", function() {
            expect(is.any.finite(Infinity, 1)).to.be.true;
            expect(is.any.finite([Infinity, 1])).to.be.true;
        });
        it("should return false if all given numbers are not finite", function() {
            expect(is.any.finite(Infinity, -Infinity)).to.be.false;
            expect(is.any.finite([Infinity, -Infinity])).to.be.false;
        });
    });
    describe("is.infinite", function() {
        it("should return true if given number is infinite", function() {
            expect(is.infinite(Infinity)).to.be.true;
        });
        it("should return false if given number is not infinite", function() {
            expect(is.infinite(1)).to.be.false;
        });
    });
    describe("is.not.infinite", function() {
        it("should return false if given number is infinite", function() {
            expect(is.not.infinite(Infinity)).to.be.false;
        });
        it("should return true if given number is not infinite", function() {
            expect(is.not.infinite(1)).to.be.true;
        });
    });
    describe("is.all.infinite", function() {
        it("should return true if all given numbers are infinite", function() {
            expect(is.all.infinite(Infinity, -Infinity)).to.be.true;
            expect(is.all.infinite([Infinity, -Infinity])).to.be.true;
        });
        it("should return false if any given number is not infinite", function() {
            expect(is.all.infinite(Infinity, 1)).to.be.false;
            expect(is.all.infinite([Infinity, 1])).to.be.false;
        });
    });
    describe("is.any.infinite", function() {
        it("should return true if any given number is infinite", function() {
            expect(is.any.infinite(Infinity, 1)).to.be.true;
            expect(is.any.infinite([Infinity, 1])).to.be.true;
        });
        it("should return false if all given numbers are not infinite", function() {
            expect(is.any.infinite(1, -2)).to.be.false;
            expect(is.any.infinite([1, -2])).to.be.false;
        });
    });
});
describe("regexp checks", function() {
    describe("is.url", function() {
        it("should return true if given value is url", function() {
            expect(is.url('http://www.test.com')).to.be.true;
        });
        it("should return false if given value is not url", function() {
            expect(is.url(1)).to.be.false;
        });
    });
    describe("is.not.url", function() {
        it("should return false if given value is url", function() {
            expect(is.not.url('http://www.test.com')).to.be.false;
        });
        it("should return true if given value is not url", function() {
            expect(is.not.url(1)).to.be.true;
        });
    });
    describe("is.all.url", function() {
        it("should return true if all given values are url", function() {
            expect(is.all.url('http://www.test.com', 'http://www.test2.com')).to.be.true;
            expect(is.all.url(['http://www.test.com', 'http://www.test2.com'])).to.be.true;
        });
        it("should return false if any given value is not url", function() {
            expect(is.all.url('http://www.test.com', 1)).to.be.false;
            expect(is.all.url(['http://www.test.com', 1])).to.be.false;
        });
    });
    describe("is.any.url", function() {
        it("should return true if any given value is url", function() {
            expect(is.any.url('http://www.test.com', 1)).to.be.true;
            expect(is.any.url(['http://www.test.com', 1])).to.be.true;
        });
        it("should return false if all given values are not url", function() {
            expect(is.any.url(1, 2)).to.be.false;
            expect(is.any.url([1, 2])).to.be.false;
        });
    });
    describe("is.email", function() {
        it("should return true if given value is email", function() {
            expect(is.email('test@test.com')).to.be.true;
        });
        it("should return false if given value is not email", function() {
            expect(is.email('test@test')).to.be.false;
        });
    });
    describe("is.not.email", function() {
        it("should return false if given value is email", function() {
            expect(is.not.email('test@test.com')).to.be.false;
        });
        it("should return true if given value is not email", function() {
            expect(is.not.email('test@test')).to.be.true;
        });
    });
    describe("is.all.email", function() {
        it("should return true if all given values are email", function() {
            expect(is.all.email('test@test.com', 'test@test2.com')).to.be.true;
            expect(is.all.email(['test@test.com', 'test@test2.com'])).to.be.true;
        });
        it("should return false if any given value is not email", function() {
            expect(is.all.email('test@test.com', 'test@test')).to.be.false;
            expect(is.all.email(['test@test.com', 'test@test'])).to.be.false;
        });
    });
    describe("is.any.email", function() {
        it("should return true if any given value is email", function() {
            expect(is.any.email('test@test.com', 'test@test')).to.be.true;
            expect(is.any.email(['test@test.com', 'test@test'])).to.be.true;
        });
        it("should return false if all given values are not email", function() {
            expect(is.any.email('test@test', '.com')).to.be.false;
            expect(is.any.email(['test@test', '.com'])).to.be.false;
        });
    });
    describe("is.creditCard", function() {
        it("should return true if given value is credit card", function() {
            expect(is.creditCard(378282246310005)).to.be.true;
        });
        it("should return false if given value is not credit card", function() {
            expect(is.creditCard(123)).to.be.false;
        });
    });
    describe("is.not.creditCard", function() {
        it("should return false if given value is credit card", function() {
            expect(is.not.creditCard(378282246310005)).to.be.false;
        });
        it("should return true if given value is not credit card", function() {
            expect(is.not.creditCard(123)).to.be.true;
        });
    });
    describe("is.all.creditCard", function() {
        it("should return true if all given values are credit card", function() {
            expect(is.all.creditCard(378282246310005, 371449635398431)).to.be.true;
            expect(is.all.creditCard([378282246310005, 371449635398431])).to.be.true;
        });
        it("should return false if any given value is not credit card", function() {
            expect(is.all.creditCard(378282246310005, 123)).to.be.false;
            expect(is.all.creditCard([378282246310005, 123])).to.be.false;
        });
    });
    describe("is.any.creditCard", function() {
        it("should return true if any given value is credit card", function() {
            expect(is.any.creditCard(378282246310005, 123)).to.be.true;
            expect(is.any.creditCard([378282246310005, 123])).to.be.true;
        });
        it("should return false if all given values are not credit card", function() {
            expect(is.any.creditCard(123, 456)).to.be.false;
            expect(is.any.creditCard([123, 456])).to.be.false;
        });
    });
    describe("is.alphaNumeric", function() {
        it("should return true if given value is al sha numeric", function() {
            expect(is.alphaNumeric(123)).to.be.true;
        });
        it("should return false if given value is not al sha numeric", function() {
            expect(is.alphaNumeric('*?')).to.be.false;
        });
    });
    describe("is.not.alphaNumeric", function() {
        it("should return false if given value is al sha numeric", function() {
            expect(is.not.alphaNumeric('test')).to.be.false;
        });
        it("should return true if given value is not al sha numeric", function() {
            expect(is.not.alphaNumeric('&%')).to.be.true;
        });
    });
    describe("is.all.alphaNumeric", function() {
        it("should return true if all given values are al sha numeric", function() {
            expect(is.all.alphaNumeric(123, '123a')).to.be.true;
            expect(is.all.alphaNumeric([123, '123a'])).to.be.true;
        });
        it("should return false if any given value is not al sha numeric", function() {
            expect(is.all.alphaNumeric(123, '/(')).to.be.false;
            expect(is.all.alphaNumeric([123, '/('])).to.be.false;
        });
    });
    describe("is.any.alphaNumeric", function() {
        it("should return true if any given value is al sha numeric", function() {
            expect(is.any.alphaNumeric(123, 123)).to.be.true;
            expect(is.any.alphaNumeric([123, 123])).to.be.true;
        });
        it("should return false if all given values are not al sha numeric", function() {
            expect(is.any.alphaNumeric('=', '=')).to.be.false;
            expect(is.any.alphaNumeric(['=', '='])).to.be.false;
        });
    });
    describe("is.timeString", function() {
        it("should return true if given value is time string", function() {
            expect(is.timeString('13:45:30')).to.be.true;
        });
        it("should return false if given value is not time string", function() {
            expect(is.timeString('12:12:90')).to.be.false;
        });
    });
    describe("is.not.timeString", function() {
        it("should return false if given value is time string", function() {
            expect(is.not.timeString('13:45:30')).to.be.false;
        });
        it("should return true if given value is not time string", function() {
            expect(is.not.timeString('12:12:90')).to.be.true;
        });
    });
    describe("is.all.timeString", function() {
        it("should return true if all given values are time string", function() {
            expect(is.all.timeString('13:45:30', '10:15:20')).to.be.true;
            expect(is.all.timeString(['13:45:30', '10:15:20'])).to.be.true;
        });
        it("should return false if any given value is not time string", function() {
            expect(is.all.timeString('13:45:30', '12:12:90')).to.be.false;
            expect(is.all.timeString(['13:45:30', '12:12:90'])).to.be.false;
        });
    });
    describe("is.any.timeString", function() {
        it("should return true if any given value is time string", function() {
            expect(is.any.timeString('13:45:30', '12:12:90')).to.be.true;
            expect(is.any.timeString(['13:45:30', '12:12:90'])).to.be.true;
        });
        it("should return false if all given values are not time string", function() {
            expect(is.any.timeString('12:12:90', '12:12:66')).to.be.false;
            expect(is.any.timeString(['12:12:90', '12:12:66'])).to.be.false;
        });
    });
    describe("is.dateString", function() {
        it("should return true if given value is date string", function() {
            expect(is.dateString('11/11/2011')).to.be.true;
        });
        it("should return false if given value is not date string", function() {
            expect(is.dateString('1')).to.be.false;
        });
    });
    describe("is.not.dateString", function() {
        it("should return false if given value is date string", function() {
            expect(is.not.dateString('11/11/2011')).to.be.false;
        });
        it("should return true if given value is not date string", function() {
            expect(is.not.dateString('1/5')).to.be.true;
        });
    });
    describe("is.all.dateString", function() {
        it("should return true if all given values are date string", function() {
            expect(is.all.dateString('11/11/2011', '10/21/2012')).to.be.true;
            expect(is.all.dateString(['11/11/2011', '10/21/2012'])).to.be.true;
        });
        it("should return false if any given value is not dateString", function() {
            expect(is.all.dateString('11/11/2011', '1')).to.be.false;
            expect(is.all.dateString(['11/11/2011', '1'])).to.be.false;
        });
    });
    describe("is.any.dateString", function() {
        it("should return true if any given value is date string", function() {
            expect(is.any.dateString('11/11/2011', '1')).to.be.true;
            expect(is.any.dateString(['11/11/2011', '1'])).to.be.true;
        });
        it("should return false if all given values are not date string", function() {
            expect(is.any.dateString('11/11/1', '11/11/1')).to.be.false;
            expect(is.any.dateString(['11/11/1', '11/11/1'])).to.be.false;
        });
    });
    describe("is.usZipCode", function() {
        it("should return true if given value is US zip code", function() {
            expect(is.usZipCode('02201-1020')).to.be.true;
        });
        it("should return false if given value is not US zip code", function() {
            expect(is.usZipCode('1')).to.be.false;
        });
    });
    describe("is.not.usZipCode", function() {
        it("should return false if given value is US zip code", function() {
            expect(is.not.usZipCode('02201-1020')).to.be.false;
        });
        it("should return true if given value is not US zip code", function() {
            expect(is.not.usZipCode('1')).to.be.true;
        });
    });
    describe("is.all.usZipCode", function() {
        it("should return true if all given values are US zip code", function() {
            expect(is.all.usZipCode('02201-1020', '02201-2003')).to.be.true;
            expect(is.all.usZipCode(['02201-1020', '02201-2003'])).to.be.true;
        });
        it("should return false if any given value is not US zip code", function() {
            expect(is.all.usZipCode('02201-1020', '1')).to.be.false;
            expect(is.all.usZipCode(['02201-1020', '1'])).to.be.false;
        });
    });
    describe("is.any.usZipCode", function() {
        it("should return true if any given value is US zip code", function() {
            expect(is.any.usZipCode('02201-1020', '1')).to.be.true;
            expect(is.any.usZipCode(['02201-1020', '1'])).to.be.true;
        });
        it("should return false if all given values are not US zip code", function() {
            expect(is.any.usZipCode('1', '2')).to.be.false;
            expect(is.any.usZipCode(['1', '2'])).to.be.false;
        });
    });
    describe("is.caPostalCode", function() {
        it("should return true if given value is Canada postal code", function() {
            expect(is.caPostalCode('L8V3Y1')).to.be.true;
        });
        it("should return false if given value is not Canada postal code", function() {
            expect(is.caPostalCode('1')).to.be.false;
        });
    });
    describe("is.not.caPostalCode", function() {
        it("should return false if given value is Canada postal code", function() {
            expect(is.not.caPostalCode('L8V3Y1')).to.be.false;
        });
        it("should return true if given value is not Canada postal code", function() {
            expect(is.not.caPostalCode('1')).to.be.true;
        });
    });
    describe("is.all.caPostalCode", function() {
        it("should return true if all given values are Canada postal code", function() {
            expect(is.all.caPostalCode('L8V3Y1', 'V6Z1T0')).to.be.true;
            expect(is.all.caPostalCode(['L8V3Y1', 'V6Z1T0'])).to.be.true;
        });
        it("should return false if any given value is not Canada postal code", function() {
            expect(is.all.caPostalCode('L8V3Y1', '1')).to.be.false;
            expect(is.all.caPostalCode(['L8V3Y1', '1'])).to.be.false;
        });
    });
    describe("is.any.caPostalCode", function() {
        it("should return true if any given value is Canada postal code", function() {
            expect(is.any.caPostalCode('L8V3Y1', '1')).to.be.true;
            expect(is.any.caPostalCode(['L8V3Y1', '1'])).to.be.true;
        });
        it("should return false if all given values are not Canada postal code", function() {
            expect(is.any.caPostalCode('1', '2')).to.be.false;
            expect(is.any.caPostalCode(['1', '2'])).to.be.false;
        });
    });
    describe("is.ukPostCode", function() {
        it("should return true if given value is UK post code", function() {
            expect(is.ukPostCode('B184BJ')).to.be.true;
        });
        it("should return false if given value is not UK post code", function() {
            expect(is.ukPostCode('1')).to.be.false;
        });
    });
    describe("is.not.ukPostCode", function() {
        it("should return false if given value is UK post code", function() {
            expect(is.not.ukPostCode('B184BJ')).to.be.false;
        });
        it("should return true if given value is not UK post code", function() {
            expect(is.not.ukPostCode('1')).to.be.true;
        });
    });
    describe("is.all.ukPostCode", function() {
        it("should return true if all given values are UK post code", function() {
            expect(is.all.ukPostCode('B184BJ', 'M601NW')).to.be.true;
            expect(is.all.ukPostCode(['B184BJ', 'M601NW'])).to.be.true;
        });
        it("should return false if any given value is not UK post code", function() {
            expect(is.all.ukPostCode('B184BJ', '1')).to.be.false;
            expect(is.all.ukPostCode(['B184BJ', '1'])).to.be.false;
        });
    });
    describe("is.any.ukPostCode", function() {
        it("should return true if any given value is UK post code", function() {
            expect(is.any.ukPostCode('B184BJ', '1')).to.be.true;
            expect(is.any.ukPostCode(['B184BJ', '1'])).to.be.true;
        });
        it("should return false if all given values are not UK post code", function() {
            expect(is.any.ukPostCode('1', '2')).to.be.false;
            expect(is.any.ukPostCode(['1', '2'])).to.be.false;
        });
    });
    describe("is.nanpPhone", function() {
        it("should return true if given value is nanpPhone", function() {
            expect(is.nanpPhone('609-555-0175')).to.be.true;
        });
        it("should return false if given value is not nanpPhone", function() {
            expect(is.nanpPhone('1')).to.be.false;
        });
    });
    describe("is.not.nanpPhone", function() {
        it("should return false if given value is nanpPhone", function() {
            expect(is.not.nanpPhone('609-555-0175')).to.be.false;
        });
        it("should return true if given value is not nanpPhone", function() {
            expect(is.not.nanpPhone('1')).to.be.true;
        });
    });
    describe("is.all.nanpPhone", function() {
        it("should return true if all given values are nanpPhone", function() {
            expect(is.all.nanpPhone('609-555-0175', '609-555-0174')).to.be.true;
            expect(is.all.nanpPhone(['609-555-0175', '609-555-0174'])).to.be.true;
        });
        it("should return false if any given value is not nanpPhone", function() {
            expect(is.all.nanpPhone('609-555-0175', '1')).to.be.false;
            expect(is.all.nanpPhone(['609-555-0175', '1'])).to.be.false;
        });
    });
    describe("is.any.nanpPhone", function() {
        it("should return true if any given value is nanpPhone", function() {
            expect(is.any.nanpPhone('609-555-0175', '1')).to.be.true;
            expect(is.any.nanpPhone(['609-555-0175', '1'])).to.be.true;
        });
        it("should return false if all given values are not nanpPhone", function() {
            expect(is.any.nanpPhone('1', '2')).to.be.false;
            expect(is.any.nanpPhone(['1', '2'])).to.be.false;
        });
    });
    describe("is.eppPhone", function() {
        it("should return true if given value is eppPhone", function() {
            expect(is.eppPhone('+90.2322456789')).to.be.true;
        });
        it("should return false if given value is not eppPhone", function() {
            expect(is.eppPhone('1')).to.be.false;
        });
    });
    describe("is.not.eppPhone", function() {
        it("should return false if given value is eppPhone", function() {
            expect(is.not.eppPhone('+90.2322456789')).to.be.false;
        });
        it("should return true if given value is not eppPhone", function() {
            expect(is.not.eppPhone('1')).to.be.true;
        });
    });
    describe("is.all.eppPhone", function() {
        it("should return true if all given values are eppPhone", function() {
            expect(is.all.eppPhone('+90.2322456789', '+90.2322456799')).to.be.true;
            expect(is.all.eppPhone(['+90.2322456789', '+90.2322456799'])).to.be.true;
        });
        it("should return false if any given value is not eppPhone", function() {
            expect(is.all.eppPhone('+90.2322456789', '1')).to.be.false;
            expect(is.all.eppPhone(['+90.2322456789', '1'])).to.be.false;
        });
    });
    describe("is.any.eppPhone", function() {
        it("should return true if any given value is eppPhone", function() {
            expect(is.any.eppPhone('+90.2322456789', '1')).to.be.true;
            expect(is.any.eppPhone(['+90.2322456789', '1'])).to.be.true;
        });
        it("should return false if all given values are not eppPhone", function() {
            expect(is.any.eppPhone('1', '2')).to.be.false;
            expect(is.any.eppPhone(['1', '2'])).to.be.false;
        });
    });
    describe("is.socialSecurityNumber", function() {
        it("should return true if given value is socialSecurityNumber", function() {
            expect(is.socialSecurityNumber('017-90-7890')).to.be.true;
        });
        it("should return false if given value is not socialSecurityNumber", function() {
            expect(is.socialSecurityNumber('1')).to.be.false;
        });
    });
    describe("is.not.socialSecurityNumber", function() {
        it("should return false if given value is socialSecurityNumber", function() {
            expect(is.not.socialSecurityNumber('017-90-7890')).to.be.false;
        });
        it("should return true if given value is not socialSecurityNumber", function() {
            expect(is.not.socialSecurityNumber('1')).to.be.true;
        });
    });
    describe("is.all.socialSecurityNumber", function() {
        it("should return true if all given values are socialSecurityNumber", function() {
            expect(is.all.socialSecurityNumber('017-90-7890', '017-90-7891')).to.be.true;
            expect(is.all.socialSecurityNumber(['017-90-7890', '017-90-7891'])).to.be.true;
        });
        it("should return false if any given value is not socialSecurityNumber", function() {
            expect(is.all.socialSecurityNumber('017-90-7890', '1')).to.be.false;
            expect(is.all.socialSecurityNumber(['017-90-7890', '1'])).to.be.false;
        });
    });
    describe("is.any.socialSecurityNumber", function() {
        it("should return true if any given value is socialSecurityNumber", function() {
            expect(is.any.socialSecurityNumber('017-90-7890', '1')).to.be.true;
            expect(is.any.socialSecurityNumber(['017-90-7890', '1'])).to.be.true;
        });
        it("should return false if all given values are not socialSecurityNumber", function() {
            expect(is.any.socialSecurityNumber('1', '2')).to.be.false;
            expect(is.any.socialSecurityNumber(['1', '2'])).to.be.false;
        });
    });
    describe("is.affirmative", function() {
        it("should return true if given value is affirmative", function() {
            expect(is.affirmative('yes')).to.be.true;
        });
        it("should return false if given value is not affirmative", function() {
            expect(is.affirmative('no')).to.be.false;
        });
    });
    describe("is.not.affirmative", function() {
        it("should return false if given value is affirmative", function() {
            expect(is.not.affirmative('yes')).to.be.false;
        });
        it("should return true if given value is not affirmative", function() {
            expect(is.not.affirmative('no')).to.be.true;
        });
    });
    describe("is.all.affirmative", function() {
        it("should return true if all given values are affirmative", function() {
            expect(is.all.affirmative('yes', 'true')).to.be.true;
            expect(is.all.affirmative(['yes', 'true'])).to.be.true;
        });
        it("should return false if any given value is not affirmative", function() {
            expect(is.all.affirmative('yes', 'no')).to.be.false;
            expect(is.all.affirmative(['yes', 'no'])).to.be.false;
        });
    });
    describe("is.any.affirmative", function() {
        it("should return true if any given value is affirmative", function() {
            expect(is.any.affirmative('yes', 'no')).to.be.true;
            expect(is.any.affirmative(['yes', 'no'])).to.be.true;
        });
        it("should return false if all given values are not affirmative", function() {
            expect(is.any.affirmative('no', '2')).to.be.false;
            expect(is.any.affirmative(['no', '2'])).to.be.false;
        });
    });
});
