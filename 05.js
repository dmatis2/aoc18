"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_js_1 = require("./utils.js");
const getMappings = () => {
    const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(97 + i));
    const map = new Map();
    alphabet.forEach(alpha => {
        map.set(alpha, alpha.toUpperCase());
        map.set(alpha.toUpperCase(), alpha);
    });
    return map;
};
const first = (str) => {
    const mapping = getMappings();
    let stack = [str[0]];
    const strArr = str.split('');
    strArr.slice(1).forEach(char => {
        var _a;
        if (stack.length > 0 && char === mapping.get((_a = stack[stack.length - 1]) !== null && _a !== void 0 ? _a : '')) {
            stack.pop();
        }
        else {
            stack = [...stack, char];
        }
    });
    const result = stack.length;
    console.log(result);
    return result;
};
const second = (str) => {
    const result = 0;
    console.log(result);
    return result;
};
const data = (0, utils_js_1.getFileContent)('input.txt');
console.assert(first(data) === 0, 'Not matching first part');
console.assert(second(data) === 0, 'Not matching second part');
