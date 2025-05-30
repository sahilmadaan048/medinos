function functionName(param1, param2) {
    // function body
}
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // 5
function greet(name) {
    return "Hello, ".concat(name, "!");
}
function log(message, userId) {
    if (userId !== undefined) {
        console.log("User #".concat(userId, ": ").concat(message));
    }
    else {
        console.log(message);
    }
}
function multiply(a, b) {
    if (b === void 0) { b = 2; }
    return a * b;
}
console.log(multiply(5)); // 10
var subtract = function (x, y) {
    return x - y;
};
function sayHi() {
    console.log("Hi");
}
function throwError(message) {
    throw new Error(message);
}
var divide = function (a, b) { return a / b; };
var toUpper = function (val) { return val.toUpperCase(); };
