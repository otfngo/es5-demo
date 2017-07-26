export let firstName = "tianya";
export let lastName = "ty";
export let year = 2017;

let firstName2 = "tianya2";
let lastName2 = "ty2";
let year2 = 2018;

export {firstName2, lastName2, year2}

export function multiply(x, y) {
  return x * y;
};

function add(x, y) {
  return x + y;
}

function substract(x, y) {
  return x - y;
}

export {add, substract};