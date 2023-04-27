"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_js_1 = require("./utils.js");
const getLettersCount = (word) => {
    const map = new Map();
    word.split('').forEach((letter) => {
        if (!map.has(letter)) {
            map.set(letter, 0);
        }
        map.set(letter, map.get(letter) + 1);
    });
    return map;
};
const first = (arr) => {
    const counts = arr.reduce((acc, val) => {
        const map = getLettersCount(val);
        const set = new Set(map.values());
        return [acc[0] + (set.has(2) ? 1 : 0), acc[1] + (set.has(3) ? 1 : 0)];
    }, [0, 0]);
    const result = counts.reduce((acc, val) => acc * val, 1);
    console.log(result);
    return result;
};
const second = (arr) => {
    let result = '';
    arr.forEach((word, index) => {
        arr.slice(index + 1).forEach((word2) => {
            const w1Arr = word.split('');
            const w2Arr = word2.split('');
            let [restW1, restW2] = [[], []];
            const diff = w1Arr.filter((val, index) => {
                const test = val !== w2Arr[index];
                if (test) {
                    restW1 = [...w1Arr.slice(0, index), ...w1Arr.slice(index + 1)];
                    restW2 = [...w2Arr.slice(0, index), ...w2Arr.slice(index + 1)];
                }
                return test;
            });
            const diffCount = diff.length;
            if (diffCount === 1) {
                result = restW1.join('');
            }
        });
    });
    console.log(result);
    return result;
};
const data = (0, utils_js_1.getDataAsArray)((0, utils_js_1.getFileContent)('input.txt'));
console.assert(first(data) === 8296, 'Not matching first part');
console.assert(second(data) === 'pazvmqbftrbeosiecxlghkwud', 'Not matching second part');
