/**
 * 浅析数组去重的几种方式
 */


const arr = [1, 22, 22, 333, 333, 333]


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
 * 循环时，判断当前项与前一项是否相等，相等就说明重复，不相等就添加进新数组
 */
const sortArr = [...arr].sort()

const optimizedForLoop = []
let prev = undefined
for (let i = 0, len = sortArr.length; i < len; i++) {
  const curr = sortArr[i]
  const isEqual = Object.is(curr, prev)

  // 对于第0项，若其值恰好为 undefined，则通过比较curr与prev是否相等来判断会有误
  if (i === 0 || !isEqual) {
    optimizedForLoop.push(curr)
    prev = curr
  }
}
console.log('optimizedForLoop', optimizedForLoop) // optimizedForLoop, [1, 22, 333]

const optimizedForEachLoop = []
prev = undefined
sortArr.forEach((item, index) => {
  const isEqual = Object.is(item, prev)

  if (index === 0 || !isEqual) {
    optimizedForEachLoop.push(item)
    prev = item
  }
})
console.log('optimizedForEachLoop', optimizedForEachLoop) // optimizedForEachLoop, [1, 22, 333]

/**
 * Set
 */
const setArr = [...new Set(arr)]
console.log('setArr', setArr) // setArr [1, 22, 333]