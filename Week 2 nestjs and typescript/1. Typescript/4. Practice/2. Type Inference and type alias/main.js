var name = "Alice"; // inferred as string
// name = 42; // ❌ Error: Type 'number' is not assignable to type 'string'
function add(a, b) {
    return a + b;
}
// The return type is inferred as number
var numbers = [1, 2, 3]; // inferred as number[]
var person = { name: "Bob", age: 30 }; // inferred as { name: string, age: number }
var user1 = "Sahil";
var user2 = "Aman";
var user = {
    name: "Alice",
    age: 25,
    isActive: true
};
var userId = 101;
userId = "abc123"; // OK
var greet = function (name) {
    return "Hello, ".concat(name);
};
