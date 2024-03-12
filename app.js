"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
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
// let big: bigint = 9020320302939n;
// Number (with uppercase) - refers to the non-primitive boxed object.
// string type
// let profile: string = `I'm ${big}`;
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
function log2(msg) {
    console.log(msg);
}
// You can only assign undefined to the variable that has void type
var useless = undefined;
// If the --strictNullChecks flas is not specified, you can assign the useless to null
// never type
function raiseError3(msg) {
    throw new Error(msg);
}
// union type
var num = "str";
var message; // same as string type
// literal type
var click;
// function type
function multiply4(a, b, c) {
    // optional
    if (typeof c !== "undefined") {
        return a * b * c;
    }
    return a * b;
}
// default parameters
function discount5(price) {
    if (price === void 0) { price = 0.05; }
    ///
}
// rest parameter
function getTotal6() {
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
var Person3 = /** @class */ (function () {
    function Person3(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person3.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Person3.prototype.describe = function () {
        return "This is ".concat(this.firstName, " ").concat(this.lastName, ".");
    };
    return Person3;
}());
// inheritance
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, jobTitle) {
        // call the constructor of the Person class:
        var _this = _super.call(this, firstName, lastName) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    Employee.prototype.describe = function () {
        return _super.prototype.describe.call(this) + "I'm a ".concat(this.jobTitle); // overriding
    };
    return Employee;
}(Person3));
// static methods
// abstract classes
var Employee4 = /** @class */ (function () {
    function Employee4(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Employee4.prototype, "fullName", {
        get: function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        },
        enumerable: false,
        configurable: true
    });
    Employee4.prototype.compensationStatement = function () {
        return "".concat(this.fullName, " makes ").concat(this.getSalary(), " a month.");
    };
    return Employee4;
}());
// Cannot create a new object from it
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(firstName, lastName, salary) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.salary = salary;
        return _this;
    }
    FullTimeEmployee.prototype.getSalary = function () {
        return this.salary;
    };
    return FullTimeEmployee;
}(Employee4));
function getName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var Person6 = /** @class */ (function () {
    function Person6(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person6.prototype.toJson = function () {
        return JSON.stringify(this);
    };
    return Person6;
}());
var emp = {
    name: "1",
    age: 20,
    id: 3000,
};
// Type casting & type assertion
// as keyword
var input = document.querySelector('input[type="text"]');
// <> operator
var input2 = document.querySelector('input[type="text"]');
// TypeScript Generics
function getRandom(arr) {
    if (arr.length === 0) {
        return null;
    }
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
var randomEl = getRandom([1, 2, 3]);
// generic functions with multiple types
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
// adding constraint
// extends
function merge2(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
// keyof extends - constains a type that is the property of another object
function prop(obj, key) {
    return obj[key];
}
// Generic classes
// Stack - data structure that works on the last-in-first-out (LIFO) principle
var Stack = /** @class */ (function () {
    function Stack(size) {
        this.size = size;
        this.elements = [];
    }
    Stack.prototype.isEmpty = function () {
        return this.elements.length === 0;
    };
    Stack.prototype.isFull = function () {
        return this.elements.length === this.size;
    };
    Stack.prototype.push = function (element) {
        if (this.elements.length === this.size) {
            throw new Error("The stack is overflow!");
        }
        this.elements.push(element);
    };
    Stack.prototype.pop = function () {
        if (this.elements.length === 0) {
            throw new Error("The stack is empty!");
        }
        return this.elements.pop();
    };
    return Stack;
}());
var numbers = new Stack(5);
var month = {
    key: "Jan",
    value: 1,
};
var inputOptions = {
    disabled: false,
    visible: true,
};
// default export (only one is allowed)
