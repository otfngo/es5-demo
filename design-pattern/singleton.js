class Singleton {
  constructor(name) {
    this.name = name
  }
  static getInstance(name) {
    if (!this.instance) {
      this.instance = new Singleton(name)
    }
    return this.instance
  }
  getName() {
    console.log(this.name)
  }
}

const a = Singleton.getInstance('sven1')
const b = Singleton.getInstance('sven2')

console.log(a === b)

class CreateDiv {
  constructor(html) {
    this.html = html
    this.init()
  }
  init() {
    let div = document.createElement('div')
    div.innerHTML = this.html
    document.body.appendChild(div)
  }
}

const ProxySingletonCreateDiv = (function () {
  let instance
  return function (html) {
    if (!instance) {
      instance = new CreateDiv(html)
    }
    return instance
  }
})()

const c = new ProxySingletonCreateDiv('sven1')
const d = new ProxySingletonCreateDiv('sven2')

console.log(c === d)