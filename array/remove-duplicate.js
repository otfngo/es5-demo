/**
 * 比较数组去重的几种方式的效率
 */

const COUNT = 100000
const arr = []
console.time('random')
for (let i = 0; i < COUNT; i++) {
  arr.push(Math.floor(Math.random() * COUNT))
}
console.timeEnd('random')

/**
 * 循环
 */
console.time('includesLoop')
const includesLoop = []
arr.forEach(item => {
  const has = includesLoop.includes(item)
  if (!has) {
    includesLoop.push(item)
  }
})
console.timeEnd('includesLoop')

console.time('indexOfLoop')
const indexOfLoop = []
arr.forEach(item => {
  const index = indexOfLoop.indexOf(item)
  if (index === -1) {
    indexOfLoop.push(item)
  }
})
console.timeEnd('indexOfLoop')

/**
 * 循环
 * 
 * 做下优化，先排序数组
 * 循环时，判断当前项与前一项是否相等，相等就说明重复，不相等就添加进新数组
 */
console.time('optimizedForEachLoop')
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
console.timeEnd('optimizedForEachLoop')

/**
 * filter
 */
console.time('indexOfFilter')
const indexOfFilter = arr.filter((item, index) => arr.indexOf(item) === index)
console.timeEnd('indexOfFilter')

/**
 * Set
 */
console.time('setExtendOperator')
const setExtendOperator = [...new Set(arr)]
console.timeEnd('setExtendOperator')

console.time('setArrayFrom')
const setArr = Array.from(new Set(arr))
console.timeEnd('setArrayFrom')

/**
 * Map
 */
console.time('mapFilter')
const seen = new Map()
const mapFilter = arr.filter(item => !seen.has(item) && seen.set(item, 1))
console.timeEnd('mapFilter')