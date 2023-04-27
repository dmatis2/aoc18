"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_js_1 = require("./utils.js");
;
const parseInput = (data) => {
    const regex = /#(?<id>\d+) @ (?<left>\d+),(?<top>\d+): (?<width>\d+)x(?<height>\d+)/;
    const parsed = data.map(line => {
        var _a, _b, _c, _d, _e;
        const match = line.match(regex);
        return {
            id: parseInt(((_a = match === null || match === void 0 ? void 0 : match.groups) === null || _a === void 0 ? void 0 : _a.id) || ''),
            left: parseInt(((_b = match === null || match === void 0 ? void 0 : match.groups) === null || _b === void 0 ? void 0 : _b.left) || ''),
            top: parseInt(((_c = match === null || match === void 0 ? void 0 : match.groups) === null || _c === void 0 ? void 0 : _c.top) || ''),
            width: parseInt(((_d = match === null || match === void 0 ? void 0 : match.groups) === null || _d === void 0 ? void 0 : _d.width) || ''),
            height: parseInt(((_e = match === null || match === void 0 ? void 0 : match.groups) === null || _e === void 0 ? void 0 : _e.height) || ''),
        };
    });
    return parsed;
};
const getMapOfClaims = (claims) => {
    const map = new Map();
    claims.forEach(claim => {
        for (let y = claim.top; y < claim.top + claim.height; y++) {
            for (let x = claim.left; x < claim.left + claim.width; x++) {
                const pos = JSON.stringify([y, x]);
                if (!map.has(pos)) {
                    map.set(pos, 0);
                }
                map.set(pos, map.get(pos) + 1);
            }
        }
    });
    return map;
};
const first = (arr) => {
    const claims = parseInput(arr);
    const map = getMapOfClaims(claims);
    const result = Array.from(map.values()).filter(val => val >= 2).length;
    console.log(result);
    return result;
};
const second = (arr) => {
    const claims = parseInput(arr);
    const map = getMapOfClaims(claims);
    let result = 0;
    claims.forEach(claim => {
        let overlaps = false;
        for (let y = claim.top; y < claim.top + claim.height; y++) {
            for (let x = claim.left; x < claim.left + claim.width; x++) {
                const pos = JSON.stringify([y, x]);
                const count = map.get(pos);
                if (count && count > 1) {
                    overlaps = true;
                }
            }
        }
        if (!overlaps) {
            result = claim.id;
        }
    });
    console.log(result);
    return result;
};
const data = (0, utils_js_1.getDataAsArray)((0, utils_js_1.getFileContent)('input.txt'));
console.assert(first(data) === 110891, 'Not matching first part');
console.assert(second(data) === 297, 'Not matching second part');
