interface User {
  name: string;
  age: number;
}

type User = {
  name: string;
  age: number;
};

interface Person {
  name: string;
}

interface Person {
  age: number;
}

// Result:
const p: Person = { name: "Sahil", age: 20 };  // OK

type Person = { name: string };
// type Person = { age: number }; // ❌ Error: Duplicate identifier 'Person'


interface Animal {
  species: string;
}

interface Dog extends Animal {
  bark(): void;
}


type Animal = {
  species: string;
};

type Dog = Animal & {
  bark(): void;
};


type Greet = (name: string) => string;

interface Greet {
  (name: string): string;
}

type ID = string | number;      // union
type Point = [number, number];  // tuple


interface Vehicle {
  wheels: number;
  drive(): void;
}

type Car = Vehicle & { brand: string };

const myCar: Car = {
  wheels: 4,
  brand: "Toyota",
  drive() {
    console.log("Driving...");
  }
};
