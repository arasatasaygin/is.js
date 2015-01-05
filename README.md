is.js
=====

**Type checks:**
- arguments
- array
- boolean
- date
- error
- function
- nan
- null
- number
- object
- regexp
- sameType
- string
- undefined

**Presence checks:**
- empty
- existy
- truthy
- falsy
- space

**Arithmetic checks:**
- equal
- even
- odd
- positive
- negative
- least
- above
- within
- decimal
- finite
- infinite

**Regexp checks:**
- url
- email
- creditCard
- alphaNumeric
- time
- date
- usZipCode
- caPostalCode
- ukPostCode
- nanpPhone
- eppPhone
- socialSecurityNumber
- affirmative

**String checks:**
- upperCase
- lowerCase
- startWith
- endWith
- capitalized
- safeWord

**Environment checks:**
- core
  - defined
  - typeOf
  - instanceOf
  - prototypeOf
  - global
- browser
  - chrome
  - firefox
  - ie
  - opera
  - safari
- browserEngine
  - trident
  - gecko
  - webkit
  - presto
  - blink
- device
  - mobile
  - tablet
  - desktop
- os
  - linux
  - mac
  - windows

**Time checks:**
- future
- past
- today
- yesterday
- tomorrow
- month
  - january
  - ..
  - december
- year
- lastWeek
- lastMonth
- lastYear
- nextWeek
- nextMonth
- nextYear

**Array element checks:**
- allSame
- minimumOf
- maximumOf
- firstOf
- lastOf
- memberOf
- decreasing
- increasing

**Object checks:**
- extensible
- frozen
- sealed

**DOM checks:**
- collection    // HTML elements collection, such as childNodes
- nodelist
- domReady
- visible
- hidden
- checked
- enabled
- disabled
- firstChild
- lastChild
- onlyChlid

**Syntax checks:**
- xml
- json
- html

**ES6 checks:**
- generator
- symbol
- weakMap
- map
- set

**Provide escape hatch for possible name collisions**
**Provide RegExp set methods to library user**
