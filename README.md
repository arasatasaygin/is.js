is.js
=====

[![JS.ORG](https://img.shields.io/badge/js.org-is-ffb400.svg?style=flat-square)](http://js.org)

####This is a general-purpose check library.
- No dependencies
- AMD, Node & browser ready

####Usage:

Node.js:
```
npm install is_js
```

Bower:
```
bower install is_js
```

Build:
```
npm run build
```

Test:
```
npm test
```

####Contributing:
Thanks for considering to contribute. Check [here](CONTRIBUTING.md)

####Contributors:
Many thanks to our contributors: https://github.com/arasatasaygin/is.js/graphs/contributors

Type checks
===========

is.arguments(value:any)
-----------------------
####Checks if the given value type is arguments.
interfaces: not, all, any

```javascript
var getArguments = function() {
    return arguments;
};
var arguments = getArguments();

is.arguments(arguments);
=> true

is.not.arguments({foo: 'bar'});
=> true

is.all.arguments(arguments, 'bar');
=> false

is.any.arguments(['foo'], arguments);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.arguments([arguments, 'foo', 'bar']);
=> false
```

is.array(value:any)
-------------------
####Checks if the given value type is array.
interfaces: not, all, any

```javascript
is.array(['foo', 'bar', 'baz']);
=> true

is.not.array({foo: 'bar'});
=> true

is.all.array(['foo'], 'bar');
=> false

is.any.array(['foo'], 'bar');
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.array([[1, 2], 'foo', 'bar']);
=> false
```

is.boolean(value:any)
---------------------
####Checks if the given value type is boolean.
interfaces: not, all, any

```javascript
is.boolean(true);
=> true

is.not.boolean({foo: 'bar'});
=> true

is.all.boolean(true, 'bar');
=> false

is.any.boolean(true, 'bar');
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.boolean([true, 'foo', 'bar']);
=> false
```

is.date(value:any)
------------------
####Checks if the given value type is date.
interfaces: not, all, any

```javascript
is.date(new Date());
=> true

is.not.date({foo: 'bar'});
=> true

is.all.date(new Date(), 'bar');
=> false

is.any.date(new Date(), 'bar');
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.date([new Date(), 'foo', 'bar']);
=> false
```

is.domNode(value:any)
-----------------------------
####Checks if the given object is a dom node.
interfaces: not, all, any

```javascript
var obj = document.createElement('div');
is.domNode(obj);
=> true

is.domNode({nope: 'nope'});
=> false

is.not.domNode({});
=> true

is.all.domNode(obj, obj);
=> true

is.any.domNode(obj, {nope: 'nope'});
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.domNode([obj, {nope: 'nope'}]);
=> false
```

is.error(value:any)
-------------------
####Checks if the given value type is error.
interfaces: not, all, any

```javascript
is.error(new Error());
=> true

is.not.error({foo: 'bar'});
=> true

is.all.error(new Error(), 'bar');
=> false

is.any.error(new Error(), 'bar');
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.error([new Error(), 'foo', 'bar']);
=> false
```

is.function(value:any)
----------------------
####Checks if the given value type is function.
interfaces: not, all, any

```javascript
is.function(toString);
=> true

is.not.function({foo: 'bar'});
=> true

is.all.function(toString, 'bar');
=> false

is.any.function(toString, 'bar');
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.function([toString, 'foo', 'bar']);
=> false
```

is.nan(value:any)
-----------------
####Checks if the given value type is NaN.
interfaces: not, all, any

```javascript
is.nan(NaN);
=> true

is.not.nan(42);
=> true

is.all.nan(NaN, 1);
=> false

is.any.nan(NaN, 2);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.nan([NaN, 'foo', 1]);
=> false
```

is.null(value:any)
------------------
####Checks if the given value type is null.
interfaces: not, all, any

```javascript
is.null(null);
=> true

is.not.null(42);
=> true

is.all.null(null, 1);
=> false

is.any.null(null, 2);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.null([null, 'foo', 1]);
=> false
```

is.number(value:any)
--------------------
####Checks if the given value type is number.
interfaces: not, all, any

```javascript
is.number(42);
=> true

is.number(NaN);
=> false

is.not.number('42');
=> true

is.all.number('foo', 1);
=> false

is.any.number({}, 2);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.number([42, 'foo', 1]);
=> false
```

is.object(value:any)
--------------------
####Checks if the given value type is object.
interfaces: not, all, any

```javascript
is.object({foo: 'bar'});
=> true

// functions are also returning as true
is.object(toString);
=> true

is.not.object('foo');
=> true

is.all.object({}, 1);
=> false

is.any.object({}, 2);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.object([{}, new Object()]);
=> true
```

is.json(value:any)
--------------------
####Checks if the given value type is pure json object.
interfaces: not, all, any

```javascript
is.json({foo: 'bar'});
=> true

// functions are returning as false
is.json(toString);
=> false

is.not.json([]);
=> true

is.all.json({}, 1);
=> false

is.any.json({}, 2);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.json([{}, {foo: 'bar'}]);
=> true
```

is.regexp(value:any)
--------------------
####Checks if the given value type is RegExp.
interfaces: not, all, any

```javascript
is.regexp(/test/);
=> true

is.not.regexp(['foo']);
=> true

is.all.regexp(/test/, 1);
=> false

is.any.regexp(new RegExp('ab+c'), 2);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.regexp([{}, /test/]);
=> false
```

is.string(value:any)
--------------------
####Checks if the given value type is string.
interfaces: not, all, any

```javascript
is.string('foo');
=> true

is.not.string(['foo']);
=> true

is.all.string('foo', 1);
=> false

is.any.string('foo', 2);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.string([{}, 'foo']);
=> false
```

is.char(value:any)
--------------------
####Checks if the given value type is char.
interfaces: not, all, any

```javascript
is.char('f');
=> true

is.not.char(['foo']);
=> true

is.all.char('f', 1);
=> false

is.any.char('f', 2);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.char(['f', 'o', 'o']);
=> true
```

is.undefined(value:any)
-----------------------
####Checks if the given value type is undefined.
interfaces: not, all, any

```javascript
is.undefined(undefined);
=> true

is.not.undefined(null);
=> true

is.all.undefined(undefined, 1);
=> false

is.any.undefined(undefined, 2);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.undefined([{}, undefined]);
=> false
```

is.sameType(value:any, other:any)
---------------------------------
####Checks if the given value types are same type.
interface: not

```javascript
is.sameType(42, 7);
=> true

is.sameType(42, '7');
=> false

is.not.sameType(42, 7);
=> false
```

is.windowObject(value:any)
-----------------------------
####Checks if the given object is window object.
interfaces: not, all, any

```javascript
is.windowObject(window);
=> true

is.windowObject({nope: 'nope'});
=> false

is.not.windowObject({});
=> true

is.all.windowObject(window, {nope: 'nope'});
=> false

is.any.windowObject(window, {nope: 'nope'});
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.windowObject([window, {nope: 'nope'}]);
=> false
```

Presence checks
===============

is.empty(value:array|object|string)
-----------------------------------
####Checks if the given value is empty.
interfaces: not, all, any

```javascript
is.empty({});
=> true

is.empty([]);
=> true

is.empty('');
=> true

is.not.empty(['foo']);
=> true

is.all.empty('', {}, ['foo']);
=> false

is.any.empty([], 42);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.empty([{}, 'foo']);
=> false
```

is.existy(value:any)
--------------------
####Checks if the given value is existy. (not null or undefined)
interfaces: not, all, any

```javascript
is.existy({});
=> true

is.existy(null);
=> false

is.not.existy(undefined);
=> true

is.all.existy(null, ['foo']);
=> false

is.any.existy(undefined, 42);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.existy([{}, 'foo']);
=> true
```

is.truthy(value:any)
--------------------
####Checks if the given value is truthy. (existy and not false)
interfaces: not, all, any

```javascript
is.truthy(true);
=> true

is.truthy(null);
=> false

is.not.truthy(false);
=> true

is.all.truthy(null, true);
=> false

is.any.truthy(undefined, true);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.truthy([{}, true]);
=> true
```

is.falsy(value:any)
-------------------
####Checks if the given value is falsy.
interfaces: not, all, any

```javascript
is.falsy(false);
=> true

is.falsy(null);
=> true

is.not.falsy(true);
=> true

is.all.falsy(null, false);
=> true

is.any.falsy(undefined, true);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.falsy([false, true, undefined]);
=> false
```

is.space(value:any)
----------------------
####Checks if the given value is space.
interfaces: not, all, any

```javascript
is.space(' ');
=> true

is.space('foo');
=> false

is.not.space(true);
=> true

is.all.space(' ', 'foo');
=> false

is.any.space(' ', true);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.space([' ', 'foo', undefined]);
=> false
```

RegExp checks
=============

is.url(value:any)
-----------------
####Checks if the given value matches url regexp.
interfaces: not, all, any

```javascript
is.url('http://www.test.com');
=> true

is.url('foo');
=> false

is.not.url(true);
=> true

is.all.url('http://www.test.com', 'foo');
=> false

is.any.url('http://www.test.com', true);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.url(['http://www.test.com', 'foo', undefined]);
=> false
```

is.email(value:any)
-------------------
####Checks if the given value matches email regexp.
interfaces: not, all, any

```javascript
is.email('test@test.com');
=> true

is.email('foo');
=> false

is.not.email('foo');
=> true

is.all.email('test@test.com', 'foo');
=> false

is.any.email('test@test.com', 'foo');
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.email(['test@test.com', 'foo', undefined]);
=> false
```

is.creditCard(value:any)
------------------------
####Checks if the given value matches credit card regexp.
interfaces: not, all, any

```javascript
is.creditCard(378282246310005);
=> true

is.creditCard(123);
=> false

is.not.creditCard(123);
=> true

is.all.creditCard(378282246310005, 123);
=> false

is.any.creditCard(378282246310005, 123);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.creditCard([378282246310005, 123, undefined]);
=> false
```

is.alphaNumeric(value:any)
--------------------------
####Checks if the given value matches alpha numeric regexp.
interfaces: not, all, any

```javascript
is.alphaNumeric('alphaNu3er1k');
=> true

is.alphaNumeric('*?');
=> false

is.not.alphaNumeric('*?');
=> true

is.all.alphaNumeric('alphaNu3er1k', '*?');
=> false

is.any.alphaNumeric('alphaNu3er1k', '*?');
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.alphaNumeric(['alphaNu3er1k', '*?']);
=> false
```

is.timeString(value:any)
------------------------
####Checks if the given value matches time string regexp.
interfaces: not, all, any

```javascript
is.timeString('13:45:30');
=> true

is.timeString('90:90:90');
=> false

is.not.timeString('90:90:90');
=> true

is.all.timeString('13:45:30', '90:90:90');
=> false

is.any.timeString('13:45:30', '90:90:90');
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.timeString(['13:45:30', '90:90:90']);
=> false
```

is.dateString(value:any)
------------------------
####Checks if the given value matches date string regexp.
interfaces: not, all, any

```javascript
is.dateString('11/11/2011');
=> true

is.dateString('10-21-2012');
=> true

is.dateString('90/11/2011');
=> false

is.not.dateString('90/11/2011');
=> true

is.all.dateString('11/11/2011', '90/11/2011');
=> false

is.any.dateString('11-11-2011', '90/11/2011');
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.dateString(['11/11/2011', '90/11/2011']);
=> false
```

is.usZipCode(value:any)
-----------------------
####Checks if the given value matches US zip code regexp.
interfaces: not, all, any

```javascript
is.usZipCode('02201-1020');
=> true

is.usZipCode('123');
=> false

is.not.usZipCode('123');
=> true

is.all.usZipCode('02201-1020', '123');
=> false

is.any.usZipCode('02201-1020', '123');
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.usZipCode(['02201-1020', '123']);
=> false
```

is.caPostalCode(value:any)
--------------------------
####Checks if the given value matches Canada postal code regexp.
interfaces: not, all, any

```javascript
is.caPostalCode('L8V3Y1');
=> true

is.caPostalCode('L8V 3Y1');
=> true

is.caPostalCode('123');
=> false

is.not.caPostalCode('123');
=> true

is.all.caPostalCode('L8V3Y1', '123');
=> false

is.any.caPostalCode('L8V3Y1', '123');
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.caPostalCode(['L8V3Y1', '123']);
=> false
```

is.ukPostCode(value:any)
------------------------
####Checks if the given value matches UK post code regexp.
interfaces: not, all, any

```javascript
is.ukPostCode('B184BJ');
=> true

is.ukPostCode('123');
=> false

is.not.ukPostCode('123');
=> true

is.all.ukPostCode('B184BJ', '123');
=> false

is.any.ukPostCode('B184BJ', '123');
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.ukPostCode(['B184BJ', '123']);
=> false
```

is.nanpPhone(value:any)
-----------------------
####Checks if the given value matches North American numbering plan phone regexp.
interfaces: not, all, any

```javascript
is.nanpPhone('609-555-0175');
=> true

is.nanpPhone('123');
=> false

is.not.nanpPhone('123');
=> true

is.all.nanpPhone('609-555-0175', '123');
=> false

is.any.nanpPhone('609-555-0175', '123');
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.nanpPhone(['609-555-0175', '123']);
=> false
```

is.eppPhone(value:any)
----------------------
####Checks if the given value matches extensible provisioning protocol phone regexp.
interfaces: not, all, any

```javascript
is.eppPhone('+90.2322456789');
=> true

is.eppPhone('123');
=> false

is.not.eppPhone('123');
=> true

is.all.eppPhone('+90.2322456789', '123');
=> false

is.any.eppPhone('+90.2322456789', '123');
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.eppPhone(['+90.2322456789', '123']);
=> false
```

is.socialSecurityNumber(value:any)
----------------------------------
####Checks if the given value matches social security number regexp.
interfaces: not, all, any

```javascript
is.socialSecurityNumber('017-90-7890');
=> true

is.socialSecurityNumber('017907890');
=> true

is.socialSecurityNumber('123');
=> false

is.not.socialSecurityNumber('123');
=> true

is.all.socialSecurityNumber('017-90-7890', '123');
=> false

is.any.socialSecurityNumber('017907890', '123');
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.socialSecurityNumber(['017-90-7890', '123']);
=> false
```

is.affirmative(value:any)
-------------------------
####Checks if the given value matches affirmative regexp.
interfaces: not, all, any

```javascript
is.affirmative('yes');
=> true

is.affirmative('no');
=> false

is.not.affirmative('no');
=> true

is.all.affirmative('yes', 'no');
=> false

is.any.affirmative('yes', 'no');
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.affirmative(['yes', 'y', 'true', 't', 'ok', 'okay']);
=> true
```

is.hexadecimal(value:any)
-------------------------
####Checks if the given value matches hexadecimal regexp.
interfaces: not, all, any

```javascript
is.hexadecimal('f0f0f0');
=> true

is.hexadecimal('0xf0f0f0');
=> true

is.hexadecimal(2.5);
=> false

is.not.hexadecimal('string');
=> true

is.all.hexadecimal('ff', 'f50');
=> true

is.any.hexadecimal('0xff5500', true);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.hexadecimal(['fff', '333', 'f50']);
=> true
```

is.hexColor(value:any)
-------------------------
####Checks if the given value matches hexcolor regexp.
interfaces: not, all, any

```javascript
is.hexColor('#333');
=> true

is.hexColor('#3333');
=> false

is.not.hexColor(0.5);
=> true

is.all.hexColor('fff', 'f50');
=> true

is.any.hexColor('ff5500', 0.5);
=> false

// 'all' and 'any' interfaces can also take array parameter
is.all.hexColor(['fff', '333', 'f50']);
=> true
```

is.ip(value:any)
-------------------------
####Checks if the given value matches ip regexp
interfaces: not, all, any

```javascript
is.ip('198.156.23.5');
=> true

is.ip('1.2..5');
=> false

is.not.ip('8:::::::7');
=> true

is.all.ip('0:1::4:ff5:54:987:C', '123.123.123.123');
=> true

is.any.ip('123.8.4.3', '0.0.0.0');
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.ip(['123.123.23.12', 'A:B:C:D:E:F:0:0']);
=> true
```

is.ipv4(value:any)
-------------------------
####Checks if the given value matches ipv4 regexp
interfaces: not, all, any

```javascript
is.ipv4('198.12.3.142');
=> true

is.ipv4('1.2..5');
=> false

is.not.ipv4('8:::::::7');
=> true

is.all.ipv4('198.12.3.142', '123.123.123.123');
=> true

is.any.ipv4('255.255.255.255', '850..1.4');
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.ipv4(['198.12.3.142', '1.2.3']);
=> false

```

is.ipv6(value:any)
-------------------------
####Checks if the given value matches ipv6 regexp
interfaces: not, all, any

```javascript
is.ipv6('2001:DB8:0:0:1::1');
=> true

is.ipv6('985.12.3.4');
=> true

is.not.ipv6('8:::::::7');
=> true

is.all.ipv6('2001:DB8:0:0:1::1', '1:50:198:2::1:2:8');
=> true

is.any.ipv6('255.255.255.255', '2001:DB8:0:0:1::1');
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.ipv6(['2001:DB8:0:0:1::1', '1.2.3']);
=> false
```

String checks
=============

is.include(value:string, target:string)
-----------------------------------------
####Checks if the given string contains a substring.
interface: not

```javascript
is.include('Some text goes here', 'text');
=> true

is.include('test', 'text');
=> false

is.not.include('test', 'text');
=> true
```

is.upperCase(value:string)
--------------------------
####Checks if the given string is UPPERCASE.
interfaces: not, all, any

```javascript
is.upperCase('YEAP');
=> true

is.upperCase('nope');
=> false

is.not.upperCase('Nope');
=> true

is.all.upperCase('YEAP', 'nope');
=> false

is.any.upperCase('YEAP', 'nope');
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.upperCase(['YEAP', 'ALL UPPERCASE']);
=> true
```


is.lowerCase(value:string)
--------------------------
####Checks if the given string is lowercase.
interfaces: not, all, any

```javascript
is.lowerCase('yeap');
=> true

is.lowerCase('NOPE');
=> false

is.not.lowerCase('Nope');
=> true

is.all.lowerCase('yeap', 'NOPE');
=> false

is.any.lowerCase('yeap', 'NOPE');
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.lowerCase(['yeap', 'all lowercase']);
=> true
```

is.startWith(value:string, target:string)
-------------------------------------------
####Checks if the given string starts with substring.
interface: not

```javascript
is.startWith('yeap', 'ye');
=> true

is.startWith('nope', 'ye');
=> false

is.not.startWith('nope not that', 'not');
=> true
```

is.endWith(value:string, target:string)
-----------------------------------------
####Checks if the given string ends with substring.
interfaces: not

```javascript
is.endWith('yeap', 'ap');
=> true

is.endWith('nope', 'no');
=> false

is.not.endWith('nope not that', 'not');
=> true

is.endWith('yeap that one', 'one');
=> true
```

is.capitalized(value:string)
---------------------------------------------
####Checks if the given string is capitalized.
interfaces: not, all, any

```javascript
is.capitalized('Yeap');
=> true

is.capitalized('nope');
=> false

is.not.capitalized('nope not capitalized');
=> true

is.not.capitalized('nope Capitalized');
=> true

is.all.capitalized('Yeap', 'All', 'Capitalized');
=> true

is.any.capitalized('Yeap', 'some', 'Capitalized');
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.capitalized(['Nope', 'not']);
=> false
```

is.palindrome(value:string)
---------------------------------------------
####Checks if the given string is palindrome.
interfaces: not, all, any

```javascript
is.palindrome('testset');
=> true

is.palindrome('A man, a plan, a canal - Panama!');
=> true

is.palindrome('nope');
=> false

is.not.palindrome('nope not palindrome');
=> true

is.not.palindrome('tt');
=> false

is.all.palindrome('testset', 'tt');
=> true

is.any.palindrome('Yeap', 'some', 'testset');
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.palindrome(['Nope', 'testset']);
=> false
```

Arithmetic checks
=================

is.equal(value:any, other:any)
------------------------------
####Checks if the given values are equal.
interfaces: not

```javascript
is.equal(42, 40 + 2);
=> true

is.equal('yeap', 'yeap');
=> true

is.equal(true, true);
=> true

is.not.equal('yeap', 'nope');
=> true
```

is.even(value:number)
---------------------
####Checks if the given value is even.
interfaces: not, all, any

```javascript
is.even(42);
=> true

is.not.even(41);
=> true

is.all.even(40, 42, 44);
=> true

is.any.even(39, 42, 43);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.even([40, 42, 43]);
=> false
```

is.odd(value:number)
--------------------
####Checks if the given value is odd.
interfaces: not, all, any

```javascript
is.odd(41);
=> true

is.not.odd(42);
=> true

is.all.odd(39, 41, 43);
=> true

is.any.odd(39, 42, 44);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.odd([40, 42, 43]);
=> false
```

is.positive(value:number)
-------------------------
####Checks if the given value is positive.
interfaces: not, all, any

```javascript
is.positive(41);
=> true

is.not.positive(-42);
=> true

is.all.positive(39, 41, 43);
=> true

is.any.positive(-39, 42, -44);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.positive([40, 42, -43]);
=> false
```

is.negative(value:number)
-------------------------
####Checks if the given value is negative.
interfaces: not, all, any

```javascript
is.negative(-41);
=> true

is.not.negative(42);
=> true

is.all.negative(-39, -41, -43);
=> true

is.any.negative(-39, 42, 44);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.negative([40, 42, -43]);
=> false
```

is.above(value:number, min:number)
---------------------------
####Checks if the given value is above minimum value.
interface: not

```javascript
is.above(41, 30);
=> true

is.not.above(42, 50);
=> true
```

is.under(value:number, max:number)
---------------------------
####Checks if the given value is under maximum value.
interface: not

```javascript
is.under(30, 35);
=> true

is.not.under(42, 30);
=> true
```

is.within(value:number, min:number, max:number)
---------------------------------
####Checks if the given value is within minimum and maximum values.
interface: not

```javascript
is.within(30, 20, 40);
=> true

is.not.within(40, 30, 35);
=> true
```

is.decimal(value:number)
------------------------
####Checks if the given value is decimal.
interfaces: not, all, any

```javascript
is.decimal(41.5);
=> true

is.not.decimal(42);
=> true

is.all.decimal(39.5, 41.5, -43.5);
=> true

is.any.decimal(-39, 42.5, 44);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.decimal([40, 42.5, -43]);
=> false
```

is.integer(value:number)
------------------------
####Checks if the given value is integer.
interfaces: not, all, any

```javascript
is.integer(41);
=> true

is.not.integer(42.5);
=> true

is.all.integer(39, 41, -43);
=> true

is.any.integer(-39, 42.5, 44);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.integer([40, 42.5, -43]);
=> false
```

is.finite(value:number)
-----------------------
####Checks if the given value is finite.
interfaces: not, all, any

```javascript
is.finite(41);
=> true

is.not.finite(42 / 0);
=> true

is.all.finite(39, 41, -43);
=> true

is.any.finite(-39, Infinity, 44);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.finite([Infinity, -Infinity, 42.5]);
=> false
```

is.infinite(value:number)
-------------------------
####Checks if the given value is infinite.
interfaces: not, all, any

```javascript
is.infinite(Infinity);
=> true

is.not.infinite(42);
=> true

is.all.infinite(Infinity, -Infinity, -43 / 0);
=> true

is.any.infinite(-39, Infinity, 44);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.infinite([Infinity, -Infinity, 42.5]);
=> false
```

Object checks
=============

is.propertyCount(value:object, count:number)
-------------------------------------
####Checks if objects' property count is equal to given count.
interface: not

```javascript
is.propertyCount({this: 'is', 'sample': object}, 2);
=> true

is.propertyCount({this: 'is', 'sample': object}, 3);
=> false

is.not.propertyCount({}, 2);
=> true
```

is.propertyDefined(value:object, property:string)
------------------------------------------
####Checks if the given property is defined on object.
interface: not

```javascript
is.propertyDefined({yeap: 'yeap'}, 'yeap');
=> true

is.propertyDefined({yeap: 'yeap'}, 'nope');
=> false

is.not.propertyDefined({}, 'nope');
=> true
```

Array checks
============

is.inArray(value:any, array)
---------------------
####Checks if the given item is in array?
interface: not
```javascript
is.inArray(2, [1, 2, 3]);
=> true

is.inArray(4, [1, 2, 3]);
=> false

is.not.inArray(4, [1, 2, 3]);
=> true
```

is.sorted(value:array, sign:string)
----------------------
####Checks if the given array is sorted. Sign is optional parameter.
interfaces: not, all, any

```javascript
is.sorted([1, 2, 3]);
=> true

is.sorted([1, 2, 4, 3]);
=> false

is.sorted([1, 1, 2, 2], '>=');
=> true

is.sorted([1, 2, 3, 4], '>');
=> true

is.sorted([4, 3, 3, 1], '<=');
=> true

is.sorted([4, 3, 2, 1], '<');
=> true

is.sorted([1, 2, 3, 3], '>');
=> false

is.not.sorted([5, 4, 3]);
=> true

is.not.sorted([5, 4, 3], '<');
=> false

is.all.sorted([1, 2], [3, 4]);
=> true

is.any.sorted([1, 2], [5, 4]);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.sorted([[1, 2], [5, 4]]);
=> false
```

Environment checks
==================
####Environment checks are not available as node module.

is.ie(range:number|string)
-------------------
####Checks if current browser is ie. Parameter is optional version range (or number) of browser.
interface: not

```javascript
is.ie();
=> true if current browser is ie

is.not.ie();
=> false if current browser is ie

// also supports version number
is.ie(10);
=> true if current version of ie is 10

is.ie('>=10');
=> true if current version of ie is greater than or equal to 10

is.not.ie('<9');
=> true if current version of ie is not less than 9
```

is.chrome(range:number|string)
-----------
####Checks if current browser is chrome. Parameter is optional version range (or number) of browser.
interface: not

```javascript
is.chrome();
=> true if current browser is chrome

is.not.chrome();
=> false if current browser is chrome

// also supports version number
is.chrome(50);
=> true if current version of chrome is 50

is.chrome('>=40');
=> true if current version of chrome is greater than or equal to 40

is.not.chrome('<30');
=> true if current version of chrome is not less than 30
```

is.firefox(range:number|string)
------------
####Checks if current browser is firefox. Parameter is optional version range (or number) of browser.
interface: not

```javascript
is.firefox();
=> true if current browser is firefox

is.not.firefox();
=> false if current browser is firefox

// also supports version number
is.firefox(41);
=> true if current version of firefox is 41

is.firefox('>=40');
=> true if current version of firefox is greater than or equal to 40

is.not.firefox('<30');
=> true if current version of firefox is not less than 30
```

is.edge(range:number|string)
------------
####Checks if current browser is edge. Parameter is optional version range (or number) of browser.
interface: not

```javascript
is.edge();
=> true if current browser is edge

is.not.edge();
=> false if current browser is edge

// also supports version number
is.edge(13);
=> true if current version of edge is 13

is.edge('>=12');
=> true if current version of edge is greater than or equal to 12

is.not.edge('<13');
=> true if current version of edge is not less than 13
```

is.opera(range:number|string)
----------
####Checks if current browser is opera. Parameter is optional version range (or number) of browser.
interface: not

```javascript
is.opera();
=> true if current browser is opera

is.not.opera();
=> false if current browser is opera

// also supports version number
is.opera(36);
=> true if current version of opera is 36

is.opera('>=35');
=> true if current version of opera is greater than or equal to 35

is.not.opera('<20');
=> true if current version of opera is not less than 20
```

is.safari(range:number|string)
-----------
####Checks if current browser is safari. Parameter is optional version range (or number) of browser.
interface: not

```javascript
is.safari();
=> true if current browser is safari

is.not.safari();
=> false if current browser is safari

// also supports version number
is.safari(9);
=> true if current version of safari is 9

is.safari('>=8');
=> true if current version of safari is greater than or equal to 8

is.not.safari('<7');
=> true if current version of safari is not less than 7
```

is.phantom(range:number|string)
-----------
####Checks if current browser is phantomjs. Parameter is optional version range (or number) of browser.
interface: not

```javascript
is.phantom();
=> true if current browser is phantomjs

is.not.phantom();
=> false if current browser is phantomjs

// also supports version number
is.phantom(2);
=> true if current version of phantom is 2

is.phantom('>=1');
=> true if current version of phantomjs is greater than or equal to 1

is.not.phantom('<2');
=> true if current version of phantomjs is not less than 2
```

is.ios()
--------
####Checks if current device has ios.
interface: not

```javascript
is.ios();
=> true if current device is iPhone, iPad or iPod

is.not.ios();
=> true if current device is not iPhone, iPad or iPod
```

is.iphone(range:number|string)
-----------
####Checks if current device is iPhone. Parameter is optional version range (or number) of browser.
interface: not

```javascript
is.iphone();
=> true if current device is iPhone

is.not.iphone();
=> true if current device is not iPhone

// also supports version number
is.iphone(9);
=> true if current version of iPhone is 9

is.iphone('>=7');
=> true if current version of iPhone is greater than or equal to 7

is.not.iphone('<8');
=> true if current version of iPhone is not less than 8
```

is.ipad(range:number|string)
---------
####Checks if current device is iPad.
interface: not

```javascript
is.ipad();
=> true if current device is iPad

is.not.ipad();
=> true if current device is not iPad

// also supports version number
is.ipad(9);
=> true if current version of iPad is 9

is.ipad('>=7');
=> true if current version of iPad is greater than or equal to 7

is.not.ipad('<8');
=> true if current version of iPad is not less than 8
```

is.ipod(range:number|string)
---------
####Checks if current device is iPod.
interface: not

```javascript
is.ipod();
=> true if current device is iPod

is.not.ipod();
=> true if current device is not iPod

// also supports version number
is.ipod(7);
=> true if current version of iPod is 7

is.ipod('>=5');
=> true if current version of iPod is greater than or equal to 5

is.not.ipod('<5');
=> true if current version of iPod is not less than 5
```

is.android()
------------
####Checks if current device has Android.
interface: not

```javascript
is.android();
=> true if current device has Android OS

is.not.android();
=> true if current device has not Android OS
```

is.androidPhone()
-----------------
####Checks if current device is Android phone.
interface: not

```javascript
is.androidPhone();
=> true if current device is Android phone

is.not.androidPhone();
=> true if current device is not Android phone
```

is.androidTablet()
------------------
####Checks if current device is Android tablet.
interface: not

```javascript
is.androidTablet();
=> true if current device is Android tablet

is.not.androidTablet();
=> true if current device is not Android tablet
```

is.blackberry()
---------------
####Checks if current device is Blackberry.
interface: not

```javascript
is.blackberry();
=> true if current device is Blackberry

is.not.blackberry();
=> true if current device is not Blackberry
```

is.windowsPhone()
-----------------
####Checks if current device is Windows phone.
interface: not

```javascript
is.windowsPhone();
=> true if current device is Windows phone

is.not.windowsPhone();
=> true if current device is not Windows Phone
```

is.windowsTablet()
------------------
####Checks if current device is Windows tablet.
interface: not

```javascript
is.windowsTablet();
=> true if current device is Windows tablet

is.not.windowsTablet();
=> true if current device is not Windows tablet
```

is.windows()
------------
####Checks if current OS is Windows.
interface: not

```javascript
is.windows();
=> true if current OS is Windows

is.not.windows();
=> true if current OS is not Windows
```

is.mac()
--------
####Checks if current OS is Mac OS X.
interface: not

```javascript
is.mac();
=> true if current OS is Mac OS X

is.not.mac();
=> true if current OS is not Mac OS X
```

is.linux()
----------
####Checks if current OS is linux.
interface: not

```javascript
is.linux();
=> true if current OS is linux

is.not.linux();
=> true if current OS is not linux
```

is.desktop()
------------
####Checks if current device is desktop.
interface: not

```javascript
is.desktop();
=> true if current device is desktop

is.not.desktop();
=> true if current device is not desktop
```

is.mobile()
-----------
####Checks if current device is mobile.
interface: not
iPhone, iPod, Android Phone, Windows Phone, Blackberry.
```javascript

is.mobile();
=> true if current device is mobile

is.not.mobile();
=> true if current device is not mobile
```

is.tablet()
-----------
####Checks if current device is tablet.
interface: not
iPad, Android Tablet, Windows Tablet
```javascript

is.tablet();
=> true if current device is tablet

is.not.tablet();
=> true if current device is not tablet
```

is.online()
-----------
####Checks if current device is online.
interface: not

```javascript
is.online();
=> true if current device is online

is.not.online();
=> true if current device is not online
```

is.offline()
------------
####Checks if current device is offline.
interface: not

```javascript
is.offline();
=> true if current device is offline

is.not.offline();
=> true if current device is not offline
```

is.touchDevice()
------------
####Checks if current device supports touch.
interface: not

```javascript
is.touchDevice();
=> true if current device supports touch

is.not.touchDevice();
=> true if current device does not support touch
```

Time checks
===========

is.today(value:date)
----------------------
####Checks if the given date object indicate today.
interfaces: not, all, any

```javascript
var today = new Date();
is.today(today);
=> true

var yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
is.today(yesterday);
=> false

is.not.today(yesterday);
=> true

is.all.today(today, today);
=> true

is.any.today(today, yesterday);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.today([today, yesterday]);
=> false
```

is.yesterday(value:date)
--------------------------
####Checks if the given date object indicate yesterday.
interfaces: not, all, any

```javascript
var today = new Date();
is.yesterday(today);
=> false

var yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
is.yesterday(yesterday);
=> true

is.not.yesterday(today);
=> true

is.all.yesterday(yesterday, today);
=> false

is.any.yesterday(today, yesterday);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.yesterday([today, yesterday]);
=> false
```

is.tomorrow(value:date)
-------------------------
####Checks if the given date object indicate tomorrow.
interfaces: not, all, any

```javascript
var today = new Date();
is.tomorrow(today);
=> false

var tomorrow = new Date(new Date().setDate(new Date().getDate() + 1));
is.tomorrow(tomorrow);
=> true

is.not.tomorrow(today);
=> true

is.all.tomorrow(tomorrow, today);
=> false

is.any.tomorrow(today, tomorrow);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.tomorrow([today, tomorrow]);
=> false
```

is.past(value:date)
---------------------
####Checks if the given date object indicate past.
interfaces: not, all, any

```javascript
var yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
var tomorrow = new Date(new Date().setDate(new Date().getDate() + 1));

is.past(yesterday);
=> true

is.past(tomorrow);
=> false

is.not.past(tomorrow);
=> true

is.all.past(tomorrow, yesterday);
=> false

is.any.past(yesterday, tomorrow);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.past([yesterday, tomorrow]);
=> false
```

is.future(value:date)
-----------------------
####Checks if the given date object indicate future.
interfaces: not, all, any

```javascript
var yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
var tomorrow = new Date(new Date().setDate(new Date().getDate() + 1));

is.future(yesterday);
=> false

is.future(tomorrow);
=> true

is.not.future(yesterday);
=> true

is.all.future(tomorrow, yesterday);
=> false

is.any.future(yesterday, tomorrow);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.future([yesterday, tomorrow]);
=> false
```

is.day(value:date, day:string)
-------------------------------
####Checks if the given date objects' day equal given dayString parameter.
interface: not

```javascript
var mondayObj = new Date('01/26/2015');
var tuesdayObj = new Date('01/27/2015');
is.day(mondayObj, 'monday');
=> true

is.day(mondayObj, 'tuesday');
=> false

is.not.day(mondayObj, 'tuesday');
=> true
```

is.month(value:date, month:string)
-----------------------------------
####Checks if the given date objects' month equal given monthString parameter.
interface: not

```javascript
var januaryObj = new Date('01/26/2015');
var februaryObj = new Date('02/26/2015');
is.month(januaryObj, 'january');
=> true

is.month(februaryObj, 'january');
=> false

is.not.month(februaryObj, 'january');
=> true
```

is.year(value:date, year:number)
---------------------------------
####Checks if the given date objects' year equal given yearNumber parameter.
interface: not

```javascript
var year2015 = new Date('01/26/2015');
var year2016 = new Date('01/26/2016');
is.year(year2015, 2015);
=> true

is.year(year2016, 2015);
=> false

is.not.year(year2016, 2015);
=> true
```

is.leapYear(value:number)
---------------------------------
####Checks if the given year number is a leap year
interfaces: not, all, any

```javascript
is.leapYear(2016);
=> true

is.leapYear(2015);
=> false

is.not.leapYear(2015);
=> true

is.all.leapYear(2015, 2016);
=> false

is.any.leapYear(2015, 2016);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.leapYear([2016, 2080]);
=> true
```

is.weekend(value:date)
------------------------
####Checks if the given date objects' day is weekend.
interfaces: not, all, any

```javascript
var monday = new Date('01/26/2015');
var sunday = new Date('01/25/2015');
var saturday = new Date('01/24/2015');
is.weekend(sunday);
=> true

is.weekend(monday);
=> false

is.not.weekend(monday);
=> true

is.all.weekend(sunday, saturday);
=> true

is.any.weekend(sunday, saturday, monday);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.weekend([sunday, saturday, monday]);
=> false
```

is.weekday(value:date)
------------------------
####Checks if the given date objects' day is weekday.
interfaces: not, all, any

```javascript
var monday = new Date('01/26/2015');
var sunday = new Date('01/25/2015');
var saturday = new Date('01/24/2015');
is.weekday(monday);
=> true

is.weekday(sunday);
=> false

is.not.weekday(sunday);
=> true

is.all.weekday(monday, saturday);
=> false

is.any.weekday(sunday, saturday, monday);
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.weekday([sunday, saturday, monday]);
=> false
```

is.inDateRange(value:date, start:date, end:date)
----------------------------------------------------
####Checks if date is within given range.
interface: not

```javascript
var saturday = new Date('01/24/2015');
var sunday = new Date('01/25/2015');
var monday = new Date('01/26/2015');
is.inDateRange(sunday, saturday, monday);
=> true

is.inDateRange(saturday, sunday, monday);
=> false

is.not.inDateRange(saturday, sunday, monday);
=> true
```

is.inLastWeek(value:date)
---------------------------
####Checks if the given date is between now and 7 days ago.
interface: not

```javascript
var twoDaysAgo = new Date(new Date().setDate(new Date().getDate() - 2));
var nineDaysAgo = new Date(new Date().setDate(new Date().getDate() - 9));
is.inLastWeek(twoDaysAgo);
=> true

is.inLastWeek(nineDaysAgo);
=> false

is.not.inLastWeek(nineDaysAgo);
=> true
```

is.inLastMonth(value:date)
----------------------------
####Checks if the given date is between now and a month ago.
interface: not

```javascript
var tenDaysAgo = new Date(new Date().setDate(new Date().getDate() - 10));
var fortyDaysAgo = new Date(new Date().setDate(new Date().getDate() - 40));
is.inLastMonth(tenDaysAgo);
=> true

is.inLastMonth(fortyDaysAgo);
=> false

is.not.inLastMonth(fortyDaysAgo);
=> true
```

is.inLastYear(value:date)
---------------------------
####Checks if the given date is between now and a year ago.
interface: not

```javascript
var twoMonthsAgo = new Date(new Date().setMonth(new Date().getMonth() - 2));
var thirteenMonthsAgo = new Date(new Date().setMonth(new Date().getMonth() - 13));
is.inLastYear(twoMonthsAgo);
=> true

is.inLastYear(thirteenMonthsAgo);
=> false

is.not.inLastYear(thirteenMonthsAgo);
=> true
```

is.inNextWeek(value:date)
---------------------------
####Checks if the given date is between now and 7 days later.
interface: not

```javascript
var twoDaysLater = new Date(new Date().setDate(new Date().getDate() + 2));
var nineDaysLater = new Date(new Date().setDate(new Date().getDate() + 9));
is.inNextWeek(twoDaysLater);
=> true

is.inNextWeek(nineDaysLater);
=> false

is.not.inNextWeek(nineDaysLater);
=> true
```

is.inNextMonth(value:date)
----------------------------
####Checks if the given date is between now and a month later.
interface: not

```javascript
var tenDaysLater = new Date(new Date().setDate(new Date().getDate() + 10));
var fortyDaysLater = new Date(new Date().setDate(new Date().getDate() + 40));
is.inNextMonth(tenDaysLater);
=> true

is.inNextMonth(fortyDaysLater);
=> false

is.not.inNextMonth(fortyDaysLater);
=> true
```

is.inNextYear(value:date)
---------------------------
####Checks if the given date is between now and a year later.
interface: not

```javascript
var twoMonthsLater = new Date(new Date().setMonth(new Date().getMonth() + 2));
var thirteenMonthsLater = new Date(new Date().setMonth(new Date().getMonth() + 13));
is.inNextYear(twoMonthsLater);
=> true

is.inNextYear(thirteenMonthsLater);
=> false

is.not.inNextYear(thirteenMonthsLater);
=> true
```

is.quarterOfYear(value:date, quarter:number)
---------------------------------------------
####Checks if the given date is in the parameter quarter.
interface: not

```javascript
var firstQuarter = new Date('01/26/2015');
var secondQuarter = new Date('05/26/2015');
is.quarterOfYear(firstQuarter, 1);
=> true

is.quarterOfYear(secondQuarter, 1);
=> false

is.not.quarterOfYear(secondQuarter, 1);
=> true
```

is.dayLightSavingTime(value:date)
--------------------------------------------------
####Checks if the given date is in daylight saving time.
interface: not

```javascript
// For Turkey Time Zone
var january1 = new Date('01/01/2015');
var june1 = new Date('06/01/2015');

is.dayLightSavingTime(june1);
=> true

is.dayLightSavingTime(january1);
=> false

is.not.dayLightSavingTime(january1);
=> true
```

Configuration methods
=====================

is.setNamespace()
-----------------
Change namespace of library to prevent name collisions.

```javascript
var customName = is.setNamespace();
customName.odd(3);
=> true
```

is.setRegexp(value:regexp, name:string)
----------------------------------------
Override RegExps if you think they suck.

```javascript
is.url('https://www.duckduckgo.com');
=> true

is.setRegexp(/quack/, 'url');
is.url('quack');
=> true
```
