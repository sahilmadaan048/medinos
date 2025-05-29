console.log('Hello from TS');
let myString: string;

myString = "sahil madaan";

console.log(myString);

let myNum: number;
myNum = 22;
console.log(myNum);

// myNum = "sahil";

let myBool: boolean;
myBool = true;
console.log(myBool);

myString = "sahil" + "name";
myString = "hello".slice(0, 3);

console.log(myString);

let myVar =  true;

// arrays
let strArray: string[];
strArray = ['hello', 'world'];

let numArray: number[];
numArray = [1, 2, 3];

console.log(strArray);
console.log(numArray);


// other way to do ot
let boolArray: Array<boolean>;

boolArray = [true, false, false];

console.log(boolArray);


// tuples
let numStrTuple: [string, number, number];
numStrTuple = ["sahil", 1, 2];
console.log(numStrTuple);

// void type
let myVoid: void = null;
let myVoid2: void = undefined;
let myNull: null = null;
let myUndefined: undefined = null;

console.log(myVoid);

