function functionName(param1: Type1, param2: Type2): ReturnType {
  // function body
}

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 3)); // 5

function greet(name: string): string {
  return `Hello, ${name}!`;
}

function log(message: string, userId?: number): void {
  if (userId !== undefined) {
    console.log(`User #${userId}: ${message}`);
  } else {
    console.log(message);
  }
}


function multiply(a: number, b: number = 2): number {
  return a * b;
}

console.log(multiply(5)); // 10

const subtract = (x: number, y: number): number => {
  return x - y;
};


function sayHi(): void {
  console.log("Hi");
}


function throwError(message: string): never {
  throw new Error(message);
}

// using tyoe alisesfor fcuntions
type Operation = (a: number, b: number) => number;

const divide: Operation = (a, b) => a / b;

// using interfacxes for functons
interface Formatter {
  (value: string): string;
}

const toUpper: Formatter = (val) => val.toUpperCase();

