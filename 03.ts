import { getFileContent, getDataAsArray } from './utils.js';

interface Claim {
  id: number,
  left: number,
  top: number,
  width: number,
  height: number
};

const parseInput = (data: string[]): Claim[] => {
  const regex = /#(?<id>\d+) @ (?<left>\d+),(?<top>\d+): (?<width>\d+)x(?<height>\d+)/;
  const parsed = data.map(line => {
    const match = line.match(regex);
    return {
      id: parseInt(match?.groups?.id || ''),
      left: parseInt(match?.groups?.left || ''),
      top: parseInt(match?.groups?.top || ''),
      width: parseInt(match?.groups?.width || ''),
      height: parseInt(match?.groups?.height || ''),
    }
  })
  return parsed;
}

const getMapOfClaims = (claims: Claim[]): Map<string, number> => {
  const map = new Map();
  claims.forEach(claim => {
    for(let y = claim.top; y < claim.top + claim.height; y++) {
      for(let x = claim.left; x < claim.left + claim.width; x++) {
        const pos = JSON.stringify([y,x]);
        if(!map.has(pos)) {
          map.set(pos, 0);
        }
        map.set(pos, map.get(pos) + 1)
      }
    }
  });
  return map;
}

const first = (arr: string[]) => {
  const claims = parseInput(arr);
  const map = getMapOfClaims(claims);
  const result = Array.from(map.values()).filter(val => val >= 2).length;
  console.log(result);
  return result;
};

const second = (arr: string[]) => {
  const claims = parseInput(arr);
  const map = getMapOfClaims(claims);
  let result = 0;
  claims.forEach(claim => {
    let overlaps = false;
    for(let y = claim.top; y < claim.top + claim.height; y++) {
      for(let x = claim.left; x < claim.left + claim.width; x++) {
        const pos = JSON.stringify([y,x]);
        const count = map.get(pos);
        if(count && count > 1) {
          overlaps = true;
        }
      }
    }
    if(!overlaps) {
      result = claim.id;
    }
  })
  console.log(result);
  return result;
};

const data = getDataAsArray(getFileContent('input.txt'));
console.assert(first(data) === 110891, 'Not matching first part');
console.assert(second(data) === 297, 'Not matching second part');
