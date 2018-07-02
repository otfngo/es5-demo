function makeSound(animal) {
  animal.sound()
}

class Animal {
  constructor() {

  }
  sound() {
    console.log('动物叫')
  }
}

class Duck extends Animal {
  constructor() {
    super()
  }
  sound() {
    console.log('鸭叫')
  }
}

class Chicken extends Animal {
  constructor() {
    super()
  }
  sound() {
    console.log('鸡叫')
  }
}

class Dog extends Animal {
  constructor() {
    super()
  }
  sound() {
    console.log('狗叫')
  }
}

let duck = new Duck()
let chicken = new Chicken()
let dog = new Dog()
makeSound(duck)
makeSound(chicken)
makeSound(dog)


const googleMap = {
  show() {
    console.log('渲染google地图')
  }
}

const baiduMap = {
  show() {
    console.log('渲染baidu地图')
  }
}

function renderMap(map) {
  if (typeof map.show === 'function') {
    map.show()
  }
}

renderMap(googleMap)
renderMap(baiduMap)