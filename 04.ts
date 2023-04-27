import { getFileContent, getDataAsArray } from './utils.js';

type Input = string[];

interface Item { 
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  action: string
}

const parseInput = (data: Input): Item[] => {
  const regex = /\[(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2}) (?<hour>\d{2}):(?<minute>\d{2})\] (?<action>.+)/;
  const parsed = data.map(line => {
    const match = line.match(regex);
    return {
      year: parseInt(match?.groups?.year || ''),
      month: parseInt(match?.groups?.month || ''),
      day: parseInt(match?.groups?.day || ''),
      hour: parseInt(match?.groups?.hour || ''),
      minute: parseInt(match?.groups?.minute || ''),
      action: match?.groups?.action || ''
    }
  })
  return parsed;
}

const first = (arr: Item[]) => {
  console.log(arr);
  const result = 0;
  console.log(result);
  return result;
};

const second = (arr: Item[]) => {
  const result = 0;
  console.log(result);
  return result;
};

const data = parseInput(getDataAsArray(getFileContent('example.txt')));
console.assert(first(data) === 0, 'Not matching first part');
console.assert(second(data) === 0, 'Not matching second part');
