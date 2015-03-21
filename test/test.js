
var expect = (typeof chai != 'undefined') ? chai.expect : require('chai').expect;

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
        it("should return false if passed parameter is NaN", function() {
            expect(is.number(NaN)).to.be.false;
        })
    });
    describe("is.not.number", function() {
        it("should return false if passed parameter type is number", function() {
            expect(is.not.number(1)).to.be.false;
        });
        it("should return true if passed parameter type is not number", function() {
            var notNumber = 'test';
            expect(is.not.number(notNumber)).to.be.true;
        });
        it("should return true if passed parameter is NaN", function() {
            expect(is.not.number(NaN)).to.be.true;
        })
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
    describe("is.json",function(){
        it("should return true if passed parameter type is a json object", function() {
            expect(is.json({})).to.be.true;
        });
        it("should return false if passed parameter type is not a json object", function() {
            var notObject = 'test';
            expect(is.json(notObject)).to.be.false;
        });
    });
     describe("is.not.json", function() {
        it("should return false if passed parameter type is json object", function() {
            expect(is.not.json({})).to.be.false;
        });
        it("should return true if passed parameter type is not json object", function() {
            var notObject = 'test';
            expect(is.not.json(notObject)).to.be.true;
        });
    });
    describe("is.all.json", function() {
        it("should return true if all passed parameter types are object", function() {
            expect(is.all.json({}, {})).to.be.true;
            expect(is.all.json([{}, {}])).to.be.true;
        });
        it("should return false if any passed parameter type is not object", function() {
            var notObject = 'test';
            expect(is.all.json({}, notObject,[])).to.be.false;
            expect(is.all.json([{}, notObject,""])).to.be.false;
        });
    });
    describe("is.any.json", function() {
        it("should return true if any passed parameter type is json object", function() {
            expect(is.any.json({}, {}, 'test')).to.be.true;
            expect(is.any.json([{}, {}, 'test'])).to.be.true;
        });
        it("should return false if all passed parameter types are not json object", function() {
            expect(is.any.json(1, 2, 3)).to.be.false;
            expect(is.any.json([1, 2, 3])).to.be.false;
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
    describe("is.char", function() {
        it("should return true if passed parameter type is char", function() {
            expect(is.char('t')).to.be.true;
        });
        it("should return false if passed parameter type is not a char", function() {
          expect(is.char('test')).to.be.false;
        });
    });
    describe("is.not.char", function() {
        it("should return false if passed parameter type is char", function() {
            expect(is.not.char('t')).to.be.false;
        });
        it("should return true if passed parameter type is not char", function() {
            expect(is.not.char(1)).to.be.true;
        });
    });
    describe("is.all.char", function() {
        it("should return true if all passed parameter types are char", function() {
            expect(is.all.char('t', 't')).to.be.true;
            expect(is.all.char(['t', 't'])).to.be.true;
        });
        it("should return false if any passed parameter type is not char", function() {
            expect(is.all.char('test', 1)).to.be.false;
            expect(is.all.char(['test', 1])).to.be.false;
        });
    });
    describe("is.any.char", function() {
        it("should return true if any passed parameter type is char", function() {
            expect(is.any.char('t', 1)).to.be.true;
            expect(is.any.char(['t', 1])).to.be.true;
        });
        it("should return false if all passed parameter types are not char", function() {
            expect(is.any.char(null, 1)).to.be.false;
            expect(is.any.char([null, 1])).to.be.false;
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
        it("should return true if given value is truthy", function() {
            expect(is.truthy('test')).to.be.true;
        });
        it("should return false if given value is not truthy", function() {
            expect(is.truthy(undefined)).to.be.false;
        });
        it("should return false if given value is false", function() {
            expect(is.truthy(false)).to.be.false;
        });
    });
    describe("is.not.truthy", function() {
        it("should return false if given value is truthy", function() {
            expect(is.not.truthy(true)).to.be.false;
        });
        it("should return true if given value is not truthy", function() {
            expect(is.not.truthy(undefined)).to.be.true;
        });
        it("should return true if given value is false", function() {
            expect(is.not.truthy(false)).to.be.true;
        });
    });
    describe("is.all.truthy", function() {
        it("should return true if all given values are truthy", function() {
            expect(is.all.truthy('test', [], true)).to.be.true;
            expect(is.all.truthy(['test', [], true])).to.be.true;
        });
        it("should return false if any given value is not truthy", function() {
            expect(is.all.truthy('test', undefined)).to.be.false;
            expect(is.all.truthy(['test', undefined])).to.be.false;
        });
    });
    describe("is.falsy", function() {
        it("should return false if given value is truthy", function() {
            expect(is.falsy('test')).to.be.false;
        });
        it("should return true if given value is falsy", function() {
            expect(is.falsy(undefined)).to.be.true;
        });
        it("should return true if given value is false", function() {
            expect(is.falsy(false)).to.be.true;
        });
    });
    describe("is.not.falsy", function() {
        it("should return true if given value is truthy", function() {
            expect(is.not.falsy(true)).to.be.true;
        });
        it("should return false if given value is falsy", function() {
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
    describe("is.integer", function() {
        it("should return true if given number is integer", function() {
            expect(is.integer(4)).to.be.true;
        });
        it("should return false if given number is not integer", function() {
            expect(is.integer(2.2)).to.be.false;
        });
    });
    describe("is.not.integer", function() {
        it("should return false if given number is integer", function() {
            expect(is.not.integer(4)).to.be.false;
        });
        it("should return true if given number is not integer", function() {
            expect(is.not.integer(2.2)).to.be.true;
        });
    });
    describe("is.all.integer", function() {
        it("should return true if all given numbers are integer", function() {
            expect(is.all.integer(1, 3, 5)).to.be.true;
            expect(is.all.integer([1, 3, 5])).to.be.true;
        });
        it("should return false if any given number is not integer", function() {
            expect(is.all.integer(1, 3.4, 5)).to.be.false;
            expect(is.all.integer([1, 3.4, 5])).to.be.false;
        });
    });
    describe("is.any.integer", function() {
        it("should return true if any given number is integer", function() {
            expect(is.any.integer(1.2, 3, 5)).to.be.true;
            expect(is.any.integer([1.2, 3, 5])).to.be.true;
        });
        it("should return false if all given numbers are not integer", function() {
            expect(is.any.integer(1.2, 3.4, 5.6)).to.be.false;
            expect(is.any.integer([1.2, 3.4, 5.6])).to.be.false;
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
        it("should return true if given value is alpha numeric", function() {
            expect(is.alphaNumeric(123)).to.be.true;
        });
        it("should return false if given value is not alpha numeric", function() {
            expect(is.alphaNumeric('*?')).to.be.false;
        });
    });
    describe("is.not.alphaNumeric", function() {
        it("should return false if given value is alpha numeric", function() {
            expect(is.not.alphaNumeric('test')).to.be.false;
        });
        it("should return true if given value is not alpha numeric", function() {
            expect(is.not.alphaNumeric('&%')).to.be.true;
        });
    });
    describe("is.all.alphaNumeric", function() {
        it("should return true if all given values are alpha numeric", function() {
            expect(is.all.alphaNumeric(123, '123a')).to.be.true;
            expect(is.all.alphaNumeric([123, '123a'])).to.be.true;
        });
        it("should return false if any given value is not alpha numeric", function() {
            expect(is.all.alphaNumeric(123, '/(')).to.be.false;
            expect(is.all.alphaNumeric([123, '/('])).to.be.false;
        });
    });
    describe("is.any.alphaNumeric", function() {
        it("should return true if any given value is alpha numeric", function() {
            expect(is.any.alphaNumeric(123, 123)).to.be.true;
            expect(is.any.alphaNumeric([123, 123])).to.be.true;
        });
        it("should return false if all given values are not alpha numeric", function() {
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
        it("should return true if given value is Canada postal code with space", function() {
            expect(is.caPostalCode('L8V 3Y1')).to.be.true;
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
    describe("is.hexadecimal", function() {
        it("should return true if given value is hexadecimal", function() {
            expect(is.hexadecimal('ff')).to.be.true;
        });
        it("should return false if given value is not hexadecimal", function() {
            expect(is.hexadecimal(0.287)).to.be.false;
        });
    });
    describe("is.not.hexadecimal", function() {
        it("should return false if given value is hexadecimal", function() {
            expect(is.not.hexadecimal('ffFF')).to.be.false;
        });
        it("should return true if given value is not hexadecimal", function() {
            expect(is.not.hexadecimal('nohexhere')).to.be.true;
        });
    });
    describe("is.all.hexadecimal", function() {
        it("should return true if all given values are hexadecimal", function() {
            expect(is.all.hexadecimal('bcd', 'fF0')).to.be.true;
            expect(is.all.hexadecimal(['bcd', 'fF0'])).to.be.true;
        });
        it("should return false if any given value is not hexadecimal", function() {
            expect(is.all.hexadecimal('ff', 'nohex')).to.be.false;
            expect(is.all.hexadecimal(['ff', 'nohex'])).to.be.false;
        });
    });
    describe("is.any.hexadecimal", function() {
        it("should return true if any given value is hexadecimal", function() {
            expect(is.any.hexadecimal('F5', 'nohex')).to.be.true;
            expect(is.any.hexadecimal(['F5', 'nohex'])).to.be.true;
        });
        it("should return false if all given values are not hexadecimal", function() {
            expect(is.any.hexadecimal('hex', 'none')).to.be.false;
            expect(is.any.hexadecimal(['hex', 'none'])).to.be.false;
        });
    });
    describe("is.hexColor", function() {
        it("should return true if given value is hexColor", function() {
            expect(is.hexColor('#333')).to.be.true;
        });
        it("should return false if given value is not hexColor", function() {
            expect(is.hexColor(0.287)).to.be.false;
        });
    });
    describe("is.not.hexColor", function() {
        it("should return false if given value is hexColor", function() {
            expect(is.not.hexColor('#333')).to.be.false;
        });
        it("should return true if given value is not hexColor", function() {
            expect(is.not.hexColor(0.287)).to.be.true;
        });
    });
    describe("is.all.hexColor", function() {
        it("should return true if all given values are hexColor", function() {
            expect(is.all.hexColor('#333', '#444444')).to.be.true;
            expect(is.all.hexColor(['#333', '#444444'])).to.be.true;
        });
        it("should return false if any given value is not hexColor", function() {
            expect(is.all.hexColor('#3333', 'nohex')).to.be.false;
            expect(is.all.hexColor(['#3333', 'nohex'])).to.be.false;
        });
    });
    describe("is.any.hexColor", function() {
        it("should return true if any given values is hexColor", function() {
            expect(is.any.hexColor('#333', 'nohex')).to.be.true;
            expect(is.any.hexColor(['#333', 'nohex'])).to.be.true;
        });
        it("should return false if all given values are not hexColor", function() {
            expect(is.any.hexColor('nohex', 'nohex')).to.be.false;
            expect(is.any.hexColor(['nohex', 'nohex'])).to.be.false;
        });
    });
    describe("is.ip", function() {
        it("should return true if given value is a valid IP address", function() {
                expect(is.ip('2001:DB8:0:0:1::1')).to.be.true;
        });
        it("should return false if given value is not a valid IP address", function() {
                expect(is.ip('985.12.3.4')).to.be.false;
        });
    });
    describe("is.not.ip", function() {
        it("should return false if given value is a valid IP address", function() {
                expect(is.not.ip('2001:db8:0:0:1::1')).to.be.false;
        });
        it("should return true if given value is not a valid IP address", function() {
                expect(is.not.ip('0..3.4')).to.be.true;
        });
    });
    describe("is.all.ip", function() {
        it("should return true if all given values are valid IP addresses", function() {
                expect(is.all.ip('2001:db8::0:1:0:0:1', '201.50.198.2')).to.be.true;
                expect(is.all.ip(['2001:db8::0:1:0:0:1', '201.50.198.2'])).to.be.true;
        });
        it("should return false if any given value is not a valid IP address", function() {
                expect(is.all.ip('987.25.45.6', 'QFFF:0:78F:9::8:8:9')).to.be.false;
                expect(is.all.ip(['987.25.45.6', 'QFFF:0:78F:9::8:8:9'])).to.be.false;
         });
    });
    describe("is.any.ip", function() {
         it("should return true if any given value is a valid IP address", function() {
                 expect(is.any.ip('2001:0db8::1:0:0:1', '850..1.4')).to.be.true;
                 expect(is.any.ip(['2001:0db8::1:0:0:1', '850..1.4'])).to.be.true;
          });
          it("should return false if all given values are not valid IP address", function() {
                 expect(is.any.ip('1.2.3.', '78FF:::::::L')).to.be.false;
                 expect(is.any.ip(['1.2.3.', '78FF:::::::L'])).to.be.false;
          });
    });
    describe("is.ipv4", function() {
          it("should return true if given value is a valid IPv4 address", function() {
                  expect(is.ipv4('198.12.3.142')).to.be.true;
          });
          it("should return false if given value is not a valid IPv4 address", function() {
                  expect(is.ipv4('985.12.3.4')).to.be.false;
          });
    });
    describe("is.not.ipv4", function() {
           it("should return false if given value is a valid IPv4 address", function() {
                  expect(is.not.ipv4('102.52.47.18')).to.be.false;
           });
           it("should return true if given value is not a valid IPv4 address", function() {
                  expect(is.not.ipv4('0..3.4')).to.be.true;
           });
    });
    describe("is.all.ipv4", function() {
           it("should return true if all given values are valid IPv4 addresses", function() {
                  expect(is.all.ipv4('0.0.0.0', '201.50.198.2')).to.be.true;
                  expect(is.all.ipv4(['0.0.0.0', '201.50.198.2'])).to.be.true;
           });
           it("should return false if any given value is not a valid IPv4 address", function() {
                  expect(is.all.ipv4('987.25.45.6', '125.256.10.3')).to.be.false;
                  expect(is.all.ipv4(['987.25.45.6', '125.256.10.3'])).to.be.false;
           });
    });
    describe("is.any.ipv4", function() {
           it("should return true if any given value is a valid IPv4 address", function() {
                  expect(is.any.ipv4('255.255.255.255', '850..1.4')).to.be.true;
                  expect(is.any.ipv4(['255.255.255.255', '850..1.4'])).to.be.true;
           });
           it("should return false if all given values are not valid IPv4 address", function() {
                  expect(is.any.ipv4('1.2.3.', '78FF:::::::L')).to.be.false;
                  expect(is.any.ipv4(['1.2.3.', '78FF:::::::L'])).to.be.false;
           });
    });
    describe("is.ipv6", function() {
        it("should return true if given value is a valid IPv6 address", function() {
                expect(is.ipv6('2001:DB8:0:0:1::1')).to.be.true;
        });
        it("should return false if given value is not a valid IPv6 address", function() {
                expect(is.ip('985.12.3.4')).to.be.false;
        });
    });
    describe("is.not.ipv6", function() {
        it("should return false if given value is a valid IPv6 address", function() {
                expect(is.not.ipv6('2001:db8:0:0:1::1')).to.be.false;
        });
        it("should return true if given value is not a valid IPv6 address", function() {
                expect(is.not.ip('0..3.4')).to.be.true;
        });
    });
    describe("is.all.ipv6", function() {
        it("should return true if all given values are valid IPv6 addresses", function() {
                expect(is.all.ipv6('2001:db8::0:1:0:0:1', '1:50:198:2::1:2:8')).to.be.true;
                expect(is.all.ipv6(['2001:db8::0:1:0:0:1','1:50:198:2::1:2:8'])).to.be.true;
        });
        it("should return false if any given value is not a valid IPv6 address", function() {
                expect(is.all.ipv6('987.25.45.6', 'QFFF:0:78F:9::8:8:9')).to.be.false;
                expect(is.all.ipv6(['987.25.45.6', 'QFFF:0:78F:9::8:8:9'])).to.be.false;
         });
    });
    describe("is.any.ipv6", function() {
         it("should return true if any given value is a valid IPv6 address", function() {
                 expect(is.any.ipv6('2001:0db8::1:0:0:1', '850..1.4')).to.be.true;
                 expect(is.any.ipv6(['2001:0db8::1:0:0:1', '850..1.4'])).to.be.true;
          });
          it("should return false if all given values are not valid IPv6 address", function() {
                 expect(is.any.ipv6('1.2.3.', '78FF:::::::L')).to.be.false;
                 expect(is.any.ipv6(['1.2.3.', '78FF:::::::L'])).to.be.false;
          });
    });
});

describe("string checks", function() {
    describe("is.include", function() {
        it("should return true if given string contains substring", function() {
            expect(is.include('test.com', 't.com')).to.be.true;
        });
        it("should return false if given string does not contain substring", function() {
            expect(is.include('test.com', 'nope')).to.be.false;
        });
    });
    describe("is.not.include", function() {
        it("should return false if given string contains substring", function() {
            expect(is.not.include('test.com', 't.com')).to.be.false;
        });
        it("should return false if given string does not contain substring", function() {
            expect(is.not.include('test.com', 'nope')).to.be.true;
        });
    });
    describe("is.upperCase", function() {
        it("should return true if given string is uppercase", function() {
            expect(is.upperCase('TEST')).to.be.true;
        });
        it("should return false if given string is not uppercase", function() {
            expect(is.upperCase('test')).to.be.false;
        });
    });
    describe("is.not.upperCase", function() {
        it("should return false if given string is uppercase", function() {
            expect(is.not.upperCase('TEST')).to.be.false;
        });
        it("should return true if given string is not uppercase", function() {
            expect(is.not.upperCase('test')).to.be.true;
        });
    });
    describe("is.all.upperCase", function() {
        it("should return true if all given strings are uppercase", function() {
            expect(is.all.upperCase('TEST', 'FOO')).to.be.true;
            expect(is.all.upperCase(['TEST', 'FOO', 'BAR'])).to.be.true;
        });
        it("should return false if any given string is not uppercase", function() {
            expect(is.all.upperCase('TEST', 'foo')).to.be.false;
            expect(is.all.upperCase(['TEST', 'FOO', 'bar'])).to.be.false;
        });
    });
    describe("is.any.upperCase", function() {
        it("should return true if any given strings is uppercase", function() {
            expect(is.any.upperCase('test', 'FOO')).to.be.true;
            expect(is.any.upperCase(['TEST', 'foo', 'BAR'])).to.be.true;
        });
        it("should return false if all given strings are not uppercase", function() {
            expect(is.any.upperCase('test', 'foo')).to.be.false;
            expect(is.any.upperCase(['test', 'foo', 'bar'])).to.be.false;
        });
    });
    describe("is.lowerCase", function() {
        it("should return true if given string is lowerCase", function() {
            expect(is.lowerCase('test')).to.be.true;
        });
        it("should return false if given string is not lowerCase", function() {
            expect(is.lowerCase('TEST')).to.be.false;
        });
    });
    describe("is.not.lowerCase", function() {
        it("should return false if given string is lowerCase", function() {
            expect(is.not.lowerCase('test')).to.be.false;
        });
        it("should return true if given string is not lowerCase", function() {
            expect(is.not.lowerCase('TEST')).to.be.true;
        });
    });
    describe("is.all.lowerCase", function() {
        it("should return true if all given strings are lowerCase", function() {
            expect(is.all.lowerCase('test', 'foo')).to.be.true;
            expect(is.all.lowerCase(['test', 'foo', 'bar'])).to.be.true;
        });
        it("should return false if any given string is not lowerCase", function() {
            expect(is.all.lowerCase('test', 'FOO')).to.be.false;
            expect(is.all.lowerCase(['test', 'foo', 'BAR'])).to.be.false;
        });
    });
    describe("is.any.lowerCase", function() {
        it("should return true if any given strings is lowerCase", function() {
            expect(is.any.lowerCase('TEST', 'foo')).to.be.true;
            expect(is.any.lowerCase(['test', 'FOO', 'bar'])).to.be.true;
        });
        it("should return false if all given strings are not lowerCase", function() {
            expect(is.any.lowerCase('TEST', 'FOO')).to.be.false;
            expect(is.any.lowerCase(['TEST', 'FOO', 'BAR'])).to.be.false;
        });
    });
    describe("is.startWith", function() {
        it("should return true if given string starts with substring", function() {
            expect(is.startWith('test', 'te')).to.be.true;
        });
        it("should return false if given string does not start with substring", function() {
            expect(is.startWith('test', 'st')).to.be.false;
        });
    });
    describe("is.not.startWith", function() {
        it("should return false if given string starts with substring", function() {
            expect(is.not.startWith('test', 'te')).to.be.false;
        });
        it("should return true if given string does not start with substring", function() {
            expect(is.not.startWith('test', 'st')).to.be.true;
        });
    });
    describe("is.endWith", function() {
        it("should return true if given string ends with substring", function() {
            expect(is.endWith('test', 'st')).to.be.true;
        });
        it("should return false if given string does not end with substring", function() {
            expect(is.endWith('test', 'te')).to.be.false;
        });
        it("should prevent true return if endWith is not present in the string", function() {
            expect(is.endWith('id', '_id')).to.be.false;
        });
    });
    describe("is.not.endWith", function() {
        it("should return false if given string ends with substring", function() {
            expect(is.not.endWith('test', 'st')).to.be.false;
        });
        it("should return true if given string does not end with substring", function() {
            expect(is.not.endWith('test', 'te')).to.be.true;
        });
    });
    describe("is.capitalized", function() {
        it("should return true if given string is capitalized", function() {
            expect(is.capitalized('Test')).to.be.true;
        });
        it("should return false if given string is not capitalized", function() {
            expect(is.capitalized('test')).to.be.false;
        });
        it("should return true if given sentences' words are capitalized", function() {
            expect(is.capitalized('Test Is Good')).to.be.true;
        });
        it("should return false if given sentences' words are not capitalized", function() {
            expect(is.capitalized('Test is good')).to.be.false;
        });
    });
    describe("is.not.capitalized", function() {
        it("should return false if given string is capitalized", function() {
            expect(is.not.capitalized('Test')).to.be.false;
        });
        it("should return true if given string is not capitalized", function() {
            expect(is.not.capitalized('test')).to.be.true;
        });
        it("should return false if given sentences' words are capitalized", function() {
            expect(is.not.capitalized('Test Is Good')).to.be.false;
        });
        it("should return false if given sentences' words are not capitalized", function() {
            expect(is.not.capitalized('Test is good')).to.be.true;
        });
    });
    describe("is.all.capitalized", function() {
        it("should return true if all given strings are capitalized", function() {
            expect(is.all.capitalized('Test', 'Is', 'Good')).to.be.true;
            expect(is.all.capitalized(['Test', 'Is', 'Good'])).to.be.true;
        });
        it("should return false if any given string is not capitalized", function() {
            expect(is.all.capitalized('Test', 'Is', 'good')).to.be.false;
            expect(is.all.capitalized(['Test', 'Is', 'good'])).to.be.false;
        });
        it("should return true if given all sentences' words are capitalized", function() {
            expect(is.all.capitalized('Test Is Good', 'Hypest Hype')).to.be.true;
            expect(is.all.capitalized(['Test Is Good', 'Hypest Hype'])).to.be.true;
        });
        it("should return false if given any sentences' words are not capitalized", function() {
            expect(is.all.capitalized('Test Is Good', 'chase and status')).to.be.false;
            expect(is.all.capitalized(['Test Is Good', 'chase and status'])).to.be.false;
        });
    });
    describe("is.any.capitalized", function() {
        it("should return true if any given string is capitalized", function() {
            expect(is.any.capitalized('Test', 'is', 'good')).to.be.true;
            expect(is.any.capitalized(['Test', 'is', 'good'])).to.be.true;
        });
        it("should return false if all given strings are not capitalized", function() {
            expect(is.any.capitalized('test', 'is', 'good')).to.be.false;
            expect(is.any.capitalized(['test', 'is', 'good'])).to.be.false;
        });
        it("should return true if any given sentences' words are capitalized", function() {
            expect(is.any.capitalized('Test Is Good', 'hypest hype')).to.be.true;
            expect(is.any.capitalized(['Test Is Good', 'hypest hype'])).to.be.true;
        });
        it("should return false if all given sentences' words are not capitalized", function() {
            expect(is.any.capitalized('test is good', 'chase and status')).to.be.false;
            expect(is.any.capitalized(['test is good', 'chase and status'])).to.be.false;
        });
    });
    describe("is.palindrome", function() {
        it("should return true if given string is palindrome", function() {
            expect(is.palindrome('testset')).to.be.true;
        });
        it("should return false if given string is not palindrome", function() {
            expect(is.palindrome('test')).to.be.false;
        });
    });
    describe("is.not.palindrome", function() {
        it("should return false if given string is palindrome", function() {
            expect(is.not.palindrome('testset')).to.be.false;
        });
        it("should return true if given string is not palindrome", function() {
            expect(is.not.palindrome('test')).to.be.true;
        });
    });
    describe("is.all.palindrome", function() {
        it("should return true if all the given strings are palindrome", function() {
            expect(is.all.palindrome('testset', 'tt')).to.be.true;
            expect(is.all.palindrome(['testset', 'tt'])).to.be.true;
        });
        it("should return false if any given string is not palindrome", function() {
            expect(is.all.palindrome('test', 'tt')).to.be.false;
            expect(is.all.palindrome(['test', 'tt'])).to.be.false;
        });
    });
    describe("is.any.palindrome", function() {
        it("should return true if any given string is palindrome", function() {
            expect(is.any.palindrome('testset', 'te')).to.be.true;
            expect(is.any.palindrome(['testset', 'te'])).to.be.true;
        });
        it("should return false if all given strings are not palindrome", function() {
            expect(is.any.palindrome('test', 'te')).to.be.false;
            expect(is.any.palindrome(['test', 'te'])).to.be.false;
        });
    });
});
describe("time checks", function() {
    describe("is.today", function() {
        it("should return true if given date is today", function() {
            var date = new Date();
            expect(is.today(date)).to.be.true;
        });
        it("should return false if given date is not today", function() {
            var date = new Date();
            expect(is.today(date.setDate(date.getDate() - 1))).to.be.false;
        });
    });
    describe("is.not.today", function() {
        it("should return false if given date is today", function() {
            var date = new Date();
            expect(is.not.today(date)).to.be.false;
        });
        it("should return true if given date is not today", function() {
            var date = new Date();
            expect(is.not.today(date.setDate(date.getDate() - 1))).to.be.true;
        });
    });
    describe("is.all.today", function() {
        it("should return true if all given dates are today", function() {
            var date = new Date();
            expect(is.all.today(date, date)).to.be.true;
            expect(is.all.today([date, date])).to.be.true;
        });
        it("should return false if any given date is not today", function() {
            var date = new Date();
            expect(is.all.today(new Date(), date.setDate(date.getDate() - 1))).to.be.false;
            expect(is.all.today([new Date(), date.setDate(date.getDate() - 1)])).to.be.false;
        });
    });
    describe("is.any.today", function() {
        it("should return true if any given date is today", function() {
            var date = new Date();
            expect(is.any.today(new Date(), date.setDate(date.getDate() - 1))).to.be.true;
            expect(is.any.today([new Date(), date.setDate(date.getDate() - 1)])).to.be.true;
        });
        it("should return false if all given dates are not today", function() {
            var date = new Date();
            expect(is.any.today(date.setDate(date.getDate() - 1), date.setDate(date.getDate() - 1))).to.be.false;
            expect(is.any.today([date.setDate(date.getDate() - 1), date.setDate(date.getDate() - 1)])).to.be.false;
        });
    });
    describe("is.yesterday", function() {
        it("should return true if given date is yesterday", function() {
            var date = new Date();
            var yesterday = new Date(date.setDate(date.getDate() - 1));
            expect(is.yesterday(yesterday)).to.be.true;
        });
        it("should return false if given date is not yesterday", function() {
            var date = new Date();
            expect(is.yesterday(date)).to.be.false;
        });
    });
    describe("is.not.yesterday", function() {
        it("should return false if given date is yesterday", function() {
            var date = new Date();
            var yesterday = new Date(date.setDate(date.getDate() - 1));
            expect(is.not.yesterday(yesterday)).to.be.false;
        });
        it("should return true if given date is not yesterday", function() {
            var date = new Date();
            expect(is.not.yesterday(date)).to.be.true;
        });
    });
    describe("is.all.yesterday", function() {
        it("should return true if all given dates are yesterday", function() {
            var date = new Date();
            var yesterday = new Date(date.setDate(date.getDate() - 1));
            expect(is.all.yesterday(yesterday, yesterday)).to.be.true;
            expect(is.all.yesterday([yesterday, yesterday])).to.be.true;
        });
        it("should return false if any given date is not yesterday", function() {
            var date = new Date();
            var yesterday = new Date(date.setDate(date.getDate() - 1));
            expect(is.all.yesterday(new Date(), yesterday)).to.be.false;
            expect(is.all.yesterday([new Date(), yesterday])).to.be.false;
        });
    });
    describe("is.any.yesterday", function() {
        it("should return true if any given date is yesterday", function() {
            var date = new Date();
            var yesterday = new Date(date.setDate(date.getDate() - 1));
            expect(is.any.yesterday(new Date(), yesterday)).to.be.true;
            expect(is.any.yesterday([new Date(), yesterday])).to.be.true;
        });
        it("should return false if all given dates are not yesterday", function() {
            var date = new Date();
            expect(is.any.yesterday(date, date)).to.be.false;
            expect(is.any.yesterday([date, date])).to.be.false;
        });
    });
    describe("is.tomorrow", function() {
        it("should return true if given date is tomorrow", function() {
            var date = new Date();
            var tomorrow = new Date(date.setDate(date.getDate() + 1));
            expect(is.tomorrow(tomorrow)).to.be.true;
        });
        it("should return false if given date is not tomorrow", function() {
            var date = new Date();
            expect(is.tomorrow(date)).to.be.false;
        });
    });
    describe("is.not.tomorrow", function() {
        it("should return false if given date is tomorrow", function() {
            var date = new Date();
            var tomorrow = new Date(date.setDate(date.getDate() + 1));
            expect(is.not.tomorrow(tomorrow)).to.be.false;
        });
        it("should return true if given date is not tomorrow", function() {
            var date = new Date();
            expect(is.not.tomorrow(date)).to.be.true;
        });
    });
    describe("is.all.tomorrow", function() {
        it("should return true if all given dates are tomorrow", function() {
            var date = new Date();
            var tomorrow = new Date(date.setDate(date.getDate() + 1));
            expect(is.all.tomorrow(tomorrow, tomorrow)).to.be.true;
            expect(is.all.tomorrow([tomorrow, tomorrow])).to.be.true;
        });
        it("should return false if any given date is not tomorrow", function() {
            var date = new Date();
            var tomorrow = new Date(date.setDate(date.getDate() + 1));
            expect(is.all.tomorrow(new Date(), tomorrow)).to.be.false;
            expect(is.all.tomorrow([new Date(), tomorrow])).to.be.false;
        });
    });
    describe("is.any.tomorrow", function() {
        it("should return true if any given date is tomorrow", function() {
            var date = new Date();
            var tomorrow = new Date(date.setDate(date.getDate() + 1));
            expect(is.any.tomorrow(new Date(), tomorrow)).to.be.true;
            expect(is.any.tomorrow([new Date(), tomorrow])).to.be.true;
        });
        it("should return false if all given dates are not tomorrow", function() {
            var date = new Date();
            expect(is.any.tomorrow(date, date)).to.be.false;
            expect(is.any.tomorrow([date, date])).to.be.false;
        });
    });
    describe("is.past", function() {
        it("should return true if given date is past", function() {
            var date = new Date();
            var past = new Date(date.setDate(date.getDate() - 1));
            expect(is.past(past)).to.be.true;
        });
        it("should return false if given date is not past", function() {
            var date = new Date();
            expect(is.past(date)).to.be.false;
        });
    });
    describe("is.not.past", function() {
        it("should return false if given date is past", function() {
            var date = new Date();
            var past = new Date(date.setDate(date.getDate() - 1));
            expect(is.not.past(past)).to.be.false;
        });
        it("should return true if given date is not past", function() {
            var date = new Date();
            var future = new Date(date.setDate(date.getDate() + 1));
            expect(is.not.past(future)).to.be.true;
        });
    });
    describe("is.all.past", function() {
        it("should return true if all given dates are past", function() {
            var date = new Date();
            var past = new Date(date.setDate(date.getDate() - 1));
            expect(is.all.past(past, past)).to.be.true;
            expect(is.all.past([past, past])).to.be.true;
        });
        it("should return false if any given date is not past", function() {
            var date = new Date();
            var past = new Date(date.setDate(date.getDate() - 1));
            expect(is.all.past(new Date(), past)).to.be.false;
            expect(is.all.past([new Date(), past])).to.be.false;
        });
    });
    describe("is.any.past", function() {
        it("should return true if any given date is past", function() {
            var date = new Date();
            var past = new Date(date.setDate(date.getDate() - 1));
            expect(is.any.past(new Date(), past)).to.be.true;
            expect(is.any.past([new Date(), past])).to.be.true;
        });
        it("should return false if all given dates are not past", function() {
            var date = new Date();
            var future = new Date(date.setDate(date.getDate() + 1));
            expect(is.any.past(future, future)).to.be.false;
            expect(is.any.past([future, future])).to.be.false;
        });
    });
    describe("is.future", function() {
        it("should return true if given date is future", function() {
            var date = new Date();
            var future = new Date(date.setDate(date.getDate() + 1));
            expect(is.future(future)).to.be.true;
        });
        it("should return false if given date is not future", function() {
            var date = new Date();
            var past = new Date(date.setDate(date.getDate() - 1));
            expect(is.future(past)).to.be.false;
        });
    });
    describe("is.not.future", function() {
        it("should return false if given date is future", function() {
            var date = new Date();
            var future = new Date(date.setDate(date.getDate() + 1));
            expect(is.not.future(future)).to.be.false;
        });
        it("should return true if given date is not future", function() {
            var date = new Date();
            var past = new Date(date.setDate(date.getDate() - 1));
            expect(is.not.future(past)).to.be.true;
        });
    });
    describe("is.all.future", function() {
        it("should return true if all given dates are future", function() {
            var date = new Date();
            var future = new Date(date.setDate(date.getDate() + 1));
            expect(is.all.future(future, future)).to.be.true;
            expect(is.all.future([future, future])).to.be.true;
        });
        it("should return false if any given date is not future", function() {
            var date = new Date();
            var future = new Date(date.setDate(date.getDate() + 1));
            var past = new Date(date.setDate(date.getDate() - 2));
            expect(is.all.future(past, future)).to.be.false;
            expect(is.all.future([past, future])).to.be.false;
        });
    });
    describe("is.any.future", function() {
        it("should return true if any given date is future", function() {
            var date = new Date();
            var future = new Date(date.setDate(date.getDate() + 1));
            var past = new Date(date.setDate(date.getDate() - 2));
            expect(is.any.future(past, future)).to.be.true;
            expect(is.any.future([past, future])).to.be.true;
        });
        it("should return false if all given dates are not future", function() {
            var date = new Date();
            var past = new Date(date.setDate(date.getDate() - 1));
            expect(is.any.future(past, past)).to.be.false;
            expect(is.any.future([past, past])).to.be.false;
        });
    });
    describe("is.day", function() {
        it("should return true if given day string is date objects' day", function() {
            var time = 1421572235303;
            expect(is.day(new Date(time), 'sunday')).to.be.true;
        });
        it("should return false if given day string is not date objects' day", function() {
            var time = 1421572235303;
            expect(is.day(new Date(time), 'monday')).to.be.false;
        });
    });
    describe("is.not.day", function() {
        it("should return false if given day string is date objects' day", function() {
            var time = 1421572235303;
            expect(is.not.day(new Date(time), 'sunday')).to.be.false;
        });
        it("should return true if given day string is not date objects' day", function() {
            var time = 1421572235303;
            expect(is.not.day(new Date(time), 'monday')).to.be.true;
        });
    });
    describe("is.month", function() {
        it("should return true if given month string is date objects' month", function() {
            var time = 1421572235303;
            expect(is.month(new Date(time), 'january')).to.be.true;
        });
        it("should return false if given month string is not date objects' month", function() {
            var time = 1421572235303;
            expect(is.month(new Date(time), 'february')).to.be.false;
        });
    });
    describe("is.not.month", function() {
        it("should return false if given month string is date objects' month", function() {
            var time = 1421572235303;
            expect(is.not.month(new Date(time), 'january')).to.be.false;
        });
        it("should return true if given month string is not date objects' month", function() {
            var time = 1421572235303;
            expect(is.not.month(new Date(time), 'february')).to.be.true;
        });
    });
    describe("is.year", function() {
        it("should return true if given year string is date objects' year", function() {
            var time = 1421572235303;
            expect(is.year(new Date(time), 2015)).to.be.true;
        });
        it("should return false if given year string is not date objects' year", function() {
            var time = 1421572235303;
            expect(is.year(new Date(time), 2016)).to.be.false;
        });
    });
    describe("is.not.year", function() {
        it("should return false if given year string is date objects' year", function() {
            var time = 1421572235303;
            expect(is.not.year(new Date(time), 2015)).to.be.false;
        });
        it("should return true if given year string is not date objects' year", function() {
            var time = 1421572235303;
            expect(is.not.year(new Date(time), 2016)).to.be.true;
        });
    });
    describe("is.leapYear", function() {
        it("should return true if given year is a leap year", function() {
            expect(is.leapYear(2016)).to.be.true;
        });
        it("should return false if given year is not a leap year", function() {
            expect(is.leapYear(2015)).to.be.false;
        });
    });
    describe("is.not.leapYear", function() {
        it("should return false if given year is a leap year", function() {
            expect(is.not.leapYear(2016)).to.be.false;
        });
        it("should return true if given year is not a leap year", function() {
            expect(is.not.leapYear(2015)).to.be.true;
        });
    });
    describe("is.all.leapYear", function() {
        it("should return true if all given years are leap years", function() {
            expect(is.all.leapYear(2080, 2180)).to.be.true;
            expect(is.all.leapYear([2080, 2180])).to.be.true;
        });
        it("should return false if any given year is not a leap year", function() {
            expect(is.all.leapYear(2015, 2080)).to.be.false;
            expect(is.all.leapYear([2015, 2080])).to.be.false;
        });
    });
    describe("is.any.leapYear", function() {
        it("should return true if any given year is leap year", function() {
            expect(is.any.leapYear(2080, 2181)).to.be.true;
            expect(is.any.leapYear([2080, 2181])).to.be.true;
        });
        it("should return false if all given years are not a leap years", function() {
            expect(is.any.leapYear(2015, 2081)).to.be.false;
            expect(is.any.leapYear([2015, 2081])).to.be.false;
        });
    });
    describe("is.weekend", function() {
        it("should return true if given date is weekend", function() {
            var time = 1421572235303;
            expect(is.weekend(new Date(time))).to.be.true;
        });
        it("should return false if given date is not weekend", function() {
            var time = 1421572235303;
            var date = new Date(time);
            var friday = new Date(date.setDate(date.getDate() - 2));
            expect(is.weekend(friday)).to.be.false;
        });
    });
    describe("is.not.weekend", function() {
        it("should return false if given date is weekend", function() {
            var time = 1421572235303;
            expect(is.not.weekend(new Date(time))).to.be.false;
        });
        it("should return true if given date is not weekend", function() {
            var time = 1421572235303;
            var date = new Date(time);
            var friday = new Date(date.setDate(date.getDate() - 2));
            expect(is.not.weekend(friday)).to.be.true;
        });
    });
    describe("is.all.weekend", function() {
        it("should return true if all given dates are weekend", function() {
            var time = 1421572235303;
            var date = new Date(time);
            var saturday = new Date(date.setDate(date.getDate() - 1));
            expect(is.all.weekend(new Date(time), saturday)).to.be.true;
            expect(is.all.weekend([new Date(time), saturday])).to.be.true;
        });
        it("should return false if any given date is not weekend", function() {
            var time = 1421572235303;
            var date = new Date(time);
            var friday = new Date(date.setDate(date.getDate() - 2));
            expect(is.all.weekend(new Date(time), friday)).to.be.false;
            expect(is.all.weekend([new Date(time), friday])).to.be.false;
        });
    });
    describe("is.any.weekend", function() {
        it("should return true if any given date is weekend", function() {
            var time = 1421572235303;
            var date = new Date(time);
            var friday = new Date(date.setDate(date.getDate() - 2));
            expect(is.any.weekend(new Date(time), friday)).to.be.true;
            expect(is.any.weekend([new Date(time), friday])).to.be.true;
        });
        it("should return false if all given dates are not weekend", function() {
            var time = 1421572235303;
            var date = new Date(time);
            var friday = new Date(date.setDate(date.getDate() - 2));
            var thursday = new Date(date.setDate(date.getDate() - 1));
            expect(is.any.weekend(thursday, friday)).to.be.false;
            expect(is.any.weekend([thursday, friday])).to.be.false;
        });
    });
    describe("is.weekday", function() {
        it("should return true if given date is weekday", function() {
            var time = 1421572235303;
            var date = new Date(time);
            var friday = new Date(date.setDate(date.getDate() - 2));
            expect(is.weekday(friday)).to.be.true;
        });
        it("should return false if given date is not weekday", function() {
            var time = 1421572235303;
            var sunday = new Date(time);
            expect(is.weekday(sunday)).to.be.false;
        });
    });
    describe("is.not.weekday", function() {
        it("should return false if given date is weekday", function() {
            var time = 1421572235303;
            var date = new Date(time);
            var friday = new Date(date.setDate(date.getDate() - 2));
            expect(is.not.weekday(friday)).to.be.false;
        });
        it("should return true if given date is not weekday", function() {
            var time = 1421572235303;
            var sunday = new Date(time);
            expect(is.not.weekday(sunday)).to.be.true;
        });
    });
    describe("is.all.weekday", function() {
        it("should return true if all given dates are weekday", function() {
            var time = 1421572235303;
            var date = new Date(time);
            var friday = new Date(date.setDate(date.getDate() - 2));
            var thursday = new Date(date.setDate(date.getDate() - 1));
            expect(is.all.weekday(friday, thursday)).to.be.true;
            expect(is.all.weekday([friday, thursday])).to.be.true;
        });
        it("should return false if any given date is not weekday", function() {
            var time = 1421572235303;
            var date = new Date(time);
            var saturday = new Date(date.setDate(date.getDate() - 1));
            var friday = new Date(date.setDate(date.getDate() - 1));
            expect(is.all.weekday(saturday, friday)).to.be.false;
            expect(is.all.weekday([saturday, friday])).to.be.false;
        });
    });
    describe("is.any.weekday", function() {
        it("should return true if any given date is weekday", function() {
            var time = 1421572235303;
            var date = new Date(time);
            var saturday = new Date(date.setDate(date.getDate() - 1));
            var friday = new Date(date.setDate(date.getDate() - 1));
            expect(is.any.weekday(friday, saturday)).to.be.true;
            expect(is.any.weekday([friday, saturday])).to.be.true;
        });
        it("should return false if all given dates are not weekday", function() {
            var time = 1421572235303;
            var date = new Date(time);
            var saturday = new Date(date.setDate(date.getDate() - 1));
            expect(is.any.weekday(date, saturday)).to.be.false;
            expect(is.any.weekday([date, saturday])).to.be.false;
        });
    });
    describe("is.inDateRange", function() {
        it("should return true if date is within given start date and end date", function() {
            var today = new Date();
            var date = new Date();
            var tomorrow = new Date(date.setDate(date.getDate() + 1));
            var yesterday = new Date(date.setDate(date.getDate() - 2));
            expect(is.inDateRange(today, yesterday, tomorrow)).to.be.true;
        });
        it("should return false if date is not within given start date and end date", function() {
            var today = new Date();
            var date = new Date();
            var tomorrow = new Date(date.setDate(date.getDate() + 1));
            var yesterday = new Date(date.setDate(date.getDate() - 2));
            expect(is.inDateRange(yesterday, today, tomorrow)).to.be.false;
        });
    });
    describe("is.not.inDateRange", function() {
        it("should return false if date is within given start date and end date", function() {
            var today = new Date();
            var date = new Date();
            var tomorrow = new Date(date.setDate(date.getDate() + 1));
            var yesterday = new Date(date.setDate(date.getDate() - 2));
            expect(is.not.inDateRange(today, yesterday, tomorrow)).to.be.false;
        });
        it("should return true if date is not within given start date and end date", function() {
            var today = new Date();
            var date = new Date();
            var tomorrow = new Date(date.setDate(date.getDate() + 1));
            var yesterday = new Date(date.setDate(date.getDate() - 2));
            expect(is.not.inDateRange(yesterday, today, tomorrow)).to.be.true;
        });
    });
    describe("is.inLastWeek", function() {
        it("should return true if date is within last week", function() {
            var date = new Date();
            var twoDaysAgo = new Date(date.setDate(date.getDate() - 2));
            expect(is.inLastWeek(twoDaysAgo)).to.be.true;
        });
        it("should return false if date is not within last week", function() {
            var date = new Date();
            var eightDaysAgo = new Date(date.setDate(date.getDate() - 8));
            expect(is.inLastWeek(eightDaysAgo)).to.be.false;
        });
    });
    describe("is.not.inLastWeek", function() {
        it("should return false if date is within last week", function() {
            var date = new Date();
            var twoDaysAgo = new Date(date.setDate(date.getDate() - 2));
            expect(is.not.inLastWeek(twoDaysAgo)).to.be.false;
        });
        it("should return true if date is not within last week", function() {
            var date = new Date();
            var eightDaysAgo = new Date(date.setDate(date.getDate() - 8));
            expect(is.not.inLastWeek(eightDaysAgo)).to.be.true;
        });
    });
    describe("is.all.inLastWeek", function() {
        it("should return true if all given dates are within last week", function() {
            var date = new Date();
            var twoDaysAgo = new Date(date.setDate(date.getDate() - 2));
            var threeDaysAgo = new Date(date.setDate(date.getDate() - 1));
            expect(is.all.inLastWeek(twoDaysAgo, threeDaysAgo)).to.be.true;
            expect(is.all.inLastWeek([twoDaysAgo, threeDaysAgo])).to.be.true;
        });
        it("should return false if any given date is not within last week", function() {
            var date = new Date();
            var twoDaysAgo = new Date(date.setDate(date.getDate() - 2));
            var tenDaysAgo = new Date(date.setDate(date.getDate() - 8));
            expect(is.all.inLastWeek(twoDaysAgo, tenDaysAgo)).to.be.false;
            expect(is.all.inLastWeek([twoDaysAgo, tenDaysAgo])).to.be.false;
        });
    });
    describe("is.any.inLastWeek", function() {
        it("should return true if any given date is within last week", function() {
            var date = new Date();
            var twoDaysAgo = new Date(date.setDate(date.getDate() - 2));
            var tenDaysAgo = new Date(date.setDate(date.getDate() - 8));
            expect(is.any.inLastWeek(twoDaysAgo, tenDaysAgo)).to.be.true;
            expect(is.any.inLastWeek([twoDaysAgo, tenDaysAgo])).to.be.true;
        });
        it("should return false if all given dates are not within last week", function() {
            var date = new Date();
            var eightDaysAgo = new Date(date.setDate(date.getDate() - 8));
            var tenDaysAgo = new Date(date.setDate(date.getDate() - 2));
            expect(is.any.inLastWeek(eightDaysAgo, tenDaysAgo)).to.be.false;
            expect(is.any.inLastWeek([eightDaysAgo, tenDaysAgo])).to.be.false;
        });
    });
    describe("is.inLastMonth", function() {
        it("should return true if date is within last month", function() {
            var date = new Date();
            var tenDaysAgo = new Date(date.setDate(date.getDate() - 10));
            expect(is.inLastMonth(tenDaysAgo)).to.be.true;
        });
        it("should return false if date is not within last month", function() {
            var date = new Date();
            var fiftyDaysAgo = new Date(date.setDate(date.getDate() - 50));
            expect(is.inLastMonth(fiftyDaysAgo)).to.be.false;
        });
    });
    describe("is.not.inLastMonth", function() {
        it("should return false if date is within last month", function() {
            var date = new Date();
            var tenDaysAgo = new Date(date.setDate(date.getDate() - 10));
            expect(is.not.inLastMonth(tenDaysAgo)).to.be.false;
        });
        it("should return true if date is not within last month", function() {
            var date = new Date();
            var fiftyDaysAgo = new Date(date.setDate(date.getDate() - 50));
            expect(is.not.inLastMonth(fiftyDaysAgo)).to.be.true;
        });
    });
    describe("is.all.inLastMonth", function() {
        it("should return true if all given dates are within last month", function() {
            var date = new Date();
            var tenDaysAgo = new Date(date.setDate(date.getDate() - 10));
            var twentyDaysAgo = new Date(date.setDate(date.getDate() - 10));
            expect(is.all.inLastMonth(tenDaysAgo, twentyDaysAgo)).to.be.true;
            expect(is.all.inLastMonth([tenDaysAgo, twentyDaysAgo])).to.be.true;
        });
        it("should return false if any given date is not within last month", function() {
            var date = new Date();
            var tenDaysAgo = new Date(date.setDate(date.getDate() - 10));
            var fiftyDaysAgo = new Date(date.setDate(date.getDate() - 40));
            expect(is.all.inLastMonth(tenDaysAgo, fiftyDaysAgo)).to.be.false;
            expect(is.all.inLastMonth([tenDaysAgo, fiftyDaysAgo])).to.be.false;
        });
    });
    describe("is.any.inLastMonth", function() {
        it("should return true if any given date is within last month", function() {
            var date = new Date();
            var tenDaysAgo = new Date(date.setDate(date.getDate() - 10));
            var fiftyDaysAgo = new Date(date.setDate(date.getDate() - 40));
            expect(is.any.inLastMonth(tenDaysAgo, fiftyDaysAgo)).to.be.true;
            expect(is.any.inLastMonth([tenDaysAgo, fiftyDaysAgo])).to.be.true;
        });
        it("should return false if all given dates are not within last month", function() {
            var date = new Date();
            var fortyDaysAgo = new Date(date.setDate(date.getDate() - 40));
            var fiftyDaysAgo = new Date(date.setDate(date.getDate() - 10));
            expect(is.any.inLastMonth(fortyDaysAgo, fiftyDaysAgo)).to.be.false;
            expect(is.any.inLastMonth([fortyDaysAgo, fiftyDaysAgo])).to.be.false;
        });
    });
    describe("is.inLastYear", function() {
        it("should return true if date is within last year", function() {
            var date = new Date();
            var threeMonthsAgo = new Date(date.setMonth(date.getMonth() - 3));
            expect(is.inLastYear(threeMonthsAgo)).to.be.true;
        });
        it("should return false if date is not within last year", function() {
            var date = new Date();
            var future = new Date(date.setDate(date.getDate() + 1));
            expect(is.inLastYear(future)).to.be.false;
        });
    });
    describe("is.not.inLastYear", function() {
        it("should return false if date is within last year", function() {
            var date = new Date();
            var sixMonthsAgo = new Date(date.setMonth(date.getMonth() - 6));
            expect(is.not.inLastYear(sixMonthsAgo)).to.be.false;
        });
        it("should return true if date is not within last year", function() {
            var date = new Date();
            var future = new Date(date.setDate(date.getDate() + 1));
            expect(is.not.inLastYear(future)).to.be.true;
        });
    });
    describe("is.all.inLastYear", function() {
        it("should return true if all given dates are within last year", function() {
            var date = new Date();
            var twoMonthsAgo = new Date(date.setMonth(date.getMonth() - 2));
            var sixMonthsAgo = new Date(date.setMonth(date.getMonth() - 4));
            expect(is.all.inLastYear(twoMonthsAgo, sixMonthsAgo)).to.be.true;
            expect(is.all.inLastYear([twoMonthsAgo, sixMonthsAgo])).to.be.true;
        });
        it("should return false if any given date is not within last year", function() {
            var date = new Date();
            var future = new Date(date.setDate(date.getDate() + 1));
            var twoWeeksAgo = new Date(date.setDate(date.getDate() - 14));
            expect(is.all.inLastYear(future, twoWeeksAgo)).to.be.false;
            expect(is.all.inLastYear([future, twoWeeksAgo])).to.be.false;
        });
    });
    describe("is.any.inLastYear", function() {
        it("should return true if any given date is within last year", function() {
            var date = new Date();
            var future = new Date(date.setDate(date.getDate() + 1));
            var yesterday = new Date(date.setDate(date.getDate() - 2));
            expect(is.any.inLastYear(future, yesterday)).to.be.true;
            expect(is.any.inLastYear([future, yesterday])).to.be.true;
        });
        it("should return false if all given dates are not within last year", function() {
            var date = new Date();
            var future = new Date(date.setDate(date.getDate() + 1));
            var alsoFuture = new Date(date.setDate(date.getDate() + 1));
            expect(is.any.inLastYear(future, alsoFuture)).to.be.false;
            expect(is.any.inLastYear([future, alsoFuture])).to.be.false;
        });
    });
    describe("is.inNextWeek", function() {
        it("should return true if date is within next week", function() {
            var date = new Date();
            var future = new Date(date.setDate(date.getDate() + 1));
            expect(is.inNextWeek(future)).to.be.true;
        });
        it("should return false if date is not within next week", function() {
            var date = new Date();
            var yesterday = new Date(date.setDate(date.getDate() - 1));
            expect(is.inNextWeek(yesterday)).to.be.false;
        });
    });
    describe("is.not.inNextWeek", function() {
        it("should return false if date is within next week", function() {
            var date = new Date();
            var future = new Date(date.setDate(date.getDate() + 1));
            expect(is.not.inNextWeek(future)).to.be.false;
        });
        it("should return true if date is not within next week", function() {
            var date = new Date();
            var yesterday = new Date(date.setDate(date.getDate() - 1));
            expect(is.not.inNextWeek(yesterday)).to.be.true;
        });
    });
    describe("is.all.inNextWeek", function() {
        it("should return true if all given dates are within next week", function() {
            var date = new Date();
            var twoDaysLater = new Date(date.setDate(date.getDate() + 2));
            var threeDaysLater = new Date(date.setDate(date.getDate() + 1));
            expect(is.all.inNextWeek(twoDaysLater, threeDaysLater)).to.be.true;
            expect(is.all.inNextWeek([twoDaysLater, threeDaysLater])).to.be.true;
        });
        it("should return false if any given date is not within next week", function() {
            var date = new Date();
            var future = new Date(date.setDate(date.getDate() + 1));
            var yesterday = new Date(date.setDate(date.getDate() - 2));
            expect(is.all.inNextWeek(future, yesterday)).to.be.false;
            expect(is.all.inNextWeek([future, yesterday])).to.be.false;
        });
    });
    describe("is.any.inNextWeek", function() {
        it("should return true if any given date is within next week", function() {
            var date = new Date();
            var future = new Date(date.setDate(date.getDate() + 1));
            var yesterday = new Date(date.setDate(date.getDate() - 2));
            expect(is.any.inNextWeek(future, yesterday)).to.be.true;
            expect(is.any.inNextWeek([future, yesterday])).to.be.true;
        });
        it("should return false if all given dates are not within next week", function() {
            var date = new Date();
            var twoDaysAgo = new Date(date.setDate(date.getDate() - 2));
            var threeDaysAgo = new Date(date.setDate(date.getDate() - 1));
            expect(is.any.inNextWeek(twoDaysAgo, threeDaysAgo)).to.be.false;
            expect(is.any.inNextWeek([twoDaysAgo, threeDaysAgo])).to.be.false;
        });
    });
    describe("is.inNextMonth", function() {
        it("should return true if date is within next month", function() {
            var date = new Date();
            var aWeekLater = new Date(date.setDate(date.getDate() + 7));
            expect(is.inNextMonth(aWeekLater)).to.be.true;
        });
        it("should return false if date is not within next month", function() {
            var date = new Date();
            var yesterday = new Date(date.setDate(date.getDate() - 1));
            expect(is.inNextMonth(yesterday)).to.be.false;
        });
    });
    describe("is.not.inNextMonth", function() {
        it("should return false if date is within next month", function() {
            var date = new Date();
            var twoWeeksLater = new Date(date.setDate(date.getDate() + 14));
            expect(is.not.inNextMonth(twoWeeksLater)).to.be.false;
        });
        it("should return true if date is not within next month", function() {
            var date = new Date();
            var yesterday = new Date(date.setDate(date.getDate() - 1));
            expect(is.not.inNextMonth(yesterday)).to.be.true;
        });
    });
    describe("is.all.inNextMonth", function() {
        it("should return true if all given dates are within next month", function() {
            var date = new Date();
            var twoWeeksLater = new Date(date.setDate(date.getDate() + 14));
            var threeWeeksLater = new Date(date.setDate(date.getDate() + 7));
            expect(is.all.inNextMonth(twoWeeksLater, threeWeeksLater)).to.be.true;
            expect(is.all.inNextMonth([twoWeeksLater, threeWeeksLater])).to.be.true;
        });
        it("should return false if any given date is not within next month", function() {
            var date = new Date();
            var yesterday = new Date(date.setDate(date.getDate() - 1));
            var twoWeeksLater = new Date(date.setDate(date.getDate() + 15));
            expect(is.all.inNextMonth(yesterday, twoWeeksLater)).to.be.false;
            expect(is.all.inNextMonth([yesterday, twoWeeksLater])).to.be.false;
        });
    });
    describe("is.any.inNextMonth", function() {
        it("should return true if any given date is within next month", function() {
            var date = new Date();
            var future = new Date(date.setDate(date.getDate() + 1));
            var yesterday = new Date(date.setDate(date.getDate() - 2));
            expect(is.any.inNextMonth(future, yesterday)).to.be.true;
            expect(is.any.inNextMonth([future, yesterday])).to.be.true;
        });
        it("should return false if all given dates are not within next month", function() {
            var date = new Date();
            var past = new Date(date.setDate(date.getDate() - 1));
            var alsoPast = new Date(date.setDate(date.getDate() - 1));
            expect(is.any.inNextMonth(past, alsoPast)).to.be.false;
            expect(is.any.inNextMonth([past, alsoPast])).to.be.false;
        });
    });
    describe("is.inNextYear", function() {
        it("should return true if date is within next year", function() {
            var date = new Date();
            var threeMonthsLater = new Date(date.setMonth(date.getMonth() + 3));
            expect(is.inNextYear(threeMonthsLater)).to.be.true;
        });
        it("should return false if date is not within next year", function() {
            var date = new Date();
            var past = new Date(date.setDate(date.getDate() - 1));
            expect(is.inNextYear(past)).to.be.false;
        });
    });
    describe("is.not.inNextYear", function() {
        it("should return false if date is within next year", function() {
            var date = new Date();
            var sixMonthsLater = new Date(date.setMonth(date.getMonth() + 6));
            expect(is.not.inNextYear(sixMonthsLater)).to.be.false;
        });
        it("should return true if date is not within next year", function() {
            var date = new Date();
            var past = new Date(date.setDate(date.getDate() - 1));
            expect(is.not.inNextYear(past)).to.be.true;
        });
    });
    describe("is.all.inNextYear", function() {
        it("should return true if all given dates are within next year", function() {
            var date = new Date();
            var twoMonthsLater = new Date(date.setMonth(date.getMonth() + 2));
            var sixMonthsLater = new Date(date.setMonth(date.getMonth() + 4));
            expect(is.all.inNextYear(twoMonthsLater, sixMonthsLater)).to.be.true;
            expect(is.all.inNextYear([twoMonthsLater, sixMonthsLater])).to.be.true;
        });
        it("should return false if any given date is not within next year", function() {
            var date = new Date();
            var future = new Date(date.setDate(date.getDate() + 1));
            var twoWeeksAgo = new Date(date.setDate(date.getDate() - 15));
            expect(is.all.inNextYear(future, twoWeeksAgo)).to.be.false;
            expect(is.all.inNextYear([future, twoWeeksAgo])).to.be.false;
        });
    });
    describe("is.any.inNextYear", function() {
        it("should return true if any given date is within next year", function() {
            var date = new Date();
            var future = new Date(date.setDate(date.getDate() + 1));
            var yesterday = new Date(date.setDate(date.getDate() - 2));
            expect(is.any.inNextYear(future, yesterday)).to.be.true;
            expect(is.any.inNextYear([future, yesterday])).to.be.true;
        });
        it("should return false if all given dates are not within next year", function() {
            var date = new Date();
            var past = new Date(date.setDate(date.getDate() - 100));
            var alsoPast = new Date(date.setDate(date.getDate() - 150));
            expect(is.any.inNextYear(past, alsoPast)).to.be.false;
            expect(is.any.inNextYear([past, alsoPast])).to.be.false;
        });
    });
    describe("is.quarterOfYear", function() {
        it("should return true if given quarter number is dates' quarter", function() {
            var time = 1421572235303;
            var date = new Date(time);
            expect(is.quarterOfYear(date, 1)).to.be.true;
        });
        it("should return true if given quarter number is not dates' quarter", function() {
            var time = 1421572235303;
            var date = new Date(time);
            expect(is.quarterOfYear(date, 2)).to.be.false;
        });
    });
    describe("is.not.quarterOfYear", function() {
        it("should return false if given quarter number is dates' quarter", function() {
            var time = 1421572235303;
            var date = new Date(time);
            expect(is.not.quarterOfYear(date, 1)).to.be.false;
        });
        it("should return true if given quarter number is not dates' quarter", function() {
            var time = 1421572235303;
            var date = new Date(time);
            expect(is.not.quarterOfYear(date, 2)).to.be.true;
        });
    });
    describe("is.dayLightSavingTime", function() {
        it("should return false if given date is not in daylight saving time", function() {
            var time = 1421572235303;
            var date = new Date(time);
            expect(is.dayLightSavingTime(date)).to.be.false;
        });
        it("should return false if given date is in daylight saving time", function() {
            var time = 1421572235303;
            var date = new Date(time);
            var sixMonthsAgo = new Date(date.setMonth(date.getMonth() - 6));
            expect(is.dayLightSavingTime(sixMonthsAgo)).to.be.true;
        });
    });
    describe("is.all.dayLightSavingTime", function() {
        it("should return true if all given dates are in daylight saving time", function() {
            var time = 1421572235303;
            var date = new Date(time);
            var aDayAgo = new Date(date.setDate(date.getDate() - 1));
            expect(is.all.dayLightSavingTime(new Date(time), aDayAgo)).to.be.false;
            expect(is.all.dayLightSavingTime([new Date(time), aDayAgo])).to.be.false;
        });
        it("should return false if any given date is not in daylight saving time", function() {
            var time = 1421572235303;
            var date = new Date(time);
            var sixMonthsAgo = new Date(date.setMonth(date.getMonth() - 6));
            expect(is.all.dayLightSavingTime(new Date(time), sixMonthsAgo)).to.be.false;
            expect(is.all.dayLightSavingTime([new Date(time), sixMonthsAgo])).to.be.false;
        });
    });
    describe("is.any.dayLightSavingTime", function() {
        it("should return true if any given date is in daylight saving time", function() {
            var time = 1421572235303;
            var date = new Date(time);
            var sixMonthsAgo = new Date(date.setMonth(date.getMonth() - 6));
            expect(is.any.dayLightSavingTime(new Date(time), sixMonthsAgo)).to.be.true;
            expect(is.any.dayLightSavingTime([new Date(time), sixMonthsAgo])).to.be.true;
        });
        it("should return false if all given dates are not in daylight saving time", function() {
            var time = 1421572235303;
            var date = new Date(time);
            var aDayAgo = new Date(date.setDate(date.getDate() - 1));
            expect(is.any.dayLightSavingTime(new Date(time), aDayAgo)).to.be.false;
        });
    });
});
describe("object checks", function() {
    describe("is.propertyCount", function() {
        it("should return true if given count is objects' property count", function() {
            var obj = {
                test: 'test',
                is: 'is',
                good: 'good'
            };
            expect(is.propertyCount(obj, 3)).to.be.true;
        });
        it("should return false if given count is not objects' property count", function() {
            var obj = {
                test: 'test',
                is: 'is'
            };
            expect(is.propertyCount(obj, 3)).to.be.false;
        });
    });
    describe("is.not.propertyCount", function() {
        it("should return false if given count is objects' property count", function() {
            var obj = {
                test: 'test',
                is: 'is',
                good: 'good'
            };
            expect(is.not.propertyCount(obj, 3)).to.be.false;
        });
        it("should return true if given count is not objects' property count", function() {
            var obj = {
                test: 'test',
                is: 'is'
            };
            expect(is.not.propertyCount(obj, 3)).to.be.true;
        });
    });
    describe("is.propertyDefined", function() {
        it("should return true if given property is in objects", function() {
            var obj = {
                test: 'test',
                is: 'is',
                good: 'good'
            };
            expect(is.propertyDefined(obj, 'good')).to.be.true;
        });
        it("should return false if given property is not in objects", function() {
            var obj = {
                test: 'test',
                is: 'is'
            };
            expect(is.propertyDefined(obj, 'good')).to.be.false;
        });
    });
    describe("is.not.propertyDefined", function() {
        it("should return false if given property is in objects", function() {
            var obj = {
                test: 'test',
                is: 'is',
                good: 'good'
            };
            expect(is.not.propertyDefined(obj, 'good')).to.be.false;
        });
        it("should return true if given property is not in objects", function() {
            var obj = {
                test: 'test',
                is: 'is'
            };
            expect(is.not.propertyDefined(obj, 'good')).to.be.true;
        });
    });
    describe("is.windowObject", function() {
        it("should return true if given object is window object", function() {
            expect(is.windowObject(window)).to.be.true;
        });
        it("should return false if given object is not window object", function() {
            expect(is.windowObject({})).to.be.false;
        });
    });
    describe("is.not.windowObject", function() {
        it("should return false if given object is window object", function() {
            expect(is.not.windowObject(window)).to.be.false;
        });
        it("should return true if given object is nor window object", function() {
            expect(is.not.windowObject({})).to.be.true;
        });
    });
    describe("is.all.windowObject", function() {
        it("should return true if all given objects are window object", function() {
            expect(is.all.windowObject(window, window)).to.be.true;
            expect(is.all.windowObject([window, window])).to.be.true;
        });
        it("should return false if any given object is not window object", function() {
            expect(is.all.windowObject({}, window)).to.be.false;
            expect(is.all.windowObject([{}, window])).to.be.false;
        });
    });
    describe("is.any.windowObject", function() {
        it("should return true if any given object is window object", function() {
            expect(is.any.windowObject(window, {})).to.be.true;
            expect(is.any.windowObject([window, {}])).to.be.true;
        });
        it("should return false if all given objects are not window object", function() {
            expect(is.any.windowObject({}, {})).to.be.false;
            expect(is.any.windowObject([{}, {}])).to.be.false;
        });
    });
    describe("is.domNode", function() {
        it("should return true if given object is a DOM node", function() {
            var obj = document.createElement('div');
            expect(is.domNode(obj)).to.be.true;
        });
        it("should return false if given object is not a DOM node", function() {
            expect(is.domNode({})).to.be.false;
        });
    });
    describe("is.not.domNode", function() {
        it("should return false if given object is a DOM node", function() {
            var obj = document.createElement('span');
            expect(is.not.domNode(obj)).to.be.false;
        });
        it("should return true if given object is not a DOM node", function() {
            expect(is.not.domNode({})).to.be.true;
        });
    });
    describe("is.any.domNode", function() {
        it("should return true if any given object is a DOM node", function() {
            var obj = document.createElement('blockquote');
            expect(is.any.domNode(window, {}, obj)).to.be.true;
            expect(is.any.domNode([window, {}, obj])).to.be.true;
        });
        it("should return false if all given objects are not DOM nodes", function() {
            expect(is.any.domNode({}, {})).to.be.false;
            expect(is.any.domNode([{}, {}])).to.be.false;
        });
    });
    describe("is.all.domNode", function() {
        it("should return true if all given objects are DOM nodes", function() {
            var obj1 = document.createElement('em');
            var obj2 = document.createElement('a');
            expect(is.all.domNode(obj1, obj2)).to.be.true;
            expect(is.all.domNode([obj1, obj2])).to.be.true;
        });
        it("should return false if any given object is not a DOM node", function() {
            expect(is.all.domNode({}, window)).to.be.false;
            expect(is.all.domNode([{}, window])).to.be.false;
        });
    });
});
describe("array checks", function() {
    describe("is.sorted", function() {
        it("should return true if given array is sorted", function() {
            var arr = [1, 2, 3, 4, 5];
            expect(is.sorted(arr)).to.be.true;
        });
        it("should return false if given array is not sorted", function() {
            var arr = [1, 2, 3, 5, 4];
            expect(is.sorted(arr)).to.be.false;
        });
    });
    describe("is.not.sorted", function() {
        it("should return false if given array is sorted", function() {
            var arr = [1, 2, 3, 4, 5];
            expect(is.not.sorted(arr)).to.be.false;
        });
        it("should return true if given array is not sorted", function() {
            var arr = [1, 2, 3, 5, 4];
            expect(is.not.sorted(arr)).to.be.true;
        });
    });
    describe("is.all.sorted", function() {
        it("should return true if all given arrays are sorted", function() {
            var arr1 = [1, 2, 3, 4, 5];
            var arr2 = [5, 6, 7, 8, 9];
            expect(is.all.sorted(arr1, arr2)).to.be.true;
            expect(is.all.sorted([arr1, arr2])).to.be.true;
        });
        it("should return false if any given array is not sorted", function() {
            var arr1 = [1, 2, 3, 4, 5];
            var arr2 = [5, 6, 7, 9, 8];
            expect(is.all.sorted(arr1, arr2)).to.be.false;
            expect(is.all.sorted([arr1, arr2])).to.be.false;
        });
    });
    describe("is.any.sorted", function() {
        it("should return true if any given array is sorted", function() {
            var arr1 = [1, 2, 3, 4, 5];
            var arr2 = [10, 6, 7, 8, 9];
            expect(is.any.sorted(arr1, arr2)).to.be.true;
            expect(is.any.sorted([arr1, arr2])).to.be.true;
        });
        it("should return false if all given arrays are not sorted", function() {
            var arr1 = [6, 2, 3, 4, 5];
            var arr2 = [9, 5, 6, 7, 8];
            expect(is.any.sorted(arr1, arr2)).to.be.false;
            expect(is.any.sorted([arr1, arr2])).to.be.false;
        });
    });
    describe("is.inArray", function()  {
        it("should return true if the item is in the array", function() {
            var val = 3;
            var arr = [1, 4, 6, 7, 3];
            expect(is.inArray(val, arr)).to.be.true;
        });
        it("should return false if the item is not in the array", function() {
            var val = 2;
            var arr = [1, 4, 6, 7, 3];
            expect(is.inArray(val, arr)).to.be.false;
        });
    });
    describe("is.not.inArray", function()  {
        it("should return false if the item is in the array", function() {
            var val = 3;
            var arr = [1, 4, 6, 7, 3];
            expect(is.not.inArray(val, arr)).to.be.false;
        });
        it("should return true if the item is not in the array", function() {
            var val = 2;
            var arr = [1, 4, 6, 7, 3];
            expect(is.not.inArray(val, arr)).to.be.true;
        });
    });
});
