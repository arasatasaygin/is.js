var expect = chai.expect;
 
describe("is", function() {
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
});
