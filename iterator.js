/**
 * ES6 之前创建迭代器的一种方式
 */
function createIterator(items) {
  let i = 0
  return {
    next() {
      let done = i >= items.length
      let value = !done ? items[i++] : undefined

      return {
        value,
        done
      }
    }
  }
}

let iterator = createIterator([1, 2, 3])
console.log(iterator.next()) // { value: 1, done: false }
console.log(iterator.next()) // { value: 2, done: false }
console.log(iterator.next()) // { value: 3, done: false }
console.log(iterator.next()) // { value: undefined, done: true }
console.log(iterator.next()) // { value: undefined, done: true }


/**
 * * 生成器
 * ES6 新增
 */
function *createIteratorES6(items) {
  for (let i = 0, len = items.length; i < len; i++) {
    yield items[i]
  }
}

let iteratorES6 = createIteratorES6([1, 2, 3])
console.log(iteratorES6.next()) // { value: 1, done: false }
console.log(iteratorES6.next()) // { value: 2, done: false }
console.log(iteratorES6.next()) // { value: 3, done: false }
console.log(iteratorES6.next()) // { value: undefined, done: true }
console.log(iteratorES6.next()) // { value: undefined, done: true }