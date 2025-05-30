type AorB = TypeA | TypeB;

let value: string | number;

value = "hello";  // ✅ OK
value = 42;       // ✅ OK
// value = true;  // ❌ Error: boolean not allowed

type ID = string | number;

function printId(id: ID) {
  console.log("Your ID is:", id);
}

function printLength(input: string | string[]) {
  if (typeof input === "string") {
    console.log(input.length); // string method
  } else {
    console.log(input.length); // array method
  }
}

type AB = TypeA & TypeB;

type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;

const user: Staff = {
  name: "Sahil",
  employeeId: 101
};

//the user must have al l the peoperties for both person and employee

type Logger = () => void;
type ErrorHandler = (err: Error) => void;

type AppFunction = Logger & ErrorHandler; // Usually impractical but possible in theory

// usually impractical but possible in theory