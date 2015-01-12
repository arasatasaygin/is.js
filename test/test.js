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
        it("should return false if aby passed parameter type is not null", function() {
            var notNull = 'test';
            expect(is.all.null(null, notNull)).to.be.false;
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
        it("should return true if passed parameter type is object", function() {
            expect(is.all.object({}, {})).to.be.true;
        });
        it("should return false if passed parameter type is not object", function() {
            var notObject = 'test';
            expect(is.all.object({}, notObject)).to.be.false;
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
});
