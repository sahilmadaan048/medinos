// main.ts
import { add, PI } from './mathutils';
import { add as sum } from './mathutils';

import log from './logger';

console.log(add(2, 3));      // 5
console.log(sum(2, 3));      // 5
console.log(PI);             // 3.14159

log('application started');


// import everything


// import * as math from './mathUtils';

// console.log(math.add(5, 6)); // 11
// console.log(math.PI);        // 3.14159


// main.ts
import { User, Status } from './types';

const user: User = { id: 1, name: "Sahil" };
let currentStatus: Status = "active";


