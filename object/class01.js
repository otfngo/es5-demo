{
  class SuperClass {
    static staticMethod() {
      return 'hello'
    }
  }
  console.log(SuperClass.staticMethod())

  class Sub1Class extends SuperClass {

  }
  console.log(Sub1Class.staticMethod())

  class Sub2Class extends SuperClass {
    static staticMethod() {
      return `${super.staticMethod()},too`
    }
  }
  console.log(Sub2Class.staticMethod())
}

{
  class Point {
    constructor(x, y) {
      this.x = x
      this.y = y
    }
  }

  class ColorPoint extends Point {
    constructor(x, y, color) {
      super(x, y)
      this.color = color
    }
  }
}

{
  function Rectangle(length, width) {
    this.length = length
    this.width = width
  }

  Rectangle.prototype.getArea = function() {
    return this.length * this.width
  }

  function Square(length) {
    Rectangle.call(this, length, length)
  }

  Square.prototype = Object.create(Rectangle.prototype, {
    constructor: {
      value: Square,
      enumerable: true,
      writable: true,
      configurable: true
    }
  })

  let square = new Square(3)
  console.log(square.getArea()) // 9
  console.log(square instanceof Square) // true
  console.log(square instanceof Rectangle) // true
}

{
  function SuperClass() {}

  function OtherSuperClass() {}

  function MyClass() {
    SuperClass.call(this)
    OtherSuperClass.call(this)
  }

  // 继承一个类
  MyClass.prototype = Object.create(SuperClass.prototype)
    // 混合其它
    // Object.assign 会把 OtherSuperClass 原型上的函数拷贝到 MyClass 原型上，
    // 使 MyClass 的所有实例都可用 OtherSuperClass 的方法
  Object.assign(MyClass.prototype, OtherSuperClass.prototype)
    // 重新指定 constructor
  MyClass.prototype.constructor = MyClass
}

{
  class Rectangle {
    constructor(length, width) {
      this.length = length
      this.width = width
    }

    getArea() {
      return this.length * this.width
    }
  }

  class Square extends Rectangle {
    constructor(length) {
      super(length, length)
    }
  }

  let square = new Square(3)
  console.log(square.getArea()) // 9
  console.log(square instanceof Square) // true
  console.log(square instanceof Rectangle) // true
}

{
  let SerializableMixin = {
    serialize() {
      return JSON.stringify(this)
    }
  }

  let AreaMixin = {
    getArea() {
      return this.length * this.width
    }
  }

  function mixin(...mixins) {
    let base = function() {}
    Object.assign(base.prototype, ...mixins)
    return base
  }

  class Square extends mixin(AreaMixin, SerializableMixin) {
    constructor(length) {
      super()
      this.length = length
      this.width = length
    }
  }

  let x = new Square(3)
  console.log(x.getArea()) // 9
  console.log(x.serialize()) // { "length": 3, "width": 3 }
}