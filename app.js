var heading = document.querySelector("h1");
var person = {
    name: "Hi",
    age: 25,
};
// Type inference
var counter = 0;
// Type annotations
var items = [0, 1, null, "Hi"];
// number type
var price;
var bin = 4;
var big = 9020320302939n;
// Number (with uppercase) - refers to the non-primitive boxed object.
// string type
var profile = "I'm ".concat(big);
// boolean type
var pending = true;
// Again.. Boolean type refers to the non-primitive boxed object. Avoid it!
// object type
// Primitive types: number, bigint, string, boolean, null, undefined, symbol
var employee;
// OR
var employee2;
// Object vs object: Object - describes the functionality of all objects while object type represents all non-primitive values
var vacant = {};
// Empty type {} refers to an object that has no property
// array type
var arrs;
// tuple type
var skill = ["Programming", 5];
// optional tuple elements
var skill2 = ["Programming"];
// enum type
var Month;
(function (Month) {
    Month[Month["Jan"] = 1] = "Jan";
    Month[Month["Feb"] = 2] = "Feb";
    Month[Month["Mar"] = 3] = "Mar";
    Month[Month["Apr"] = 4] = "Apr";
    Month[Month["May"] = 5] = "May";
    Month[Month["Jun"] = 6] = "Jun";
    Month[Month["Jul"] = 7] = "Jul";
    Month[Month["Aug"] = 8] = "Aug";
    Month[Month["Sep"] = 9] = "Sep";
    Month[Month["Oct"] = 10] = "Oct";
    Month[Month["Nov"] = 11] = "Nov";
    Month[Month["Dec"] = 12] = "Dec";
})(Month || (Month = {}));
// example
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["draft"] = 0] = "draft";
    ApprovalStatus[ApprovalStatus["submitted"] = 1] = "submitted";
    ApprovalStatus[ApprovalStatus["approved"] = 2] = "approved";
    ApprovalStatus[ApprovalStatus["rejected"] = 3] = "rejected";
})(ApprovalStatus || (ApprovalStatus = {}));
var request = {
    id: 2,
    status: ApprovalStatus.approved,
};
if (request.status === ApprovalStatus.approved) {
    console.log("Send email");
}
// any type
var result;
// can disable implicit typing to the any type in the tsconfig.json (change noImplicitAny)
// void type
function log(msg) {
    console.log(msg);
}
// You can only assign undefined to the variable that has void type
var useless = undefined;
// If the --strictNullChecks flas is not specified, you can assign the useless to null
// never type
function raiseError(msg) {
    throw new Error(msg);
}
// union type
var num = "str";
var message; // same as string type
// literal type
var click;
// function type
function multiply(a, b, c) {
    // optional
    if (typeof c !== "undefined") {
        return a * b * c;
    }
    return a * b;
}
// default parameters
function discount(price) {
    if (price === void 0) { price = 0.05; }
    ///
}
// rest parameter
function getTotal() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return (total += num); });
    return total;
}
function add(a, b) {
    return a + b;
}
// access modifiers
// private - within the same class
var Person = /** @class */ (function () {
    function Person(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
// public - from any location
// protected - within the same class and subclasses
// readonly
var Person2 = /** @class */ (function () {
    function Person2(birthDate) {
        this.birthDate = birthDate;
        this.birthDate = birthDate;
    }
    return Person2;
}());
