import { getFileContent, getDataAsArray } from './utils.js';

const getMappings = (): Map<string, string> => {
  const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(97 + i));
  const map = new Map();
  alphabet.forEach(alpha => {
    map.set(alpha, alpha.toUpperCase());
    map.set(alpha.toUpperCase(), alpha);
  })
  return map;
}

const first = (str: string) => {
  const mapping = getMappings();
  let stack: string[] = [str[0]];
  const strArr = str.split('');
  strArr.slice(1).forEach(char => {
    if(stack.length > 0 && char === mapping.get(stack[stack.length - 1] ?? '')) {
      stack.pop();
    } else {
      stack = [...stack, char];
    }
  })
  const result = stack.length;
  console.log(result);
  return result;
};

const second = (str: string) => {
  const result = 0;
  console.log(result);
  return result;
};

const data = getFileContent('input.txt');
console.assert(first(data) === 0, 'Not matching first part');
console.assert(second(data) === 0, 'Not matching second part');
