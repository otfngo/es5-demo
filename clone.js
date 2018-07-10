/**
 * 浅谈 js 克隆(浅拷贝)数组及对象的几种方法
 */


const arr = [1, 22, 333, 4444]

/**
 * for
 * 
 * 兼容性好是 for 循环最大的优点了吧
 */
const forArr = []
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
const forEachArr = []
arr.forEach(item => forEachArr.push(item))
forEachArr.unshift('forEachArr')
console.log(forEachArr, arr) // ['forEachArr', 1, 22, 333, 4444], [1, 22, 333, 4444]

/**
 * slice
 * 
 * slice 用法参考：
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 */
const sliceArr = arr.slice()
sliceArr.unshift('sliceArr')
console.log(sliceArr, arr) // ['sliceArr', 1, 22, 333, 4444], [1, 22, 333, 4444]

/**
 * concat
 * 
 * concat 用法参考：
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 */
const concatArr = arr.concat()
concatArr.unshift('concatArr')
console.log(concatArr, arr) // ['concatArr', 1, 22, 333, 4444], [1, 22, 333, 4444]

/**
 * ... 解构赋值
 * ES6 新增
 * 
 * ... 解构赋值 用法参考：
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */
const [...destArr] = arr
destArr.unshift('destArr')
console.log(destArr, arr) // ['destArr', 1, 22, 333, 4444], [1, 22, 333, 4444]

/**
 * ... 展开运算符
 * ES6 新增
 * 
 * ... 展开运算符 用法参考：
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */
const restArr = [...arr]
restArr.unshift('restArr')
console.log(restArr, arr) // ['restArr', 1, 22, 333, 4444], [1, 22, 333, 4444]



const obj = {
  a: 1,
  b: 22,
  c: 333,
  d: 4444
}

/**
 * JSON
 * 为深拷贝
 * 拷贝时会忽略特定的属性，具体参考 JSON.stringify 用法参考
 * 
 * JSON.stringify 用法参考：
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
 */
const jsonObj = JSON.parse(JSON.stringify(obj))
jsonObj.name = 'jsonObj'
console.log(jsonObj, obj) // { a: 1, b: 22, c: 333, d: 4444, name: 'jsonObj' }, { a: 1, b: 22, c: 333, d: 4444 }

/**
 * Object.assign
 * ES6新增
 * 
 * Object.assign 用法参考：
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
const assignObj = Object.assign({}, obj)
assignObj.name = 'assignObj'
console.log(assignObj, obj) // { a: 1, b: 22, c: 333, d: 4444, name: 'assignObj' }, { a: 1, b: 22, c: 333, d: 4444 }

/**
 * Object.assign 只能克隆原始对象自身的值，不能克隆它继承的值
 * 如果想要保持继承链，可以采用下面的代码
 */
function clone(origin) {
  const originProto = Object.getPrototypeOf(origin)
  return Object.assign(Object.create(originProto), origin)
}


/**
 * ... 解构赋值
 * ES6 新增
 * 
 * ... 解构赋值 用法参考：
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */
const { ...destObj } = obj
destObj.name = 'destObj'
console.log(destObj, obj) // { a: 1, b: 22, c: 333, d: 4444, name: 'destObj' }, { a: 1, b: 22, c: 333, d: 4444 }

/**
 * ... 展开运算符
 * ES6 新增
 * 
 * ... 展开运算符 用法参考：
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */
const restObj = { ...obj }
restObj.name = 'restObj'
console.log(restObj, obj) // { a: 1, b: 22, c: 333, d: 4444, name: 'restObj' }, { a: 1, b: 22, c: 333, d: 4444 }
