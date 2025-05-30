let username: string = "Alice";
username = "Bob";  // OK
// username = 123; // Error: Type 'number' is not assignable to type 'string'

let age: number = 25;
age = 30.5;  // OK
// age = "25"; // Error: Type 'string' is not assignable to type 'number'

let isActive: boolean = true;
isActive = false;  // OK
// isActive = "yes"; // Error: Type 'string' is not assignable to type 'boolean'

let anything: any = 5;
anything = "hello";  // OK
anything = true;     // OK

let value: unknown = 10;
value = "hello";  // OK
value = true;     // OK

// Can't do this directly:
// let str: string = value;  // Error: Type 'unknown' is not assignable to type 'string'

// Need type-checking first:
if (typeof value === "string") {
  let str: string = value;  // OK
}

function logMessage(message: string): void {
  console.log(message);
}
// The function returns nothing (void)

function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // forever
  }
}


function processValue(value: unknown): void {
  if (typeof value === "string") {
    console.log("String value:", value.toUpperCase());
  } else if (typeof value === "number") {
    console.log("Number value:", value.toFixed(2));
  } else if (typeof value === "boolean") {
    console.log("Boolean value:", value ? "Yes" : "No");
  } else {
    console.log("Unknown type");
  }
}

let anything: any = "hello";
processValue(anything);  // String value: HELLO

function fail(): never {
  throw new Error("This always fails");
}
