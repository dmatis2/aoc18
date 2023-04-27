import { getFileContent, getDataAsArray } from './utils.js';

interface GameState {
  recipes: string,
  elf1: number,
  elf2: number
}

const update = (state: GameState): GameState => {
  const elf1Val = parseInt(state.recipes[state.elf1])
  const elf2Val = parseInt(state.recipes[state.elf2])
  const newRecipes = (elf1Val + elf2Val).toString();
  state.recipes += newRecipes;
  state.elf1 = (state.elf1 + 1 + elf1Val) % state.recipes.length;
  state.elf2 = (state.elf2 + 1 + elf2Val) % state.recipes.length;
  const { recipes, elf1, elf2 } = state;
  return {
    recipes,
    elf1,
    elf2
  }
}

const first = (afterNumber: number) => {
  let state: GameState = {
    recipes: "37",
    elf1: 0,
    elf2: 1
  }
  while(state.recipes.length <= afterNumber + 10) {
    state = update(state)
  }
  const result = state.recipes.substring(afterNumber, afterNumber + 10);
  console.log(result);
  return result;
};

const second = (requestedStr: string) => {
  let state: GameState = {
    recipes: "37",
    elf1: 0,
    elf2: 1
  }
  while(true) {
    if(!state.recipes.substring(state.recipes.length - 7).includes(requestedStr)) {
      const val1 = parseInt(state.recipes[state.elf1])
      const val2 = parseInt(state.recipes[state.elf2])
      state.recipes = state.recipes += (val1 + val2).toString()
      state.elf1 = (state.elf1 + 1 + val1) % state.recipes.length
      state.elf2 = (state.elf2 + 1 + val2) % state.recipes.length
      continue;
    }
    break;
  }
  console.log(state.recipes.indexOf(requestedStr))
  return 0;

};

const after = getFileContent('input.txt');
// console.assert(first(parseInt(after)) === 1150511382, 'Not matching first part');
console.assert(second(after) === 0, 'Not matching second part');
