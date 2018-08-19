export class KeyValuePair {
  constructor(key, value) {
    this.key = key
    this.value = this.value
  }

  toString() {
    return `[#${this.key}: ${this.value}]`
  }
}