/**
 * 浅析获取字符串的第一个字符
 */


/**
 * 单字节字符：
 * 码点在 \u0000 ~ \uFFFF 之间的字符，或者说码点在 0 ~ 65535 之间的字符
 * 
 * 对于单字节字符，可以使用 charAt(0), substring(0, 1) 获取第一个字符
 */
let str = '您'
console.log(str.length) // 1
console.log(str.charAt(0)) // 您
console.log(str.substring(0, 1)) // 您
console.log(str.charCodeAt(0)) // 24744
console.log(str.codePointAt(0)) // 24744

/**
 * 双字节字符：
 * 码点超出 \u0000 ~ \uFFFF 范围的字符，或者说码点不在 0 ~ 65535 之间的字符
 * 
 * 对于双字节字符，使用 charAt(0), substring(0, 1) 都不能得到正确的结果
 * 使用 String.fromCodePoint(codePointAt(0)) 可得到正确结果
 */

let strDouble = '𠮷'
console.log(strDouble.length) // 2
console.log(codePointLength(strDouble)) // 1
console.log(strDouble.charAt(0)) // �
console.log(strDouble.substring(0, 1)) // �
console.log(strDouble.charCodeAt(0)) // 55362
console.log(strDouble.codePointAt(0)) // 134071
console.log(String.fromCodePoint(strDouble.codePointAt(0))) // 𠮷

function codePointLength(str) {
  let result = str.match(/[\s\S]/gu)
  return result ? result.length : 0
}