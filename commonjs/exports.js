/**
 * CommonJS 模块规范：
 * * 每个文件就是一个模块，有自己的作用域。
 * * 在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。
 * 
 * CommonJS 规范规定：
 * * 每个模块内部，module 变量代表当前模块。
 * * module 变量是一个对象，它的 exports 属性（即 module.exports）是对外的接口。
 * * 加载某个模块，其实是加载该模块的 module.exports 属性。
 * 
 * CommonJS 模块的特点：
 * * 所有模块都运行在模块作用域，不会污染全局作用域。
 * * 模块可以多次加载，但是只会在第一次加载时运行一次，然后结果就被缓存了，
 * * 以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。
 * * 模块加载的顺序，按照其在代码中出现的顺序
 */


const x = 5
const addX = value => value + x

// module.exports.x = x
// module.exports.addX = addX
module.exports = {
  x,
  addX
}