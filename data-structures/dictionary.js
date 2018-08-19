import {
  defaultToString
} from './util'
import {
  KeyValuePair
} from './model/key-value-pair'

export default class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }

  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key)
      this.table[tableKey] = new KeyValuePair(key, value)
      return true
    }
    return false
  }

  get(key) {
    const keyValuePair = this.table[this.toStrFn(key)]
    return keyValuePair == null ? undefined : keyValuePair.value
  }

  hasKey(key) {
    return this.table[this.toStrFn(key)] != null
  }

  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)]
      return true
    }
    return false
  }

  keyValues() {
    return Object.values(this.table)
  }

  keys() {
    return this.keyValues().map(keyValuePair => keyValuePair.key)
  }

  values() {
    return this.keyValues().map(keyValuePair => keyValuePair.value)
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    return Object.keys(this.table).length
  }

  clear() {
    this.table = {}
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }
    const keyValuePair = this.keyValues()
    let objString = `${keyValuePair[0].toString()}`
    for (let i = 1; i < keyValuePair.length; i++) {
      objString = `${objString},${keyValuePair[i].toString()}`
    }
    return objString
  }
}