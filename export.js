export let name = 'otfngo'
export const magicNumber = 7

function sum(num1 = 0, num2 = 0) {
  return num1 + num2
}

export class Rectangle {
  constructor(length, width) {
    this.length = length
    this.width = width
  }
}

function subtract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

export { subtract, multiply, sum, sum as add }
export default { subtract, multiply, sum }
