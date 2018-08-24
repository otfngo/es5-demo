{
  function SuperType() {
    this.colors = ['red', 'blue', 'green']
  }

  function SubType() {
    SuperType.call(this)
  }

  const instance1 = new SubType()
  instance1.colors.push('black')
  console.log(instance1.colors) // red, blue, green, black

  const instance2 = new SubType()
  console.log(instance2.colors) // red, blue, green
}

{
  function SuperType() {
    this.colors = ['red', 'blue', 'green']
  }

  function SubType() {}

  SubType.prototype = new SuperType()

  const instance1 = new SubType()
  instance1.colors.push('black')
  console.log(instance1.colors) // red, blue, green, black

  const instance2 = new SubType()
  console.log(instance2.colors) // red, blue, green, black
}

{
  function SuperType(name) {
    this.name = name
    this.colors = ['red', 'blue', 'green']
  }

  SuperType.prototype.sayName = function() {
    alert(this.name)
  }

  function SubType(name, age) {
    SuperType.call(this, name)
    this.age = age
  }

  SubType.prototype = new SuperType()

  SubType.prototype.sayAge = function() {
    alert(this.age)
  }

  const instance1 = new SubType('Nicholas', 29)
  instance1.colors.push('black')
  console.log(instance1.colors) // red, blue, green, black
  instance1.sayName() // Nicholas
  instance1.sayAge() // 29

  const instance2 = new SubType('Greg', 27)
  console.log(instance2.colors) // red, blue, green
  instance1.sayName() // Greg
  instance1.sayAge() // 27
}