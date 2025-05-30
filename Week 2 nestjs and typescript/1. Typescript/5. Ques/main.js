// Example 1: Add Two Numbers
function add(a, b) {
    return a + b;
}
// Example 2: Greeting Message
function greet(name) {
    return "Hello, " + name;
}
// Example 3: Check Even or Odd
function isEven(num) {
    return num % 2 === 0;
}
// Example 4: Find Maximum of Two Numbers
function max(a, b) {
    return a > b ? a : b;
}
//  Example 5: Reverse a String
function reverse(str) {
    return str.split('').reverse().join('');
}
// Step 2: Use Interface in a Function
function printUser(user) {
    console.log("ID: ".concat(user.id));
    console.log("Name: ".concat(user.name));
    console.log("Email: ".concat(user.email));
    console.log("Active: ".concat(user.isActive));
}
//  Step 3: Create a User Object
var user1 = {
    id: 1,
    name: "Sahil Madaan",
    email: "sahil@example.com",
    isActive: true
};
printUser(user1);
