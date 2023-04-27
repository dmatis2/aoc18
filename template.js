"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_js_1 = require("./utils.js");
const first = (arr) => {
    const result = 0;
    console.log(result);
    return result;
};
const second = (arr) => {
    const result = 0;
    console.log(result);
    return result;
};
const data = (0, utils_js_1.getDataAsArray)((0, utils_js_1.getFileContent)('example.txt'));
console.assert(first(data) === 0, 'Not matching first part');
console.assert(second(data) === 0, 'Not matching second part');
