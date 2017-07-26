//es5 写法
Math.max.apply(null, [14, 3, 77]);

//es6 写法
Math.max(...[14, 3, 77]);

//等同于
Math.max(14, 3, 77);

//下面代码的 ES5 写法中，push方法的参数不能是数组，所以只好通过apply
//方法变通使用push方法。有了扩展运算符，就可以直接将数组传入push方法
//

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
//es5 写法
Array.prototype.push.apply(arr1, arr2);

//es6 写法
arr1.push(...arr2);


[1, 4, -5, 10].find(val => val < 0);//-5
[1, 4, -5, 10].findIndex(val => val < 0);//2


for (let key of ['a', 'b'].keys()) {
  console.log(key);
}
// 0
// 1

for (let value of ['a', 'b'].values()) {
  console.log(value);
}
// 'a'
// 'b'

for (let [key, value] of ['a', 'b'].entries()) {
  console.log(key, value);
}
// 0 "a"
// 1 "b"

[1, 2, 3].includes(2);//true