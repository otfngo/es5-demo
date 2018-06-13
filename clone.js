let arr = [1, 22, 333, 4444]

let arr1 = arr.slice()
arr1.unshift('arr1')
console.log(arr1, arr) // ['arr1', 1, 22, 333, 4444], [1, 22, 333, 4444]

let arr2 = arr.concat()
arr2.unshift('arr2')
console.log(arr2, arr) // ['arr2', 1, 22, 333, 4444], [1, 22, 333, 4444]

let [...arr3] = arr
arr3.unshift('arr3')
console.log(arr3, arr) // ['arr3', 1, 22, 333, 4444], [1, 22, 333, 4444]

let arr4 = [...arr]
arr4.unshift('arr4')
console.log(arr4, arr) // ['arr4', 1, 22, 333, 4444], [1, 22, 333, 4444]

let arr5 = Object.assign([], arr)
arr5.unshift('arr5')
console.log(arr5, arr) // ['arr5', 1, 22, 333, 4444], [1, 22, 333, 4444]


let obj = { a: 1, b: 22, c: 333, d: 4444 }

/**
 * 存在缺陷
 * 
 * undefined and function 类型的属性会被忽略
 * Date 类型的属性会被转换为字符串
 */
let obj1 = JSON.parse(JSON.stringify(obj))
obj1.name = 'obj1'
console.log(obj1, obj) // { a: 1, b: 22, c: 333, d: 4444, name: 'obj1' }, { a: 1, b: 22, c: 333, d: 4444 }

let { ...obj2 } = obj
obj2.name = 'obj2'
console.log(obj2, obj) // { a: 1, b: 22, c: 333, d: 4444, name: 'obj2' }, { a: 1, b: 22, c: 333, d: 4444 }

let obj3 = { ...obj }
obj3.name = 'obj3'
console.log(obj3, obj) // { a: 1, b: 22, c: 333, d: 4444, name: 'obj3' }, { a: 1, b: 22, c: 333, d: 4444 }

let obj4 = Object.assign({}, obj)
obj4.name = 'obj4'
console.log(obj4, obj) // { a: 1, b: 22, c: 333, d: 4444, name: 'obj4' }, { a: 1, b: 22, c: 333, d: 4444 }

