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
