const heading: HTMLHeadingElement | null = document.querySelector("h1");

let person: {
  name: string;
  age: number;
} = {
  name: "Hi",
  age: 25,
};

// Type inference
let counter = 0;

// Type annotations
let items: (string | number | null)[] = [0, 1, null, "Hi"];

// number type
let price: number;

let bin = 0b100;

let big: bigint = 9020320302939n;

// Number (with uppercase) - refers to the non-primitive boxed object.

// string type
let profile: string = `I'm ${big}`;

// boolean type
let pending: boolean = true;

// Again.. Boolean type refers to the non-primitive boxed object. Avoid it!

// object type
// Primitive types: number, bigint, string, boolean, null, undefined, symbol

let employee: object;
// OR
let employee2: {
  firstName: string;
  lastname: string;
  age: number;
};

// Object vs object: Object - describes the functionality of all objects while object type represents all non-primitive values

let vacant: {} = {};

// Empty type {} refers to an object that has no property

// array type
let arrs: string[];

// tuple type
let skill: [string, number] = ["Programming", 5];

// optional tuple elements
let skill2: [string, number?] = ["Programming"];

// enum type

enum Month {
  Jan = 1,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

// example

enum ApprovalStatus {
  draft,
  submitted,
  approved,
  rejected,
}

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

function log(msg): void {
  console.log(msg);
}

// You can only assign undefined to the variable that has void type
let useless: void = undefined;

// If the --strictNullChecks flas is not specified, you can assign the useless to null

// never type

function raiseError(msg: string): never {
  throw new Error(msg);
}

// union type
let num: number | string = "str";

// type aliases
type chars = string;
let message: chars; // same as string type

// literal type
let click: "click" | "mouseup" | 2;

// function type
function multiply(a: number, b: number, c?: number): number {
  // optional
  if (typeof c !== "undefined") {
    return a * b * c;
  }
  return a * b;
}

// default parameters
function discount(price: number = 0.05) {
  ///
}

// rest parameter
function getTotal(...numbers: number[]): number {
  let total = 0;
  numbers.forEach((num) => (total += num));
  return total;
}

// function overloading
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}

// access modifiers
// private - within the same class
class Person {
  private ssn: string;
  private firstName: string;
  private lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

// public - from any location

// protected - within the same class and subclasses

// readonly
class Person2 {
  constructor(readonly birthDate: Date) {
    this.birthDate = birthDate;
  }
}

class Person3 {
  constructor(private firstName: string, private lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
}

// inheritance
class Employee extends Person3 {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    // call the constructor of the Person class:
    super(firstName, lastName);
  }

  describe(): string {
    return super.describe() + `I'm a ${this.jobTitle}`; // overriding
  }
}

// static methods

// abstract classes
abstract class Employee4 {
  constructor(private firstName: string, private lastName: string) {}
  abstract getSalary(): number;
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  compensationStatement(): string {
    return `${this.fullName} makes ${this.getSalary()} a month.`;
  }
}

// Cannot create a new object from it

class FullTimeEmployee extends Employee4 {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName);
  }
  getSalary(): number {
    return this.salary;
  }
}

// An abstract class has at least one abstract method

// interface

interface Person5 {
  firstName: string;
  lastName: string;
}

function getName(person: Person5) {
  return `${person.firstName} ${person.lastName}`;
}
