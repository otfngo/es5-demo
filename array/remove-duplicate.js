/**
 * 浅析数组去重的几种方式
 */

const COUNT = 1000000
const arr = []
console.time('random')
for (let i = 0; i < COUNT; i++) {
  arr.push(Math.floor(Math.random() * COUNT))
}
console.timeEnd('random')

/**
 * 循环
 */
const forEachLoop = []
console.time('forEach')
arr.forEach(item => {
  const has = forEachLoop.includes(item)
  if (!has) {
    forEachLoop.push(item)
  }
})
console.time('forEach')

/**
 * 循环
 * 
 * 做下优化，先排序数组
 * 循环时，判断当前项与前一项是否相等，相等就说明重复，不相等就添加进新数组
 */
const sortArr = [...arr].sort()
const optimizedForEachLoop = []
let prev = undefined
sortArr.forEach((item, index) => {
  const isEqual = Object.is(item, prev)

  // 对于第0项，若其值恰好为 undefined，则通过比较item与prev是否相等来判断会有误
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
// const setArr = Array.from(new Set(arr))
console.log('setArr', setArr) // setArr [1, 22, 333]

/**
 * Map
 */
const seen = new Map()
const mapArr = arr.filter(item => !seen.has(item) && seen.set(item, 1))
console.log('mapArr', mapArr) // mapArr, [1, 22, 333]