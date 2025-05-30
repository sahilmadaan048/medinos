var value;
value = "hello"; // ✅ OK
value = 42; // ✅ OK
function printId(id) {
    console.log("Your ID is:", id);
}
function printLength(input) {
    if (typeof input === "string") {
        console.log(input.length); // string method
    }
    else {
        console.log(input.length); // array method
    }
}
var user = {
    name: "Sahil",
    employeeId: 101
};
// usually impractical but possible in theory
