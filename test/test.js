var expect = chai.expect;
 
describe("is", function() {
    describe("arguments type check", function() {
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
});
