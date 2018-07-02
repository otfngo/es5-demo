let obj = {
  prop: function () {},
  foo: 'bar'
}

let arr = [0]

Object.freeze(obj)
Object.freeze(arr)

console.log(Object.isFrozen(obj), Object.isFrozen(arr))

obj.foo = 'baz'
arr[0] = 1
console.log(obj.foo, arr[0])