"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_js_1 = require("./utils.js");
const parseInput = (arr) => {
    const regex = /pos=<(?<x>\-?\d+),(?<y>\-?\d+),(?<z>\-?\d+)>, r=(?<r>\d+)/;
    return arr.map(bot => {
        var _a;
        const { x, y, z, r } = (_a = bot.match(regex)) === null || _a === void 0 ? void 0 : _a.groups;
        return {
            x: parseInt(x),
            y: parseInt(y),
            z: parseInt(z),
            r: parseInt(r),
        };
    });
};
const first = (arr) => {
    arr.sort((a, b) => b.r - a.r);
    const strongest = arr[0];
    let inRange = [];
    arr.forEach(bot => {
        const xDist = Math.abs(strongest.x - bot.x);
        const yDist = Math.abs(strongest.y - bot.y);
        const zDist = Math.abs(strongest.z - bot.z);
        if (xDist + yDist + zDist <= strongest.r) {
            inRange.push(bot);
        }
    });
    const result = inRange.length;
    console.log(result);
    return result;
};
const second = (arr) => {
    let [minX, maxX] = [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY];
    let [minY, maxY] = [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY];
    let [minZ, maxZ] = [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY];
    arr.forEach(bot => {
        if (bot.x < minX)
            minX = bot.x;
        if (bot.x > maxX)
            maxX = bot.x;
        if (bot.y < minY)
            minY = bot.y;
        if (bot.y > maxY)
            maxY = bot.y;
        if (bot.z < minZ)
            minZ = bot.z;
        if (bot.z > maxZ)
            maxZ = bot.z;
    });
    const xLength = maxX - minX;
    const yLength = maxY - minY;
    const zLength = maxZ - minZ;
    console.log({ xLength: xLength / 3, yLength: yLength / 3, zLength: zLength / 3 });
    const result = 0;
    console.log(result);
    return result;
};
const data = parseInput((0, utils_js_1.getDataAsArray)((0, utils_js_1.getFileContent)('input.txt')));
// console.assert(first(data) === 950, 'Not matching first part');
console.assert(second(data) === 0, 'Not matching second part');
