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
        });
        it("should return false if any passed parameter type is not arguments", function() {
            var notArguments = ['test'];
            var getArguments = function() {
                return arguments;
            };
            var arguments = getArguments('test');
            expect(is.all.arguments(arguments, notArguments)).to.be.false;
        });
    });
    describe("is.any.arguments", function() {
        it("should return true if any passed parameter type is arguments", function() {
            var getArguments = function() {
                return arguments;
            };
            var arguments = getArguments('test');
            expect(is.any.arguments('test', arguments)).to.be.true;
        });
        it("should return false if all passed parameter types are not arguments", function() {
            expect(is.any.arguments('test', null)).to.be.false;
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
        });
        it("should return false if any passed parameter type is not array", function() {
            var notArray = 'test';
            var array = ['test'];
            expect(is.all.array(notArray, array)).to.be.false;
        });
    });
    describe("is.any.array", function() {
        it("should return true if any passed parameter type is array", function() {
            var array = ['test'];
            var array2 = ['test2'];
            expect(is.any.array([array, array2, 'test'])).to.be.true;
        });
        it("should return false if all passed parameter types are not array", function() {
            expect(is.any.array('test', 'test2')).to.be.false;
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
        });
        it("should return false if passed parameter type is boolean", function() {
            var bool = true;
            var notBool = 'test';
            expect(is.all.boolean(bool, notBool)).to.be.false;
        });
    });
    describe("is.any.boolean", function() {
        it("should return true if any passed parameter type is boolean", function() {
            var bool1 = true;
            var bool2 = false;
            expect(is.any.boolean(bool1, bool2, ['test'])).to.be.true;
        });
        it("should return false if all passed parameter types are not boolean", function() {
            expect(is.any.boolean('test', {}, null)).to.be.false;
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
        });
        it("should return false if any passed parameter type is not date", function() {
            var date = new Date();
            var notDate = 'test';
            expect(is.all.date(date, notDate)).to.be.false;
        });
    });
    describe("is.any.date", function() {
        it("should return true if any passed parameter type is date", function() {
            var date = new Date();
            expect(is.any.date('test', date)).to.be.true;
        });
        it("should return false if all passed parameter types are not date", function() {
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
        });
        it("should return false if any passed parameter type is not error", function() {
            var error = new Error();
            var notError = 'test';
            expect(is.all.error(error, notError)).to.be.false;
        });
    });
    describe("is.any.error", function() {
        it("should return true if any passed parameter type is error", function() {
            var error1 = new Error();
            expect(is.any.error(error1, new Date())).to.be.true;
        });
        it("should return false if all passed parameter types are not error", function() {
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
        });
        it("should return false if any passed parameter type is not function", function() {
            var notFunction = 'test';
            expect(is.all.function(is.function, notFunction)).to.be.false;
        });
    });
    describe("is.any.function", function() {
        it("should return true if any passed parameter type is function", function() {
            expect(is.any.function(is.function, [])).to.be.true;
        });
        it("should return false if all passed parameter types are not function", function() {
            expect(is.any.function(2, 'test')).to.be.false;
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
        });
        it("should return false if any passed parameter type is not NaN", function() {
            var notNaN = 'test';
            expect(is.all.nan(NaN, notNaN)).to.be.false;
        });
    });
    describe("is.any.nan", function() {
        it("should return true if any passed parameter type is NaN", function() {
            expect(is.any.nan(NaN, NaN, 'test')).to.be.true;
        });
        it("should return false if all passed parameter types are not NaN", function() {
            expect(is.any.nan('test', new RegExp())).to.be.false;
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
        });
        it("should return false if any passed parameter type is not null", function() {
            var notNull = 'test';
            expect(is.all.null(null, notNull)).to.be.false;
        });
    });
    describe("is.any.null", function() {
        it("should return true if any passed parameter type is null", function() {
            expect(is.any.null([null, null, undefined])).to.be.true;
        });
        it("should return false if all passed parameter types are not null", function() {
            expect(is.any.null(1, 2)).to.be.false;
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
        });
        it("should return false if any passed parameter type is not number", function() {
            var notNumber = 'test';
            expect(is.all.number(1, notNumber)).to.be.false;
        });
    });
    describe("is.any.number", function() {
        it("should return true if any passed parameter type is number", function() {
            expect(is.any.number(1, 2, NaN)).to.be.true;
        });
        it("should return false if all passed parameter types are not number", function() {
            expect(is.any.number(null, 'test')).to.be.false;
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
        });
        it("should return false if any passed parameter type is not object", function() {
            var notObject = 'test';
            expect(is.all.object({}, notObject)).to.be.false;
        });
    });
    describe("is.any.object", function() {
        it("should return true if any passed parameter type is object", function() {
            expect(is.any.object({}, {}, 'test')).to.be.true;
        });
        it("should return false if all passed parameter types are not object", function() {
            expect(is.any.object(1, 2, 3)).to.be.false;
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
        });
        it("should return false if any passed parameter type is not regexp", function() {
            var notRegexp = 'test';
            var regexp = new RegExp();
            expect(is.all.regexp(regexp, notRegexp)).to.be.false;
        });
    });
    describe("is.any.regexp", function() {
        it("should return true if any passed parameter type is regexp", function() {
            var regexp = new RegExp();
            expect(is.any.regexp(regexp, /test/, 1)).to.be.true;
        });
        it("should return false if any passed parameter type is not regexp", function() {
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
        });
        it("should return false if any passed parameter type is not string", function() {
            expect(is.all.string('test', 1)).to.be.false;
        });
    });
    describe("is.any.string", function() {
        it("should return true if any passed parameter type is string", function() {
            expect(is.any.string('test', 1)).to.be.true;
        });
        it("should return false if all passed parameter types are not string", function() {
            expect(is.any.string(null, 1)).to.be.false;
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
        });
        it("should return false if any passed parameter type is not undefined", function() {
            expect(is.all.undefined(undefined, null)).to.be.false;
        });
    });
    describe("is.any.undefined", function() {
        it("should return true if any passed parameter type is undefined", function() {
            expect(is.any.undefined('test', undefined)).to.be.true;
        });
        it("should return false if any passed parameter type is not undefined", function() {
            expect(is.any.undefined(2, null)).to.be.false;
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
        });
        it("should return false if any given element is not empty", function() {
            expect(is.all.empty(['test'], {}, '')).to.be.false;
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
        });
        it("should return false if given any value is not existy", function() {
            expect(is.all.existy([], {}, 'test', true, undefined)).to.be.false;
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
        });
        it("should return false if any given value is not existy or false", function() {
            expect(is.all.truthy('test', undefined)).to.be.false;
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
        });
        it("should return false if any given value is not falsy", function() {
            expect(is.all.falsy(undefined, 'test')).to.be.false;
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
        });
        it("should return true if given values are space", function() {
            expect(is.all.space(' ', ' ')).to.be.true;
        });
    });
});
