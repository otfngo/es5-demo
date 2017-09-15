let a = [33, 4, 1111, 222];
a.sort();
a.sort((s, t) => s - t);

let b = ['ant', 'Bug', 'cat', 'Dog'];
b.sort();
b.sort((s, t) => {
  let a = s.toLowerCase();
  let b = t.toLowerCase();
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});

let isArray1 = Array.isArray([]);
let isArray2 = Array.isArray({});

let s = "javascript";
let s1 = Array.prototype.join.call(s, " ");
let s2 = Array.prototype.filter.call(s, v => v.match(/[^aeiou]/)).join("");