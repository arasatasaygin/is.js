;(function(root) {    // eslint-disable-line no-extra-semi
    var _ = root._ || require('lodash'),
        document = root.document,
        expect = _.get(root, 'chai.expect') || require('chai').expect,
        is = root.is || require('../is'),
        window = root.window;

    function checkApi(name, list) {
        list || (list = ['all', 'any', 'not']);
        _.each(['all', 'any', 'not'], function(api) {
            var exists = _.includes(list, api);
            describe('is.' + api + '.' + name, function()  {
                it('should ' + (exists ? '' : 'not ') + 'exist', function() {
                    expect(is[api][name]).to[exists ? 'be': 'not'].exist;
                });
            });
        });
    }

    describe('type checks', function() {
        describe('is.arguments', function() {
            it('should return true if passed parameter type is arguments', function() {
                var getArguments = function() {
                    return arguments;
                };
                var args = getArguments('test');
                expect(is.arguments(args)).to.be.true;
            });
            it('should return false if passed parameter type is not arguments', function() {
                var notArgs = ['test'];
                expect(is.arguments(notArgs)).to.be.false;
            });
        });
        checkApi('arguments');

        describe('is.array', function() {
            it('should return true if passed parameter type is array', function() {
                var array = ['test'];
                expect(is.array(array)).to.be.true;
            });
            it('should return false if passed parameter type is not array', function() {
                var notArray = 'test';
                expect(is.array(notArray)).to.be.false;
            });
        });
        checkApi('array');

        describe('is.boolean', function() {
            it('should return true if passed parameter type is boolean', function() {
                var bool = true;
                expect(is.boolean(bool)).to.be.true;
            });
            it('should return false if passed parameter type is not boolean', function() {
                var notBool = 'test';
                expect(is.boolean(notBool)).to.be.false;
            });
        });
        checkApi('boolean');

        describe('is.date', function() {
            it('should return true if passed parameter type is date', function() {
                var date = new Date();
                expect(is.date(date)).to.be.true;
            });
            it('should return false if passed parameter type is not date', function() {
                var notDate = 'test';
                expect(is.date(notDate)).to.be.false;
            });
        });
        checkApi('date');

        describe('is.error', function() {
            it('should return true if passed parameter type is error', function() {
                var error = new Error();
                expect(is.error(error)).to.be.true;
            });
            it('should return false if passed parameter type is not error', function() {
                var notError = 'test';
                expect(is.error(notError)).to.be.false;
            });
        });
        checkApi('error');

        describe('is.function', function() {
            it('should return true if passed parameter type is function', function() {
                expect(is.function(is.function)).to.be.true;
            });
            it('should return false if passed parameter type is not function', function() {
                var notFunction = 'test';
                expect(is.function(notFunction)).to.be.false;
            });
        });
        checkApi('function');

        describe('is.nan', function() {
            it('should return true if passed parameter type is NaN', function() {
                expect(is.nan(NaN)).to.be.true;
            });
            it('should return false if passed parameter type is not NaN', function() {
                var notNaN = 'test';
                expect(is.nan(notNaN)).to.be.false;
            });
        });
        checkApi('nan');

        describe('is.null', function() {
            it('should return true if passed parameter type is null', function() {
                expect(is.null(null)).to.be.true;
            });
            it('should return false if passed parameter type is not null', function() {
                var notNull = 'test';
                expect(is.null(notNull)).to.be.false;
            });
        });
        checkApi('null');

        describe('is.number', function() {
            it('should return true if passed parameter type is number', function() {
                expect(is.number(1)).to.be.true;
            });
            it('should return false if passed parameter type is not number', function() {
                var notNumber = 'test';
                expect(is.number(notNumber)).to.be.false;
            });
            it('should return false if passed parameter is NaN', function() {
                expect(is.number(NaN)).to.be.false;
            })
        });
        checkApi('number');

        describe('is.object', function() {
            it('should return true if passed parameter type is object', function() {
                expect(is.object({})).to.be.true;
            });
            it('should return false if passed parameter type is not object', function() {
                var notObject = 'test';
                expect(is.object(notObject)).to.be.false;
            });
        });
        checkApi('object');

        describe('is.json',function() {
            it('should return true if passed parameter type is a json object', function() {
                expect(is.json({})).to.be.true;
            });
            it('should return false if passed parameter type is not a json object', function() {
                var notObject = 'test';
                expect(is.json(notObject)).to.be.false;
            });
        });
        checkApi('json');

        describe('is.regexp', function() {
            it('should return true if passed parameter type is regexp', function() {
                var regexp = new RegExp();
                expect(is.regexp(regexp)).to.be.true;
            });
            it('should return false if passed parameter type is not regexp', function() {
                var notRegexp = 'test';
                expect(is.regexp(notRegexp)).to.be.false;
            });
        });
        checkApi('regexp');

        describe('is.sameType', function() {
            it('should return true if passed parameter types are same', function() {
                expect(is.sameType(1, 2)).to.be.true;
                expect(is.sameType('test', 'test')).to.be.true;
            });
            it('should return false if passed parameter types are not same', function() {
                expect(is.sameType(1, 'test')).to.be.false;
            });
        });
        checkApi('sameType', ['not']);

        describe('is.char', function() {
            it('should return true if passed parameter type is char', function() {
                expect(is.char('t')).to.be.true;
            });
            it('should return false if passed parameter type is not a char', function() {
                expect(is.char('test')).to.be.false;
            });
        });
        checkApi('char');

        describe('is.string', function() {
            it('should return true if passed parameter type is string', function() {
                expect(is.string('test')).to.be.true;
            });
            it('should return false if passed parameter type is not string', function() {
                expect(is.string(1)).to.be.false;
            });
        });
        checkApi('string');

        describe('is.undefined', function() {
            it('should return true if passed parameter type is undefined', function() {
                expect(is.undefined(undefined)).to.be.true;
            });
            it('should return false if passed parameter type is not undefined', function() {
                expect(is.undefined(null)).to.be.false;
                expect(is.undefined('test')).to.be.false;
            });
        });
        checkApi('undefined');
    });

    describe('presence checks', function() {
        describe('is.empty', function() {
            it('should return true if given array is empty', function() {
                expect(is.empty([])).to.be.true;
            });
            it('should return false if given object is not empty', function() {
                expect(is.empty({test: 'test'})).to.be.false;
            });
        });
        checkApi('empty');

        describe('is.existy', function() {
            it('should return false if given value is null', function() {
                expect(is.existy(null)).to.be.false;
            });
            it('should return false if given value is undefined', function() {
                expect(is.existy(undefined)).to.be.false;
            });
            it('should return true if given value is not null or undefined', function() {
                expect(is.existy('test')).to.be.true;
            });
        });
        checkApi('existy');

        describe('is.truthy', function() {
            it('should return true if given value is truthy', function() {
                expect(is.truthy('test')).to.be.true;
            });
            it('should return false if given value is not truthy', function() {
                expect(is.truthy(undefined)).to.be.false;
            });
            it('should return false if given value is false', function() {
                expect(is.truthy(false)).to.be.false;
            });
        });
        checkApi('truthy');

        describe('is.falsy', function() {
            it('should return false if given value is truthy', function() {
                expect(is.falsy('test')).to.be.false;
            });
            it('should return true if given value is falsy', function() {
                expect(is.falsy(undefined)).to.be.true;
            });
            it('should return true if given value is false', function() {
                expect(is.falsy(false)).to.be.true;
            });
        });
        checkApi('falsy');

        describe('is.space', function() {
            it('should return false if given value is not string', function() {
                expect(is.space(1)).to.be.false;
            });
            it('should return true if given value is space', function() {
                expect(is.space(' ')).to.be.true;
            });
        });
        checkApi('space');
    });

    describe('arithmetic checks', function() {
        describe('is.equal', function() {
            it('should return true if given two numbers are equal', function() {
                expect(is.equal(3, 1 + 2)).to.be.true;
            });
            it('should return false if given two numbers are not equal', function() {
                expect(is.equal(3, 2)).to.be.false;
            });
            it('should return true if given two strings are same', function() {
                expect(is.equal('test', 'test')).to.be.true;
            });
            it('should return false if given two strings are not same', function() {
                expect(is.equal('test', 'test2')).to.be.false;
            });
            it('should return true if given two boolean are same', function() {
                expect(is.equal(false, false)).to.be.true;
            });
            it('should return false if given two boolean are not same', function() {
                expect(is.equal(false, true)).to.be.false;
            });
        });
        checkApi('equal', ['not']);

        describe('is.even', function() {
            it('should return true if given number is even', function() {
                expect(is.even(2)).to.be.true;
            });
            it('should return false if given number is not even', function() {
                expect(is.even(3)).to.be.false;
            });
            it('should return false if given number is not integer', function() {
                expect(is.even(2.5)).to.be.false;
            });
        });
        checkApi('even');

        describe('is.odd', function() {
            it('should return true if given number is odd', function() {
                expect(is.odd(3)).to.be.true;
            });
            it('should return true if given number is negative odd', function() {
                expect(is.odd(-3)).to.be.true;
            });
            it('should return false if given number is not odd', function() {
                expect(is.odd(2)).to.be.false;
            });
            it('should return false if given number is not integer', function() {
                expect(is.odd(2.5)).to.be.false;
            });
        });
        checkApi('odd');

        describe('is.positive', function() {
            it('should return true if given number is positive', function() {
                expect(is.positive(3)).to.be.true;
            });
            it('should return false if given number is not positive', function() {
                expect(is.positive(-2)).to.be.false;
            });
        });
        checkApi('positive');

        describe('is.negative', function() {
            it('should return true if given number is negative', function() {
                expect(is.negative(-3)).to.be.true;
            });
            it('should return false if given number is not negative', function() {
                expect(is.negative(2)).to.be.false;
            });
        });
        checkApi('negative');

        describe('is.above', function() {
            it('should return true if given number is above minimum value', function() {
                expect(is.above(13, 12)).to.be.true;
            });
            it('should return false if given number is not above minimum value', function() {
                expect(is.above(12, 13)).to.be.false;
            });
        });
        checkApi('above', ['not']);

        describe('is.under', function() {
            it('should return true if given number is under maximum value', function() {
                expect(is.under(11, 12)).to.be.true;
            });
            it('should return false if given number is not under maximum value', function() {
                expect(is.under(12, 11)).to.be.false;
            });
        });
        checkApi('under', ['not']);

        describe('is.within', function() {
            it('should return true if given number is within minimum and maximum values', function() {
                expect(is.within(10, 5, 15)).to.be.true;
            });
            it('should return false if given number is not within minimum and maximum values', function() {
                expect(is.within(20, 5, 15)).to.be.false;
            });
        });
        checkApi('within', ['not']);

        describe('is.decimal', function() {
            it('should return true if given number is decimal', function() {
                expect(is.decimal(4.2)).to.be.true;
            });
            it('should return false if given number is not decimal', function() {
                expect(is.decimal(2)).to.be.false;
            });
        });
        checkApi('decimal');

        describe('is.integer', function() {
            it('should return true if given number is integer', function() {
                expect(is.integer(4)).to.be.true;
            });
            it('should return false if given number is not integer', function() {
                expect(is.integer(2.2)).to.be.false;
            });
        });
        checkApi('integer');

        describe('is.finite', function() {
            it('should return true if given number is finite', function() {
                expect(is.finite(4)).to.be.true;
            });
            it('should return false if given number is not finite', function() {
                expect(is.finite(Infinity)).to.be.false;
            });
        });
        checkApi('finite');

        describe('is.infinite', function() {
            it('should return true if given number is infinite', function() {
                expect(is.infinite(Infinity)).to.be.true;
            });
            it('should return false if given number is not infinite', function() {
                expect(is.infinite(1)).to.be.false;
                expect(is.infinite(NaN)).to.be.false;
            });
        });
        checkApi('infinite');
    });

    describe('regexp checks', function() {
        describe('is.url', function() {
            it('should return true if given value is url', function() {
                expect(is.url('http://www.test.com')).to.be.true;
            });
            it('should return false if given value is not url', function() {
                expect(is.url(1)).to.be.false;
            });
            it('should return false if the given value is null', function() {
                expect(is.url(null)).to.be.false;
            });
            it('should return false if the given value is undefined', function() {
                expect(is.url(undefined)).to.be.false;
            });
        });
        checkApi('url');

        describe('is.email', function() {
            it('should return true if given value is email', function() {
                expect(is.email('test@test.com')).to.be.true;
            });
            it('should return false if given value is not email', function() {
                expect(is.email('test@test')).to.be.false;
            });
            it('should return false if the given value is null', function() {
                expect(is.email(null)).to.be.false;
            });
            it('should return false if the given value is undefined', function() {
                expect(is.email(undefined)).to.be.false;
            });
        });
        checkApi('email');

        describe('is.creditCard', function() {
            it('should return true if given value is credit card', function() {
                expect(is.creditCard(378282246310005)).to.be.true;
            });
            it('should return false if given value is not credit card', function() {
                expect(is.creditCard(123)).to.be.false;
            });
            it('should return false if the given value is null', function() {
                expect(is.creditCard(null)).to.be.false;
            });
            it('should return false if the given value is undefined', function() {
                expect(is.creditCard(undefined)).to.be.false;
            });
        });
        checkApi('creditCard');

        describe('is.alphaNumeric', function() {
            it('should return true if given value is alpha numeric', function() {
                expect(is.alphaNumeric(123)).to.be.true;
            });
            it('should return false if given value is not alpha numeric', function() {
                expect(is.alphaNumeric('*?')).to.be.false;
            });
            it('should return false if the given value is null', function() {
                expect(is.alphaNumeric(null)).to.be.false;
            });
            it('should return false if the given value is undefined', function() {
                expect(is.alphaNumeric(undefined)).to.be.false;
            });
        });
        checkApi('alphaNumeric');

        describe('is.timeString', function() {
            it('should return true if given value is time string', function() {
                expect(is.timeString('13:45:30')).to.be.true;
            });
            it('should return false if given value is not time string', function() {
                expect(is.timeString('12:12:90')).to.be.false;
            });
            it('should return false if the given value is null', function() {
                expect(is.timeString(null)).to.be.false;
            });
            it('should return false if the given value is undefined', function() {
                expect(is.timeString(undefined)).to.be.false;
            });
        });
        checkApi('timeString');

        describe('is.dateString', function() {
            it('should return true if given value is date string', function() {
                expect(is.dateString('11/11/2011')).to.be.true;
                expect(is.dateString('10-21-2012')).to.be.true;
            });
            it('should return false if given value is not date string', function() {
                expect(is.dateString('1')).to.be.false;
                expect(is.dateString('10/21-2012')).to.be.false;
            });
             it('should return false if the given value is null', function() {
                expect(is.dateString(null)).to.be.false;
            });
            it('should return false if the given value is undefined', function() {
                expect(is.dateString(undefined)).to.be.false;
            });
        });
        checkApi('dateString');

        describe('is.usZipCode', function() {
            it('should return true if given value is US zip code', function() {
                expect(is.usZipCode('02201-1020')).to.be.true;
            });
            it('should return false if given value is not US zip code', function() {
                expect(is.usZipCode('1')).to.be.false;
            });
            it('should return false if the given value is null', function() {
                expect(is.usZipCode(null)).to.be.false;
            });
            it('should return false if the given value is undefined', function() {
                expect(is.usZipCode(undefined)).to.be.false;
            });
        });
        checkApi('usZipCode');

        describe('is.caPostalCode', function() {
            it('should return true if given value is Canada postal code', function() {
                expect(is.caPostalCode('L8V3Y1')).to.be.true;
            });
            it('should return true if given value is Canada postal code with space', function() {
                expect(is.caPostalCode('L8V 3Y1')).to.be.true;
            });
            it('should return false if given value is not Canada postal code', function() {
                expect(is.caPostalCode('1')).to.be.false;
            });
            it('should return false if the given value is null', function() {
                expect(is.caPostalCode(null)).to.be.false;
            });
            it('should return false if the given value is undefined', function() {
                expect(is.caPostalCode(undefined)).to.be.false;
            });
        });
        checkApi('caPostalCode');

        describe('is.ukPostCode', function() {
            it('should return true if given value is UK post code', function() {
                expect(is.ukPostCode('B184BJ')).to.be.true;
            });
            it('should return false if given value is not UK post code', function() {
                expect(is.ukPostCode('1')).to.be.false;
            });
            it('should return false if the given value is null', function() {
                expect(is.ukPostCode(null)).to.be.false;
            });
            it('should return false if the given value is undefined', function() {
                expect(is.ukPostCode(undefined)).to.be.false;
            });
        });
        checkApi('ukPostCode');

        describe('is.nanpPhone', function() {
            it('should return true if given value is nanpPhone', function() {
                expect(is.nanpPhone('609-555-0175')).to.be.true;
            });
            it('should return false if given value is not nanpPhone', function() {
                expect(is.nanpPhone('1')).to.be.false;
            });
            it('should return false if the given value is null', function() {
                expect(is.nanpPhone(null)).to.be.false;
            });
            it('should return false if the given value is undefined', function() {
                expect(is.nanpPhone(undefined)).to.be.false;
            });
        });
        checkApi('nanpPhone');

        describe('is.eppPhone', function() {
            it('should return true if given value is eppPhone', function() {
                expect(is.eppPhone('+90.2322456789')).to.be.true;
            });
            it('should return false if given value is not eppPhone', function() {
                expect(is.eppPhone('1')).to.be.false;
            });
            it('should return false if the given value is null', function() {
                expect(is.eppPhone(null)).to.be.false;
            });
            it('should return false if the given value is undefined', function() {
                expect(is.eppPhone(undefined)).to.be.false;
            });
        });
        checkApi('eppPhone');

        describe('is.socialSecurityNumber', function() {
            it('should return true if given value is socialSecurityNumber', function() {
                expect(is.socialSecurityNumber('017-90-7890')).to.be.true;
                expect(is.socialSecurityNumber('017907890')).to.be.true;
            });
            it('should return false if given value is not socialSecurityNumber', function() {
                expect(is.socialSecurityNumber('1')).to.be.false;
            });
            it('should return false if the given value is null', function() {
                expect(is.socialSecurityNumber(null)).to.be.false;
            });
            it('should return false if the given value is undefined', function() {
                expect(is.socialSecurityNumber(undefined)).to.be.false;
            });
        });
        checkApi('socialSecurityNumber');

        describe('is.affirmative', function() {
            it('should return true if given value is affirmative', function() {
                expect(is.affirmative('yes')).to.be.true;
            });
            it('should return false if given value is not affirmative', function() {
                expect(is.affirmative('no')).to.be.false;
            });
            it('should return false if the given value is null', function() {
                expect(is.affirmative(null)).to.be.false;
            });
            it('should return false if the given value is undefined', function() {
                expect(is.affirmative(undefined)).to.be.false;
            });
        });
        checkApi('affirmative');

        describe('is.hexadecimal', function() {
            it('should return true if given value is hexadecimal', function() {
                expect(is.hexadecimal('ff')).to.be.true;
                expect(is.hexadecimal('0xff')).to.be.true;
            });
            it('should return false if given value is not hexadecimal', function() {
                expect(is.hexadecimal(0.287)).to.be.false;
            });
            it('should return false if the given value is null', function() {
                expect(is.hexadecimal(null)).to.be.false;
            });
            it('should return false if the given value is undefined', function() {
                expect(is.hexadecimal(undefined)).to.be.false;
            });
        });
        checkApi('hexadecimal');

        describe('is.hexColor', function() {
            it('should return true if given value is hexColor', function() {
                expect(is.hexColor('#333')).to.be.true;
            });
            it('should return false if given value is not hexColor', function() {
                expect(is.hexColor(0.287)).to.be.false;
            });
            it('should return false if the given value is null', function() {
                expect(is.hexColor(null)).to.be.false;
            });
            it('should return false if the given value is undefined', function() {
                expect(is.hexColor(undefined)).to.be.false;
            });
        });
        checkApi('hexColor');

        describe('is.ip', function() {
            it('should return true if given value is a valid IP address', function() {
                expect(is.ip('2001:DB8:0:0:1::1')).to.be.true;
            });
            it('should return false if given value is not a valid IP address', function() {
                expect(is.ip('985.12.3.4')).to.be.false;
            });
            it('should return false if the given value is null', function() {
                expect(is.ip(null)).to.be.false;
            });
            it('should return false if the given value is undefined', function() {
                expect(is.ip(undefined)).to.be.false;
            });
        });
        checkApi('ip');

        describe('is.ipv4', function() {
            it('should return true if given value is a valid IPv4 address', function() {
                expect(is.ipv4('198.12.3.142')).to.be.true;
            });
            it('should return false if given value is not a valid IPv4 address', function() {
                expect(is.ipv4('985.12.3.4')).to.be.false;
            });
            it('should return false if the given value is null', function() {
                expect(is.ipv4(null)).to.be.false;
            });
            it('should return false if the given value is undefined', function() {
                expect(is.ipv4(undefined)).to.be.false;
            });
        });
        checkApi('ipv4');

        describe('is.ipv6', function() {
            it('should return true if given value is a valid IPv6 address', function() {
                expect(is.ipv6('2001:DB8:0:0:1::1')).to.be.true;
            });
            it('should return false if given value is not a valid IPv6 address', function() {
                expect(is.ipv6('985.12.3.4')).to.be.false;
            });
            it('should return false if the given value is null', function() {
                expect(is.ipv6(null)).to.be.false;
            });
            it('should return false if the given value is undefined', function() {
                expect(is.ipv6(undefined)).to.be.false;
            });
        });
        checkApi('ipv6');
    });

    describe('string checks', function() {
        describe('is.include', function() {
            it('should return true if given string contains substring', function() {
                expect(is.include('test.com', 't.com')).to.be.true;
            });
            it('should return false if given string does not contain substring', function() {
                expect(is.include('test.com', 'nope')).to.be.false;
            });
        });
        checkApi('include', ['not']);

        describe('is.upperCase', function() {
            it('should return true if given string is uppercase', function() {
                expect(is.upperCase('TEST')).to.be.true;
            });
            it('should return false if given string is not uppercase', function() {
                expect(is.upperCase('test')).to.be.false;
            });
        });
        checkApi('upperCase');

        describe('is.lowerCase', function() {
            it('should return true if given string is lowerCase', function() {
                expect(is.lowerCase('test')).to.be.true;
            });
            it('should return false if given string is not lowerCase', function() {
                expect(is.lowerCase('TEST')).to.be.false;
            });
        });
        checkApi('lowerCase');

        describe('is.startWith', function() {
            it('should return true if given string starts with substring', function() {
                expect(is.startWith('test', 'te')).to.be.true;
            });
            it('should return false if given string does not start with substring', function() {
                expect(is.startWith('test', 'st')).to.be.false;
            });
        });
        checkApi('startWith', ['not']);

        describe('is.endWith', function() {
            it('should return true if given string ends with substring', function() {
                expect(is.endWith('test', 't')).to.be.true;
                expect(is.endWith('test', 'st')).to.be.true;
            });
            it('should return false if given string does not end with substring', function() {
                expect(is.endWith('test', 'te')).to.be.false;
            });
            it('should prevent true return if endWith is not present in the string', function() {
                expect(is.endWith('id', '_id')).to.be.false;
            });
        });
        checkApi('endWith', ['not']);

        describe('is.capitalized', function() {
            it('should return true if given string is capitalized', function() {
                expect(is.capitalized('Test')).to.be.true;
            });
            it('should return false if given string is not capitalized', function() {
                expect(is.capitalized('test')).to.be.false;
            });
            it('should return true if words are capitalized', function() {
                expect(is.capitalized('Test Is Good')).to.be.true;
                expect(is.capitalized('Test   Is   Good')).to.be.true;
            });
            it('should return false if words are not capitalized', function() {
                expect(is.capitalized('Test is good')).to.be.false;
            });
        });
        checkApi('capitalized');

        describe('is.palindrome', function() {
            it('should return true if given string is palindrome', function() {
                expect(is.palindrome('abba')).to.be.true;
                expect(is.palindrome('testset')).to.be.true;
                expect(is.palindrome('A man, a plan, a canal - Panama!')).to.be.true;
            });
            it('should return false if given string is not palindrome', function() {
                expect(is.palindrome('test')).to.be.false;
            });
        });
        checkApi('palindrome');
    });

    describe('time checks', function() {
        describe('is.today', function() {
            it('should return true if given date is today', function() {
                var date = new Date();
                expect(is.today(date)).to.be.true;
            });
            it('should return false if given date is not today', function() {
                var date = new Date();
                expect(is.today(date.setDate(date.getDate() - 1))).to.be.false;
            });
        });
        checkApi('today');

        describe('is.yesterday', function() {
            it('should return true if given date is yesterday', function() {
                var date = new Date();
                var yesterday = new Date(date.setDate(date.getDate() - 1));
                expect(is.yesterday(yesterday)).to.be.true;
            });
            it('should return false if given date is not yesterday', function() {
                var date = new Date();
                expect(is.yesterday(date)).to.be.false;
            });
        });
        checkApi('yesterday');

        describe('is.tomorrow', function() {
            it('should return true if given date is tomorrow', function() {
                var date = new Date();
                var tomorrow = new Date(date.setDate(date.getDate() + 1));
                expect(is.tomorrow(tomorrow)).to.be.true;
            });
            it('should return false if given date is not tomorrow', function() {
                var date = new Date();
                expect(is.tomorrow(date)).to.be.false;
            });
        });
        checkApi('tomorrow');

        describe('is.past', function() {
            it('should return true if given date is past', function() {
                var date = new Date();
                var past = new Date(date.setDate(date.getDate() - 1));
                expect(is.past(past)).to.be.true;
            });
            it('should return false if given date is not past', function() {
                var date = new Date();
                expect(is.past(date)).to.be.false;
            });
        });
        checkApi('past');

        describe('is.future', function() {
            it('should return true if given date is future', function() {
                var date = new Date();
                var future = new Date(date.setDate(date.getDate() + 1));
                expect(is.future(future)).to.be.true;
            });
            it('should return false if given date is not future', function() {
                var date = new Date();
                var past = new Date(date.setDate(date.getDate() - 1));
                expect(is.future(date)).to.be.false;
                expect(is.future(past)).to.be.false;
            });
        });
        checkApi('future');

        describe('is.day', function() {
            it('should return true if given day string is the day of the date object', function() {
                var time = 1421572235303;
                expect(is.day(new Date(time), 'sunday')).to.be.true;
            });
            it('should return false if given day string is not the day of the date object', function() {
                var time = 1421572235303;
                expect(is.day(new Date(time), 'monday')).to.be.false;
            });
        });
        checkApi('day', ['not']);

        describe('is.month', function() {
            it('should return true if given month string is the month of the date object', function() {
                var time = 1421572235303;
                expect(is.month(new Date(time), 'january')).to.be.true;
            });
            it('should return false if given month string is not the month of the date object', function() {
                var time = 1421572235303;
                expect(is.month(new Date(time), 'february')).to.be.false;
            });
        });
        checkApi('month', ['not']);

        describe('is.year', function() {
            it('should return true if given year string is the year of the date object', function() {
                var time = 1421572235303;
                expect(is.year(new Date(time), 2015)).to.be.true;
            });
            it('should return false if given year string is not the year of the date object', function() {
                var time = 1421572235303;
                expect(is.year(new Date(time), 2016)).to.be.false;
            });
        });
        checkApi('year', ['not']);

        describe('is.leapYear', function() {
            it('should return true if given year is a leap year', function() {
                expect(is.leapYear(2016)).to.be.true;
            });
            it('should return false if given year is not a leap year', function() {
                expect(is.leapYear(2015)).to.be.false;
            });
        });
        checkApi('leapYear');

        describe('is.weekend', function() {
            it('should return true if given date is weekend', function() {
                var time = 1421572235303;
                expect(is.weekend(new Date(time))).to.be.true;
            });
            it('should return false if given date is not weekend', function() {
                var time = 1421572235303;
                var date = new Date(time);
                var friday = new Date(date.setDate(date.getDate() - 2));
                expect(is.weekend(friday)).to.be.false;
            });
        });
        checkApi('weekend');

        describe('is.weekday', function() {
            it('should return true if given date is weekday', function() {
                var time = 1421572235303;
                var date = new Date(time);
                var friday = new Date(date.setDate(date.getDate() - 2));
                expect(is.weekday(friday)).to.be.true;
            });
            it('should return false if given date is not weekday', function() {
                var time = 1421572235303;
                var sunday = new Date(time);
                expect(is.weekday(sunday)).to.be.false;
            });
        });
        checkApi('weekday');

        describe('is.inDateRange', function() {
            it('should return true if date is within given start date and end date', function() {
                var today = new Date();
                var date = new Date();
                var tomorrow = new Date(date.setDate(date.getDate() + 1));
                var yesterday = new Date(date.setDate(date.getDate() - 2));
                expect(is.inDateRange(today, yesterday, tomorrow)).to.be.true;
            });
            it('should return false if date is not within given start date and end date', function() {
                var today = new Date();
                var date = new Date();
                var tomorrow = new Date(date.setDate(date.getDate() + 1));
                var yesterday = new Date(date.setDate(date.getDate() - 2));
                expect(is.inDateRange(yesterday, today, tomorrow)).to.be.false;
            });
        });
        checkApi('inDateRange', ['not']);

        describe('is.inLastWeek', function() {
            it('should return true if date is within last week', function() {
                var date = new Date();
                var twoDaysAgo = new Date(date.setDate(date.getDate() - 2));
                expect(is.inLastWeek(twoDaysAgo)).to.be.true;
            });
            it('should return false if date is not within last week', function() {
                var date = new Date();
                var eightDaysAgo = new Date(date.setDate(date.getDate() - 8));
                expect(is.inLastWeek(eightDaysAgo)).to.be.false;
            });
        });
        checkApi('inLastWeek');

        describe('is.inLastMonth', function() {
            it('should return true if date is within last month', function() {
                var date = new Date();
                var tenDaysAgo = new Date(date.setDate(date.getDate() - 10));
                expect(is.inLastMonth(tenDaysAgo)).to.be.true;
            });
            it('should return false if date is not within last month', function() {
                var date = new Date();
                var fiftyDaysAgo = new Date(date.setDate(date.getDate() - 50));
                expect(is.inLastMonth(fiftyDaysAgo)).to.be.false;
            });
        });
        checkApi('inLastMonth');

        describe('is.inLastYear', function() {
            it('should return true if date is within last year', function() {
                var date = new Date();
                var threeMonthsAgo = new Date(date.setMonth(date.getMonth() - 3));
                expect(is.inLastYear(threeMonthsAgo)).to.be.true;
            });
            it('should return false if date is not within last year', function() {
                var date = new Date();
                var future = new Date(date.setDate(date.getDate() + 1));
                expect(is.inLastYear(future)).to.be.false;
            });
        });
        checkApi('inLastYear');

        describe('is.inNextWeek', function() {
            it('should return true if date is within next week', function() {
                var date = new Date();
                var future = new Date(date.setDate(date.getDate() + 1));
                expect(is.inNextWeek(future)).to.be.true;
            });
            it('should return false if date is not within next week', function() {
                var date = new Date();
                var yesterday = new Date(date.setDate(date.getDate() - 1));
                expect(is.inNextWeek(yesterday)).to.be.false;
            });
        });
        checkApi('inNextWeek');

        describe('is.inNextMonth', function() {
            it('should return true if date is within next month', function() {
                var date = new Date();
                var aWeekLater = new Date(date.setDate(date.getDate() + 7));
                expect(is.inNextMonth(aWeekLater)).to.be.true;
            });
            it('should return false if date is not within next month', function() {
                var date = new Date();
                var yesterday = new Date(date.setDate(date.getDate() - 1));
                expect(is.inNextMonth(yesterday)).to.be.false;
            });
        });
        checkApi('inNextMonth');

        describe('is.inNextYear', function() {
            it('should return true if date is within next year', function() {
                var date = new Date();
                var threeMonthsLater = new Date(date.setMonth(date.getMonth() + 3));
                expect(is.inNextYear(threeMonthsLater)).to.be.true;
            });
            it('should return false if date is not within next year', function() {
                var date = new Date();
                var past = new Date(date.setDate(date.getDate() - 1));
                expect(is.inNextYear(past)).to.be.false;
            });
        });
        checkApi('inNextYear');

        describe('is.quarterOfYear', function() {
            it('should return true if given quarter is the quarter of the date object', function() {
                var time = 1421572235303;
                var date = new Date(time);
                expect(is.quarterOfYear(date, 1)).to.be.true;
            });
            it('should return false if given quarter is not the quarter of the date object', function() {
                var time = 1421572235303;
                var date = new Date(time);
                expect(is.quarterOfYear(date, 2)).to.be.false;
            });
        });
        checkApi('quarterOfYear', ['not']);

        describe('is.dayLightSavingTime', function() {
            it('should return false if given date is not in daylight saving time', function() {
                var time = 1421572235303;
                var date = new Date(time);
                expect(is.dayLightSavingTime(date)).to.be.false;
            });
            it('should return false if given date is in daylight saving time', function() {
                var time = 1421572235303;
                var date = new Date(time);
                var sixMonthsAgo = new Date(date.setMonth(date.getMonth() - 6));
                expect(is.dayLightSavingTime(sixMonthsAgo)).to.be.true;
            });
        });
        checkApi('dayLightSavingTime');
    });

    describe('object checks', function() {
        describe('is.propertyCount', function() {
            it('should return true if given count matches that of the object', function() {
                var obj = {
                    test: 'test',
                    is: 'is',
                    good: 'good'
                };
                expect(is.propertyCount(obj, 3)).to.be.true;
            });
            it('should return false if given count does not match that of the object', function() {
                var obj = {
                    test: 'test',
                    is: 'is'
                };
                expect(is.propertyCount(obj, 3)).to.be.false;
            });
        });
        checkApi('propertyCount', ['not']);

        describe('is.propertyDefined', function() {
            it('should return true if given property is in objects', function() {
                var obj = {
                    test: 'test',
                    is: 'is',
                    good: 'good'
                };
                expect(is.propertyDefined(obj, 'good')).to.be.true;
            });
            it('should return false if given property is not in objects', function() {
                var obj = {
                    test: 'test',
                    is: 'is'
                };
                expect(is.propertyDefined(obj, 'good')).to.be.false;
            });
        });
        checkApi('propertyDefined', ['not']);

        describe('is.windowObject', function() {
            it('should return true if given object is window object', function() {
                expect(is.windowObject(window)).to.be[!!window];
            });
            it('should return false if given object is not window object', function() {
                expect(is.windowObject({})).to.be.false;
            });
        });
        checkApi('windowObject');

        describe('is.domNode', function() {
            it('should return true if given object is a DOM node', function() {
                var obj = document && document.createElement('div');
                expect(is.domNode(obj)).to.be[!!document];
            });
            it('should return false if given object is not a DOM node', function() {
                expect(is.domNode({})).to.be.false;
            });
        });
        checkApi('domNode');

        describe('is.thenable', function() {
            it('should return true if passed parameter type is Promise', function() {
                var promise = Promise.resolve(true); // eslint-disable-line no-undef
                expect(is.thenable(promise)).to.be.true;
            });
            it('should return false if passed parameter type is not Promise', function() {
                var notPromise = 'test';
                expect(is.thenable(notPromise)).to.be.false;
            });
        });
        checkApi('thenable');
    });

    describe('array checks', function() {
        describe('is.sorted', function() {
            it('should return true if given array is sorted', function() {
                var array1 = [1, 2, 3, 4, 5];
                expect(is.sorted(array1)).to.be.true;
                expect(is.sorted(array1, '>=')).to.be.true;
                expect(is.sorted(array1, '>')).to.be.true;
                expect(is.sorted(array1, '<=')).to.be.false;
                expect(is.sorted(array1, '<')).to.be.false;

                var array2 = [5, 4, 4, 3, 1];
                expect(is.sorted(array2)).to.be.false;
                expect(is.sorted(array2, '>=')).to.be.false;
                expect(is.sorted(array2, '>')).to.be.false;
                expect(is.sorted(array2, '<=')).to.be.true;
                expect(is.sorted(array2, '<')).to.be.false;

                var array3 = [10];
                expect(is.sorted(array3)).to.be.true;
                expect(is.sorted(array3, '>=')).to.be.true;
                expect(is.sorted(array3, '>')).to.be.true;
                expect(is.sorted(array3, '<=')).to.be.true;
                expect(is.sorted(array3, '<')).to.be.true;
            });
            it('should return false if given array is not sorted', function() {
                var array = [1, 2, 3, 5, 4];
                expect(is.sorted(array)).to.be.false;
                expect(is.sorted(array, '>=')).to.be.false;
                expect(is.sorted(array, '>')).to.be.false;
                expect(is.sorted(array, '<=')).to.be.false;
                expect(is.sorted(array, '<')).to.be.false;
            });
        });
        checkApi('sorted');

        describe('is.inArray', function()  {
            it('should return true if the item is in the array', function() {
                var value = 3;
                var array = [1, 4, 6, 7, 3];
                expect(is.inArray(value, array)).to.be.true;
            });
            it('should return false if the item is not in the array', function() {
                var value = 2;
                var array = [1, 4, 6, 7, 3];
                expect(is.inArray(value, array)).to.be.false;
            });
        });
        checkApi('inArray', ['not']);
    });

}(this));
