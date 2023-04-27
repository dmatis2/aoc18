import { getFileContent, getDataAsArray } from './utils.js';

const first = (arr: string[]) => {
  const result = eval(arr.join(''));
  console.log(result);
  return result;
};

const second = (arr: string[]) => {
  let parsedArr = arr.map(x => parseInt(x));
  const set = new Set([ 0 ]);
  let curValue = 0;

  while(parsedArr.length) {
    const val = parsedArr.shift();
    if(val) {
      curValue += val;
      if(set.has(curValue)) {
        console.log(curValue);
        return curValue;
      }
      set.add(curValue);
      parsedArr.push(val);
    }
  }
};

const data = getDataAsArray(getFileContent('input.txt'));
console.assert(first(data) === 538, 'Not matching first part');
console.assert(second(data) === 77271, 'Not matching second part');
