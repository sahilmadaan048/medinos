// generic functions

function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello")); // Hello
console.log(identity<number>(123));     // 123

// inferred generic type
const result = identity("TypeScript"); // TypeScript inferred as string


// multiople geneirc types
function pair<K, V>(key: K, value: V): [K, V] {
  return [key, value];
}

const result = pair<number, string>(1, "One"); // [1, "One"]

// generic constraints
function logLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}

logLength("Hello");         // ✅ Works (string has length)
logLength([1, 2, 3]);        // ✅ Works (array has length)
// logLength(42);            ❌ Error (number has no length)


// generic classes
class Box<T> {
  private contents: T;

  constructor(value: T) {
    this.contents = value;
  }

  getContents(): T {
    return this.contents;
  }
}

const numberBox = new Box<number>(123);
console.log(numberBox.getContents()); // 123

const stringBox = new Box<string>("TypeScript");
console.log(stringBox.getContents()); // TypeScript


// default generic ty[e
function wrapInArray<T = string>(value: T): T[] {
  return [value];
}

const defaultWrapped = wrapInArray("hi"); // inferred as string[]
const numberWrapped = wrapInArray<number>(10); // number[]

