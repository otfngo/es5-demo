import example, { magicNumber } from './export.js'
export { magicNumber } from './export.js'
export * from './export.js'

console.log(example.sum(1, magicNumber))
console.log(example.multiply(1, magicNumber))
console.log(example.subtract(1, magicNumber))