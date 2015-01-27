Type checks
===========

is.arguments(value:any)
-----------------------
####Checks if given value type is arguments.
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
####Checks if given value type is array.
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
####Checks if given value type is boolean.
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
####Checks if given value type is date.
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

is.error(value:any)
-------------------
####Checks if given value type is error.
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
####Checks if given value type is function.
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
####Checks if given value type is NaN.
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
####Checks if given value type is null.
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
####Checks if given value type is number.
interfaces: not, all, any

```javascript
is.number(42);
=> true

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
####Checks if given value type is object.
interfaces: not, all, any

```javascript
is.object({foo: 'bar'});
=> true

// functions are also returnin as true
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

is.regexp(value:any)
--------------------
####Checks if given value type is RegExp.
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
####Checks if given value type is string.
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

is.undefined(value:any)
-----------------------
####Checks if given value type is undefined.
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

is.sameType(value:any, value:any)
---------------------------------
####Checks if given value types are same type.
interface: not

```javascript
is.sameType(42, 7);
=> true

is.sameType(42, '7');
=> false

is.not.sameType(42, 7);
=> false
```

Presence checks
===============

is.empty(value:object|array|string)
-----------------------------------
####Checks if given value is empty.
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
####Checks if given value is existy. (not null or undefined)
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
####Checks if given value is truthy. (existy and not false)
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
####Checks if given value is falsy.
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

is.space(value:string)
----------------------
####Checks if given value is space.
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
####Checks if given value matches url regexp.
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
####Checks if given value matches email regexp.
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
####Checks if given value matches credit card regexp.
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
####Checks if given value matches alpha numeric regexp.
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
####Checks if given value matches time string regexp.
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
####Checks if given value matches date string regexp.
interfaces: not, all, any

```javascript
is.dateString('11/11/2011');
=> true

is.dateString('90/11/2011');
=> false

is.not.dateString('90/11/2011');
=> true

is.all.dateString('11/11/2011', '90/11/2011');
=> false

is.any.dateString('11/11/2011', '90/11/2011');
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.dateString(['11/11/2011', '90/11/2011']);
=> false
```

is.usZipCode(value:any)
-----------------------
####Checks if given value matches US zip code regexp.
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
####Checks if given value matches Canada postal code regexp.
interfaces: not, all, any

```javascript
is.caPostalCode('L8V3Y1');
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
####Checks if given value matches UK post code regexp.
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
####Checks if given value matches North American numbering plan phone regexp.
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
####Checks if given value matches extensible provisioning protocol phone regexp.
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
####Checks if given value matches social security number regexp.
interfaces: not, all, any

```javascript
is.socialSecurityNumber('017-90-7890');
=> true

is.socialSecurityNumber('123');
=> false

is.not.socialSecurityNumber('123');
=> true

is.all.socialSecurityNumber('017-90-7890', '123');
=> false

is.any.socialSecurityNumber('017-90-7890', '123');
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.socialSecurityNumber(['017-90-7890', '123']);
=> false
```

is.affirmative(value:any)
-------------------------
####Checks if given value matches affirmative regexp.
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

String checks
=============

is.include(value:string, value:substring)
-----------------------------------------
####Checks if given string contains a substring.
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
####Checks if given string is UPPERCASE.
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
####Checks if given string is lowercase.
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

is.startWith(value:string, value:substring)
-------------------------------------------
####Checks if given string starts with substring.
interface: not

```javascript
is.startWith('yeap', 'ye');
=> true

is.startWith('nope', 'ye');
=> false

is.not.startWith('nope not that', 'not');
=> true
```

is.endWith(value:string, value:substring)
-----------------------------------------
####Checks if given string ends with substring.
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

is.capitalized(value:string, value:substring)
---------------------------------------------
####Checks if given string is capitalized.
interfaces: not, all, any

```javascript
is.capitalized('Yeap');
=> true

is.capitalized('nope');
=> false

is.not.capitalized('nope not capitalized');
=> true

is.capitalized('Yeap Capitalized');
=> true

is.all.capitalized('Yeap', 'All', 'Capitalized');
=> true

is.any.capitalized('Yeap', 'some', 'Capitalized');
=> true

// 'all' and 'any' interfaces can also take array parameter
is.all.upperCase(['Nope', 'not']);
=> false
```

**Arithmetic checks:**
- [x] equal
- [x] even
- [x] odd
- [x] positive
- [x] negative
- [x] under
- [x] above
- [x] within
- [x] decimal
- [x] integer
- [x] finite
- [x] infinite

**Time checks:**
- [x] today
- [x] yesterday
- [x] tomorrow
- [x] past
- [x] future
- [x] day
- [x] month
- [x] year
- [x] weekDay
- [x] weekEnd
- [x] inDateRange
- [x] inLastWeek
- [x] inLastMonth
- [x] inLastYear
- [x] inNextWeek
- [x] inNextMonth
- [x] inNextYear
- [x] quarterOfYear
- [x] daylightSavingTime

**Environment checks:**
- [x] chrome
- [x] firefox
- [x] ie
- [x] opera
- [x] safari
- [x] ios
- [x] iphone
- [x] ipad
- [x] ipod
- [x] android
- [x] androidPhone
- [x] androidTablet
- [x] mobile
- [x] tablet
- [x] desktop
- [x] linux
- [x] mac
- [x] windows
- [x] windowsPhone
- [x] windowsTablet
- [x] blackberry
- [x] online
- [x] offline

**Object checks:**
- [x] propertyCount
- [x] propertyDefined
- [x] windowObject

**Array checks:**
- [x] sorted

**Configuration methods:**
- [x] setRegexp
- [x] setNamespace
