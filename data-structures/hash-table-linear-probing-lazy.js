import {
  defaultToString
} from './util'
import {
  KeyValuePair
} from './model/key-value-pair'

export default class HashTableLinearProbingLazy {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }

  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key
    }
    const tableKey = this.toStrFn(key)
    let hash = 0
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i)
    }
    return hash % 37
  }

  hashCode(key) {
    return this.loseloseHashCode(key)
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key)
      const positionKV = this.table[position]
      if (positionKV == null || (positionKV != null && positionKV.isDeleted)) {
        this.table[position] = new KeyValuePair(key, value)
      } else {
        let index = position + 1
        let indexKV = this.table[index]
        while (indexKV != null && !indexKV.isDeleted) {
          indexKV = this.table[++index]
        }
        this.table[index] = new KeyValuePair(key, value)
      }
      return true
    }
    return false
  }

  get(key) {
    const position = this.hashCode(key)
    const positionKV = this.table[position]
    if (positionKV != null) {
      if (positionKV.key === key && !positionKV.isDeleted) {
        return positionKV.value
      }
      let index = position + 1
      let indexKV = this.table[index]
      while (indexKV != null && (indexKV.key !== key || indexKV.isDeleted)) {
        if (indexKV.key === key && indexKV.isDeleted) {
          return undefined
        }
        indexKV = this.table[++index]
      }
      if (indexKV != null && indexKV.key === key && !indexKV.isDeleted) {
        return indexKV.value
      }
    }
    return undefined
  }

  remove(key) {
    const position = this.hashCode(key)
    const positionKV = this.table[position]
    if (positionKV != null) {
      if (positionKV.key === key && !positionKV.isDeleted) {
        this.table[position].isDeleted = true
        return true
      }
      let index = position + 1
      let indexKV = this.table[index]
      while (indexKV != null && (indexKV.key !== key || indexKV.isDeleted)) {
        indexKV = this.table[++index]
      }
      if (indexKV != null && indexKV.key === key && !indexKV.isDeleted) {
        this.table[index].isDeleted = true
        return true
      }
    }
    return false
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    let count = 0
    Object.values(this.table).forEach(keyValuePair => {
      count += keyValuePair.isDeleted === true ? 0 : 1
    })
    return count
  }

  clear() {
    this.table = {}
  }

  getTable() {
    return this.table
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }
    const keys = Object.keys(this.table)
    let list = []
    for (let i = 0; i < keys.length; i++) {
      if (!this.table[keys[i]].isDeleted) {
        list.push(`{${keys[i]} => ${this.table[keys[i]].toString()}}`)
      }
    }
    return list.join()
  }
}