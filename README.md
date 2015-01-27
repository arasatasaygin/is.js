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

**Regexp checks:**
- [x] url
- [x] email
- [x] creditCard
- [x] alphaNumeric
- [x] timeString
- [x] dateString
- [x] usZipCode
- [x] caPostalCode
- [x] ukPostCode
- [x] nanpPhone
- [x] eppPhone
- [x] socialSecurityNumber
- [x] affirmative

**String checks:**
- [x] include
- [x] upperCase
- [x] lowerCase
- [x] startWith
- [x] endWith
- [x] capitalized

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
