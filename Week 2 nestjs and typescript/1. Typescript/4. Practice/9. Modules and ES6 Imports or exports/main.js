"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
var mathutils_1 = require("./mathutils");
var mathutils_2 = require("./mathutils");
var logger_1 = require("./logger");
console.log((0, mathutils_1.add)(2, 3)); // 5
console.log((0, mathutils_2.add)(2, 3)); // 5
console.log(mathutils_1.PI); // 3.14159
(0, logger_1.default)('application started');
var user = { id: 1, name: "Sahil" };
var currentStatus = "active";
