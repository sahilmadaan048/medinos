enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// to represent a set of named constants, or when you wan tto represent a fixed jumber of possible values

enum Status {
  Pending,    // 0
  Approved,   // 1
  Rejected    // 2
}

let s: Status = Status.Approved;
console.log(s); // 1

enum Role {
  Admin = "admin",
  User = "user",
  Guest = "guest"
}

function getPermissions(role: Role) {
  if (role === Role.Admin) return "All Access";
  if (role === Role.User) return "Limited Access";
  return "Read Only";
}

console.log(getPermissions(Role.User)); // Limited Access


enum Colors {
  Red,
  Green,
  Blue
}

console.log(Colors[1]); // Green


// Literal Values
// Literal types allow you to specify exact string, number, or boolean values a variable can hold.

type Direction = "up" | "down" | "left" | "right";

type Status = "pending" | "approved" | "rejected";

function updateStatus(status: Status) {
  console.log("Status updated to:", status);
}

updateStatus("approved");  // ✅ OK
// updateStatus("done");   // ❌ Error



type ButtonSize = "small" | "medium" | "large";

function renderButton(size: ButtonSize) {
  if (size === "small") return "Rendering small button";
  if (size === "medium") return "Rendering medium button";
  return "Rendering large button";
}
