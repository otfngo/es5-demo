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