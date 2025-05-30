var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// to represent a set of named constants, or when you wan tto represent a fixed jumber of possible values
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["Approved"] = 1] = "Approved";
    Status[Status["Rejected"] = 2] = "Rejected"; // 2
})(Status || (Status = {}));
var s = Status.Approved;
console.log(s); // 1
var Role;
(function (Role) {
    Role["Admin"] = "admin";
    Role["User"] = "user";
    Role["Guest"] = "guest";
})(Role || (Role = {}));
function getPermissions(role) {
    if (role === Role.Admin)
        return "All Access";
    if (role === Role.User)
        return "Limited Access";
    return "Read Only";
}
console.log(getPermissions(Role.User)); // Limited Access
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
console.log(Colors[1]); // Green
function updateStatus(status) {
    console.log("Status updated to:", status);
}
updateStatus("approved"); // ✅ OK
function renderButton(size) {
    if (size === "small")
        return "Rendering small button";
    if (size === "medium")
        return "Rendering medium button";
    return "Rendering large button";
}
