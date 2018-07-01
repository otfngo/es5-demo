class Point {
  constructor(x, y) {
    console.log(new.target.name)
    this.x = x
    this.y = y
  }
  static hello() {
    console.log('hello, world')
  }
  toString() {
    return `(${this.x}, ${this.y})`
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y)
    this.color = color
  }
}

new Point() // Point
new ColorPoint() // ColorPoint

let cp = new ColorPoint(1, 2, 'green')
cp instanceof ColorPoint; // true
cp instanceof Point; // true

let person = new class {
  constructor(name) {
    this.name = name
  }
  sayName() {
    console.log(this.name)
  }
}('zhangsan')

person.sayName() // zhangsan

class Foo {
  constructor(...args) {
    this.args = args
  }
  *[Symbol.iterator]() {
    for (let arg of this.args) {
      yield arg
    }
  }
  static staticMethod() {
    return 'staticMethod'
  }
}

for (let x of new Foo('hello', 'world')) {
  console.log(x)
}
// hello
// world

console.log(Foo.staticMethod()) // staticMethod

let foo = new Foo()
// foo.staticMethod() // TypeError: foo.staticMethod is not a function

class Bar extends Foo {

}
console.log(Bar.staticMethod()) // staticMethod

class Baz extends Foo {
  static staticMethod() {
    return `${super.staticMethod()}, too`
  }
}
console.log(Baz.staticMethod()) // staticMethod, too