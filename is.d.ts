
interface validators {
    array(value: any): boolean;
}

interface IsSingleStatic {

    arguments(value: any): boolean;
    array(value: any): boolean;
    boolean(value: any): boolean;
    date(value: any): boolean;
    error(value: any): boolean;
    function(value: any): boolean;
    nan(value: any): boolean;
    null(value: any): boolean;
    number(value: any): boolean;
    object(value: any): boolean;
    json(value: any): boolean;
    regexp(value: any): boolean;
    sameType(value1: any, value2: any): boolean;
    string(value: any): boolean;
    char(value: any): boolean;
    undefined(value: any): boolean;

    empty(value: any): boolean;
    existy(value: any): boolean;
    truthy(value: any): boolean;
    falsy(value: any): boolean;
    space(value: any): boolean;

    equal(value1: number, value2: number): boolean;
    even(value: number): boolean;
    odd(value: number): boolean;
    positive(value: number): boolean;
    negative(value: number): boolean;
    above(value: number, min: number): boolean;
    under(value: number, max: number): boolean;
    within(value: number, min: number, max: number): boolean;
    decimal(value: number): boolean;
    integer(value: number): boolean;
    finite(value: number): boolean;
    infinite(value: number): boolean;

    url(value: any): boolean;
    email(value: any): boolean;
    creditcard(value: any): boolean;
    alphaNumeric(value: any): boolean;
    timeString(value: any): boolean;
    dateString(value: any): boolean;
    usZipCode(value: any): boolean;
    caPostalCode(value: any): boolean;
    ukPostCode(value: any): boolean;
    nanpPhone(value: any): boolean;
    eppPhone(value: any): boolean;
    socialSecurityNumber(value: any): boolean;
    affirmative(value: any): boolean;
    hexadecimal(value: any): boolean;
    hexColor(value: any): boolean;
    ipv4(value: any): boolean;
    ipv6(value: any): boolean;
    ip(value: any): boolean;

    include(value: string): boolean;
    upperCase(value: string): boolean;
    lowerCase(value: string): boolean;
    startWith(value: string, startWith: string): boolean;
    endWith(value: string, startWith: string): boolean;
    capitalized(value: string): boolean;
    palindrome(value: string): boolean;

    today(value: Date): boolean;
    yesterday(value: Date): boolean;
    tomorrow(value: Date): boolean;
    past(value: Date): boolean;
    future(value: Date): boolean;
    day(value: Date, dayString: string): boolean;
    month(value: Date, monthString: string): boolean;
    year(value: Date, year: number): boolean;
    leapYear(year: number): boolean;
    weekend(value: Date): boolean;
    weekday(value: Date): boolean;
    inDateRange(value: Date, startObj: Date, endObj: Date): boolean;
    inLastWeek(value: Date): boolean;
    inLastMonth(value: Date): boolean;
    inLastYear(value: Date): boolean;
    inNextWeek(value: Date): boolean;
    inNextMonth(value: Date): boolean;
    inNextyear(value: Date): boolean;
    quarterOfYear(value: Date, quarter: number): boolean;
    dayLightSavingTime(value: Date): boolean;

    chrome(): boolean;
    firefox(): boolean;
    ie(): boolean;
    opera(): boolean;
    safari(): boolean;
    ios(): boolean;
    iphone(): boolean;
    ipad(): boolean;
    ipod(): boolean;
    android(): boolean;
    androidPhone(): boolean;
    androidTablet(): boolean;
    blackberry(): boolean;
    desktop(): boolean;
    linux(): boolean;
    mac(): boolean;
    windows(): boolean;
    windowsPhone(): boolean;
    windowsTablet(): boolean;
    mobile(): boolean;
    tablet(): boolean;
    online(): boolean;
    offline(): boolean;
    touchDevice(): boolean;

    propertyCount(obj: any, count: number): boolean;
    propertyDefined(obj: any, property: string): boolean;
    windowObject(obj: any): boolean;
    domNode(obj: any): boolean;

    inArray(value: any, array: any[]): boolean;
    sorted(array: any[]): boolean;

}

interface IsStatic extends IsSingleStatic {

    VERSION: string;
    setRegexp(regexp: RegExp, regexpName: string): void;
    setNamespace(): void;

    not: IsSingleStatic;
    any: IsListStatic;
    all: IsListStatic;
}



interface IsListStatic {

    arguments(values: any[]): boolean;
    array(values: any[]): boolean;
    boolean(values: any[]): boolean;
    date(values: any[]): boolean;
    error(values: any[]): boolean;
    function(values: any[]): boolean;
    nan(values: any[]): boolean;
    null(values: any[]): boolean;
    number(values: any[]): boolean;
    object(values: any[]): boolean;
    json(values: any[]): boolean;
    regexp(values: any[]): boolean;
    string(values: any[]): boolean;
    char(values: any[]): boolean;
    undefined(values: any[]): boolean;

    empty(values: any[]): boolean;
    existy(values: any[]): boolean;
    truthy(values: any[]): boolean;
    falsy(values: any[]): boolean;
    space(values: any[]): boolean;

    even(values: number[]): boolean;
    odd(values: number[]): boolean;
    positive(values: number[]): boolean;
    negative(values: number[]): boolean;
    decimal(values: number[]): boolean;
    integer(values: number[]): boolean;
    finite(values: number[]): boolean;
    infinite(values: number[]): boolean;

    url(values: any[]): boolean;
    email(values: any[]): boolean;
    creditcard(values: any[]): boolean;
    alphaNumeric(values: any[]): boolean;
    timeString(values: any[]): boolean;
    dateString(values: any[]): boolean;
    usZipCode(values: any[]): boolean;
    caPostalCode(values: any[]): boolean;
    ukPostCode(values: any[]): boolean;
    nanpPhone(values: any[]): boolean;
    eppPhone(values: any[]): boolean;
    socialSecurityNumber(values: any[]): boolean;
    affirmative(values: any[]): boolean;
    hexadecimal(values: any[]): boolean;
    hexColor(values: any[]): boolean;
    ipv4(values: any[]): boolean;
    ipv6(values: any[]): boolean;
    ip(values: any[]): boolean;

    upperCase(values: string[]): boolean;
    lowerCase(values: string[]): boolean;
    capitalized(values: string[]): boolean;
    palindrome(values: string[]): boolean;

    today(values: Date[]): boolean;
    yesterday(values: Date[]): boolean;
    tomorrow(values: Date[]): boolean;
    past(values: Date[]): boolean;
    future(values: Date[]): boolean;
    weekend(values: Date[]): boolean;
    weekday(values: Date[]): boolean;
    inLastWeek(values: Date[]): boolean;
    inLastMonth(values: Date[]): boolean;
    inLastYear(values: Date[]): boolean;
    inNextWeek(values: Date[]): boolean;
    inNextMonth(values: Date[]): boolean;
    inNextyear(values: Date[]): boolean;
    quarterOfYear(values: Date[], quarter: number[]): boolean;
    dayLightSavingTime(values: Date[]): boolean;

    windowObject(objs: any[]): boolean;
    domNode(objs: any[]): boolean;

}

declare var is: IsStatic;

declare module "is" {
    export = is;
}


