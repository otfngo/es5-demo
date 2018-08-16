const symbol = new Symbol('stack-symbol')

export default class StackSymbol {
  constructor() {
    this[symbol] = []
  }
  push(element) {
    this[symbol].push(element)
  }
  pop() {
    return this[symbol].pop()
  }
  peek() {
    return this[symbol][this[symbol].length - 1]
  }
  isEmpty() {
    return this[symbol].length === 0
  }
  size() {
    return this[symbol].length
  }
  clear() {
    this[symbol] = []
  }
  toString() {
    return this[symbol].toString()
  }
}