{
    let a = [33, 4, 1111, 222]
    console.log(a.sort())
    console.log(a.sort((s, t) => s > t))
}

{
    let a = ['ant', 'Bug', 'cat', 'Dog']
    console.log(a.sort())
    console.log(a.sort((s, t) => s.toLowerCase() > t.toLowerCase()))
}

{
    let str = 'javascript'
    let s1 = Array.prototype.join.call(str, ' ')
    console.log(s1)

    let s2 = Array.prototype.filter.call(str, item => item.match(/[^aeiou]/)).join(' ')
    console.log(s2)
}

{
    console.log(Math.max.apply(null, [14, 3, 77]))
    console.log(Math.max(...[14, 3, 77]))
}

{
    let arr1 = [0, 1, 2]
    let arr2 = [3, 4, 5]

    console.log(Array.prototype.push.apply(arr1, arr2), arr1, arr2)
    console.log([...arr1, ...arr2], arr1, arr2)
    console.log(arr1.push(...arr2), arr1, arr2)
}

{
    let arr1 = [0, 1, 2]
    let arr2 = [3, 4, 5]

    console.log([].push(...arr1, ...arr2), arr1, arr2)
}