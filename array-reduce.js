{
    let arr = [1, 2, 3, 4, 5]
    let sum = arr.reduce((acc, cur) => acc + cur)
    console.log(sum)
}

{
    let arr = [1, 2, 3, 4, 5]
    let sum = arr.reduce((acc, cur) => acc + cur, 0)
    console.log(sum)
}

{
    let arr = [[0, 1], [2, 3], [4, 5]]
    let flattened = arr.reduce((acc, cur) => acc.concat(cur))
    console.log(flattened)
}

{
    let arr = [[0, 1], [2, 3], [4, 5]]
    let flattened = arr.reduce((acc, cur) => acc.concat(cur), [])
    console.log(flattened)
}

{
    // 计算数组中每个元素出现的次数
    let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
    let countedNames = names.reduce(function (allNames, name) {
        if (name in allNames) {
            allNames[name]++
        } else {
            allNames[name] = 1
        }
        return allNames
    }, {})
    console.log(countedNames)
}

{
    let friends = [{
        name: 'Anna',
        books: ['Bible', 'Harry Potter'],
        age: 21
    }, {
        name: 'Bob',
        books: ['War and peace', 'Romeo and Juliet'],
        age: 26
    }, {
        name: 'Alice',
        books: ['The Lord of the Rings', 'The Shining'],
        age: 18
    }]

    let allbooks = friends.reduce(function (acc, cur) {
        return [...acc, ...cur.books]
    }, [])
    console.log(allbooks)
}