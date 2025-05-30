// generic functions
function identity(value) {
    return value;
}
console.log(identity("Hello")); // Hello
console.log(identity(123)); // 123
// inferred generic type
var result = identity("TypeScript"); // TypeScript inferred as string
// multiople geneirc types
function pair(key, value) {
    return [key, value];
}
var result = pair(1, "One"); // [1, "One"]
// generic constraints
function logLength(item) {
    console.log(item.length);
}
logLength("Hello"); // ✅ Works (string has length)
logLength([1, 2, 3]); // ✅ Works (array has length)
// logLength(42);            ❌ Error (number has no length)
// generic classes
var Box = /** @class */ (function () {
    function Box(value) {
        this.contents = value;
    }
    Box.prototype.getContents = function () {
        return this.contents;
    };
    return Box;
}());
var numberBox = new Box(123);
console.log(numberBox.getContents()); // 123
var stringBox = new Box("TypeScript");
console.log(stringBox.getContents()); // TypeScript
// default generic ty[e
function wrapInArray(value) {
    return [value];
}
var defaultWrapped = wrapInArray("hi"); // inferred as string[]
var numberWrapped = wrapInArray(10); // number[]
