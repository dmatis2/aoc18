"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_js_1 = require("./utils.js");
const parseInput = (data) => {
    const regex = /\[(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2}) (?<hour>\d{2}):(?<minute>\d{2})\] (?<action>.+)/;
    const parsed = data.map(line => {
        var _a, _b, _c, _d, _e, _f;
        const match = line.match(regex);
        return {
            year: parseInt(((_a = match === null || match === void 0 ? void 0 : match.groups) === null || _a === void 0 ? void 0 : _a.year) || ''),
            month: parseInt(((_b = match === null || match === void 0 ? void 0 : match.groups) === null || _b === void 0 ? void 0 : _b.month) || ''),
            day: parseInt(((_c = match === null || match === void 0 ? void 0 : match.groups) === null || _c === void 0 ? void 0 : _c.day) || ''),
            hour: parseInt(((_d = match === null || match === void 0 ? void 0 : match.groups) === null || _d === void 0 ? void 0 : _d.hour) || ''),
            minute: parseInt(((_e = match === null || match === void 0 ? void 0 : match.groups) === null || _e === void 0 ? void 0 : _e.minute) || ''),
            action: ((_f = match === null || match === void 0 ? void 0 : match.groups) === null || _f === void 0 ? void 0 : _f.action) || ''
        };
    });
    return parsed;
};
const first = (arr) => {
    console.log(arr);
    const result = 0;
    console.log(result);
    return result;
};
const second = (arr) => {
    const result = 0;
    console.log(result);
    return result;
};
const data = parseInput((0, utils_js_1.getDataAsArray)((0, utils_js_1.getFileContent)('example.txt')));
console.assert(first(data) === 0, 'Not matching first part');
console.assert(second(data) === 0, 'Not matching second part');
