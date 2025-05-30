let name = "Alice";  // inferred as string
// name = 42; // ❌ Error: Type 'number' is not assignable to type 'string'

function add(a: number, b: number) {
  return a + b;
}
// The return type is inferred as number

let numbers = [1, 2, 3];      // inferred as number[]
let person = { name: "Bob", age: 30 };  // inferred as { name: string, age: number }


type Username = string;

let user1: Username = "Sahil";
let user2: Username = "Aman";

type User = {
  name: string;
  age: number;
  isActive: boolean;
};

const user: User = {
  name: "Alice",
  age: 25,
  isActive: true
};


type ID = number | string;

let userId: ID = 101;
userId = "abc123";  // OK
// userId = true;    // ❌ Error

type GreetFunction = (name: string) => string;

const greet: GreetFunction = (name) => {
  return `Hello, ${name}`;
};
