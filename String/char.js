/**
 * 浅析获取字符串中字符
 */


/**
 * 单字节字符：
 * 码点在 \u0000 ~ \uFFFF 之间的字符，即码点在 0 ~ 65535 之间的字符
 * 
 * 对于单字节字符，可以使用 charAt(0), substring(0, 1) 获取第一个字符
 */
let str = '您'

console.log(str.length) // 1
console.log(str.charAt(0)) // 您
console.log(str.substring(0, 1)) // 您
console.log(str.charCodeAt(0)) // 24744

/**
 * 双字节字符：
 * 码点超出 \u0000 ~ \uFFFF 范围的字符，或者说码点不在 0 ~ 65535 之间的字符
 * 
 * 对于双字节字符，使用 charAt(0), substring(0, 1) 都不能得到正确的结果
 */

let strDouble = '🚀'

// 不正确的结果
console.log(strDouble.length) // 2
console.log(strDouble.charAt(0)) // �
console.log(strDouble.substring(0, 1)) // �
console.log(strDouble.charCodeAt(0)) // 55357

// 正确的结果
console.log(codePointLength(strDouble)) // 1
console.log([...strDouble][0]) // 🚀
console.log(String.fromCodePoint(strDouble.codePointAt(0))) // 🚀
console.log(strDouble.codePointAt(0)) // 128640


/**
 * 比较下面两种方式的结果
 */
let strMixed = 'x🚀y'

console.log(strMixed.split('').reverse().join('')) // y��x
console.log([...strMixed].reverse().join('')) // y🚀x



function codePointLength(str) {
  /**
   * 方式一
   */
  // let result = str.match(/[\s\S]/gu)
  // return result ? result.length : 0

  /**
   * 方式二
   */
  return [...str].length

  /**
   * 方式三
   */
  // let i = 0
  // for (let c of str) {
  //   ++i
  // }
  // return i
}
