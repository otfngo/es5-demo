let obj = {a: 1, b: 2, c: 3};
for (let key of Object.keys(obj)) {
  console.log(key);// 'a', 'b', 'c'
}
for (let value of Object.values(obj)) {
  console.log(value);// 1, 2, 3
}
for (let [key, value] of Object.entries(obj)) {
  console.log(key, value);
}
//a 1
//b 2
//c 3
let {keys, values, entries} = Object;
for (let key of keys(obj)) {
  console.log(key);// 'a', 'b', 'c'
}
for (let value of values(obj)) {
  console.log(value);// 1, 2, 3
}
for (let [key, value] of entries(obj)) {
  console.log(key, value);
}
//a 1
//b 2
//c 3