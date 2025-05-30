// Example 1: Add Two Numbers

function add(a: number, b: number): number {
  return a + b;
}


// Example 2: Greeting Message

function greet(name: string): string {
  return "Hello, " + name;
}


// Example 3: Check Even or Odd

function isEven(num: number): boolean {
  return num % 2 === 0;
}


// Example 4: Find Maximum of Two Numbers

function max(a: number, b: number): number {
  return a > b ? a : b;
}


//  Example 5: Reverse a String

function reverse(str: string): string {
  return str.split('').reverse().join('');
}

// Define and Implement an Interface for a User Object

// Step 1: Define Interface
interface User {
    id: number,
    name: string,
    email: string,
    isActive: boolean,
}


// Step 2: Use Interface in a Function
function printUser(user: User): void {
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    console.log(`Active: ${user.isActive}`);
}

//  Step 3: Create a User Object
const user1: User = {
  id: 1,
  name: "Sahil Madaan",
  email: "sahil@example.com",
  isActive: true
};

printUser(user1);