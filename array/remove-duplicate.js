/**
 * 浅析数组去重的几种方式
 */


const arr = [1, 1, 22, 22, 333, 333, 333]

/**
 * 循环
 */
const forLoop = []
for (let i = 0, len = arr.length; i < len; i++) {
  const curr = arr[i]
  const has = forLoop.includes(curr)
  if (!has) {
    forLoop.push(curr)
  }
}
console.log('forLoop', forLoop) // forLoop [1, 22, 333]

const forEachLoop = []
arr.forEach(item => {
  const has = forEachLoop.includes(item)
  if (!has) {
    forEachLoop.push(item)
  }
})
console.log('forEachLoop', forEachLoop) // forEachLoop [1, 22, 333]

/**
 * 循环
 * 
 * 做下优化，先排序数组
 * 循环时，保存 当前项 和 前一项，若当前项与前一项相等，则为重复的值，若不相等，则为新值
 */
const optimizedForLoop = []
const sortArr = [...arr].sort()
let prev = undefined
for (let i = 0, len = sortArr.length; i < len; i++) {
  const curr = sortArr[i]

  // 若第0项的值恰好为 undefined，则通过比较curr与prev是否相等来判断会有误
  if (i === 0) {
    optimizedForLoop.push(curr)
    prev = curr
    continue
  }

  const isEqual = Object.is(curr, prev)
  if (isEqual) {
    continue
  }

  optimizedForLoop.push(curr)
  prev = curr
}
console.log('optimizedForLoop', optimizedForLoop) // optimizedForLoop, [1, 22, 333]

/**
 * Set
 */
const setArr = [...new Set(arr)]
console.log('setArr', setArr) // setArr [1, 22, 333]