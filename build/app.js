"use strict";
// const heading: HTMLHeadingElement | null = document.querySelector("h1");
Object.defineProperty(exports, "__esModule", { value: true });
let person = {
    name: "Hi",
    age: 25,
};
// Type inference
let counter = 0;
// Type annotations
let items = [0, 1, null, "Hi"];
// number type
let price;
let bin = 0b100;
// let big: bigint = 9020320302939n;
// Number (with uppercase) - refers to the non-primitive boxed object.
// string type
// let profile: string = `I'm ${big}`;
// boolean type
let pending = true;
// Again.. Boolean type refers to the non-primitive boxed object. Avoid it!
// object type
// Primitive types: number, bigint, string, boolean, null, undefined, symbol
let employee;
// OR
let employee2;
// Object vs object: Object - describes the functionality of all objects while object type represents all non-primitive values
let vacant = {};
// Empty type {} refers to an object that has no property
// array type
let arrs;
// tuple type
let skill = ["Programming", 5];
// optional tuple elements
let skill2 = ["Programming"];
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
const request = {
    id: 2,
    status: ApprovalStatus.approved,
};
if (request.status === ApprovalStatus.approved) {
    console.log("Send email");
}
// any type
let result;
// can disable implicit typing to the any type in the tsconfig.json (change noImplicitAny)
// void type
function log2(msg) {
    console.log(msg);
}
// You can only assign undefined to the variable that has void type
let useless = undefined;
// If the --strictNullChecks flas is not specified, you can assign the useless to null
// never type
function raiseError3(msg) {
    throw new Error(msg);
}
// union type
let num = "str";
let message; // same as string type
// literal type
let click;
// function type
function multiply4(a, b, c) {
    // optional
    if (typeof c !== "undefined") {
        return a * b * c;
    }
    return a * b;
}
// default parameters
function discount5(price = 0.05) {
    ///
}
// rest parameter
function getTotal6(...numbers) {
    let total = 0;
    numbers.forEach((num) => (total += num));
    return total;
}
function add(a, b) {
    return a + b;
}
// access modifiers
// private - within the same class
class Person {
    constructor(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
// public - from any location
// protected - within the same class and subclasses
// readonly
class Person2 {
    constructor(birthDate) {
        this.birthDate = birthDate;
        this.birthDate = birthDate;
    }
}
class Person3 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    describe() {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}
// inheritance
class Employee extends Person3 {
    constructor(firstName, lastName, jobTitle) {
        // call the constructor of the Person class:
        super(firstName, lastName);
        this.jobTitle = jobTitle;
    }
    describe() {
        return super.describe() + `I'm a ${this.jobTitle}`; // overriding
    }
}
// static methods
// abstract classes
class Employee4 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement() {
        return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
}
// Cannot create a new object from it
class FullTimeEmployee extends Employee4 {
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
function getName(person) {
    return `${person.firstName} ${person.lastName}`;
}
class Person6 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    toJson() {
        return JSON.stringify(this);
    }
}
let emp = {
    name: "1",
    age: 20,
    id: 3000,
};
// Type casting & type assertion
// as keyword
// let input = document.querySelector('input[type="text"]') as HTMLInputElement;
// <> operator
// let input2 = <HTMLInputElement>document.querySelector('input[type="text"]');
// TypeScript Generics
function getRandom(arr) {
    if (arr.length === 0) {
        return null;
    }
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
let randomEl = getRandom([1, 2, 3]);
// generic functions with multiple types
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
// adding constraint
// extends
function merge2(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
// keyof extends - constains a type that is the property of another object
function prop(obj, key) {
    return obj[key];
}
// Generic classes
// Stack - data structure that works on the last-in-first-out (LIFO) principle
class Stack {
    constructor(size) {
        this.size = size;
        this.elements = [];
    }
    isEmpty() {
        return this.elements.length === 0;
    }
    isFull() {
        return this.elements.length === this.size;
    }
    push(element) {
        if (this.elements.length === this.size) {
            throw new Error("The stack is overflow!");
        }
        this.elements.push(element);
    }
    pop() {
        if (this.elements.length === 0) {
            throw new Error("The stack is empty!");
        }
        return this.elements.pop();
    }
}
let numbers = new Stack(5);
let month = {
    key: "Jan",
    value: 1,
};
let inputOptions = {
    disabled: false,
    visible: true,
};
// default export (only one is allowed)
// Node.js integration
// tsc --init (create tsconfig.json)
console.log("test");
console.log("test2");
