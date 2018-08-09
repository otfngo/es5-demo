// 计算数组中每个元素出现的次数
const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce((allNames, name) => {
  if (allNames.has(name)) {
    allNames.set(name, allNames.get(name) + 1)
  } else {
    allNames.set(name, 1)
  }
  return allNames
}, new Map())

console.log(countedNames)
for (const [key, value] of countedNames) {
  console.log(key, value)
}

const friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  },
  {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  },
  {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  }
]

const allbooks = friends.reduce((acc, cur) => [...acc, ...cur.books], [])
console.log(allbooks)