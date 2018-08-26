export class Node {
  constructor(element, next) {
    this.element = element
    this.next = next
  }
}

export class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next)
    this.prev = prev
  }
}

export class TreeNode {
  constructor(key) {
    this.key = key
    this.left = undefined
    this.right = undefined
  }

  toString() {
    return `${this.key}`
  }
}