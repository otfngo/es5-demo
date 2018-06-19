/**
 * 浅谈 js 克隆(浅拷贝)数组及对象的几种方法
 */


let arr = [1, 22, 333, 4444]

/**
 * for
 * 
 * 兼容性好是 for 循环最大的优点了吧
 */
let forArr = []
for (let i = 0, len = arr.length; i < len; i++) {
  forArr.push(arr[i])
}
forArr.unshift('forArr')
console.log(forArr, arr) // ['forArr', 1, 22, 333, 4444], [1, 22, 333, 4444]

/**
 * forEach
 * ES5 新增
 * 
 * forEach 用法参考：
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */
let forEachArr = []
arr.forEach(item => {
  forEachArr.push(item)
})
forEachArr.unshift('forEachArr')
console.log(forEachArr, arr) // ['forEachArr', 1, 22, 333, 4444], [1, 22, 333, 4444]

/**
 * slice
 * 
 * slice 用法参考：
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 */
let sliceArr = arr.slice()
sliceArr.unshift('sliceArr')
console.log(sliceArr, arr) // ['sliceArr', 1, 22, 333, 4444], [1, 22, 333, 4444]

/**
 * concat
 * 
 * concat 用法参考：
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 */
let concatArr = arr.concat()
concatArr.unshift('concatArr')
console.log(concatArr, arr) // ['concatArr', 1, 22, 333, 4444], [1, 22, 333, 4444]

/**
 * ... 解构赋值
 * ES6 新增
 * 
 * ... 解构赋值用法参考：
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */
let [...destArr] = arr
destArr.unshift('destArr')
console.log(destArr, arr) // ['destArr', 1, 22, 333, 4444], [1, 22, 333, 4444]

/**
 * ... 展开运算符
 * ES6 新增
 * 
 * ... 展开运算符用法参考：
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */
let restArr = [...arr]
restArr.unshift('restArr')
console.log(restArr, arr) // ['restArr', 1, 22, 333, 4444], [1, 22, 333, 4444]



let obj = {
  a: 1,
  b: 22,
  c: 333,
  d: 4444
}

/**
 * JSON
 * 
 * undefined and function 类型的属性会被忽略
 * Date 类型的属性会被转换为字符串
 */
let obj1 = JSON.parse(JSON.stringify(obj))
obj1.name = 'obj1'
console.log(obj1, obj) // { a: 1, b: 22, c: 333, d: 4444, name: 'obj1' }, { a: 1, b: 22, c: 333, d: 4444 }

let { ...obj2
} = obj
obj2.name = 'obj2'
console.log(obj2, obj) // { a: 1, b: 22, c: 333, d: 4444, name: 'obj2' }, { a: 1, b: 22, c: 333, d: 4444 }

let obj3 = { ...obj
}
obj3.name = 'obj3'
console.log(obj3, obj) // { a: 1, b: 22, c: 333, d: 4444, name: 'obj3' }, { a: 1, b: 22, c: 333, d: 4444 }

let obj4 = Object.assign({}, obj)
obj4.name = 'obj4'
console.log(obj4, obj) // { a: 1, b: 22, c: 333, d: 4444, name: 'obj4' }, { a: 1, b: 22, c: 333, d: 4444 }