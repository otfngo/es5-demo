class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `(${this.x},${this.y})`;
  }
}

let person = new class {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}("tianya");

person.sayName();//"tianya"


class Logger {
  constructor() {
    this.printName = this.printName.bind(this);
  }

  printName(name = "there") {
    this.print(`hello ${name}`);
  }

  print(text) {
    console.log(text);
  }
}

const logger = new Logger();
const {printName} = logger;
printName();//hello there


class Foo {
  static staticMethod() {
    return 'hello';
  }
}

Foo.staticMethod();//hello

//父类的静态方法，可以被子类继承
class Bar extends Foo {

}

Bar.staticMethod();//hello

class Bar2 extends Foo {
  static staticMethod() {
    return `${super.staticMethod()},too`;
  }
}

Bar2.staticMethod();//hello,too


//类的实例属性可以用等式，写入类的定义之中
class MyClass {
  static staticProp = 42;
  prop = 42;

  constructor() {
    console.log(this.prop);//42
    console.log(MyClass.staticProp);//42
  }
}