const _toString = Object.prototype.toString

console.log(_toString.call(1)) // [object Number]
console.log(_toString.call('1')) // [object String]
console.log(_toString.call(true)) // [object Boolean]
console.log(_toString.call(undefined)) // [object Undefined]
console.log(_toString.call(null)) // [object Null]
console.log(_toString.call([])) // [object Array]
console.log(_toString.call({})) // [object Object]
console.log(_toString.call(JSON)) // [object JSON]
console.log(_toString.call(new RegExp())) // [object RegExp]
console.log(_toString.call(new Date())) // [object Date]
console.log(_toString.call(Math)) // [object Math]
console.log(_toString.call(Symbol())) // [object Symbol]
console.log(_toString.call(function f() {})) // [object Function]

console.log(typeof 1) // 'number'
console.log(typeof '1') // 'string'
console.log(typeof true) // 'boolean'
console.log(typeof undefined) // 'undefined'
console.log(typeof null) // 'object'
console.log(typeof []) // 'object'
console.log(typeof {}) // 'object'
console.log(typeof JSON) // 'object'
console.log(typeof new RegExp()) // 'object'
console.log(typeof new Date()) // 'object'
console.log(typeof Math) // 'object'
console.log(typeof Symbol()) // 'symbol'
console.log(typeof
  function f() {}) // 'function'

const obj = {}
const arr = []

obj instanceof Array // false
obj instanceof Object // true
arr instanceof Array // true
arr instanceof Object // true