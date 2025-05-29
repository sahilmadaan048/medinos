function getSum(num1: number, num2: number) : number {
    return num1 + num2;
    // return 'Hello';
}

console.log(getSum(1, 2));

let mySum = function(num1: number, num2: number) {
    return num1 + num2;
}

console.log(mySum(3, 5));


// using any
let mySum2 = function(num1: any, num2: any) {
    if(typeof num1 == 'string') {
        num1 = parseInt(num1);
    }

    if(typeof num2 == 'string') {
        num2 = parseInt(num2);
    }

    return num1 + num2;
}

console.log(mySum2('3', 5));


// using strings as input type and ot passing one of thew aparameters

function getName(first: string, last?: string) : string {
    if(last == undefined) {
        return first;
    }
    return first + ' ' + last; 
}

console.log(getName('sahil'));
console.log(getName('sahil', 'madaan'));

// void return type

function  myVoid(): void {
    return;
}