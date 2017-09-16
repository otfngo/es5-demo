{
    let arr = Array.of(3, 4, 7, 9, 11)
    console.log(arr)

    let empty = Array.of()
    console.log(empty)
}

{
    let p = document.querySelectorAll('p')
    let pArr = Array.from(p)
    p.forEach((item) => {
        console.log(item.textContent)
    })
    pArr.forEach((item) => {
        console.log(item.textContent)
    })


    console.log(p)
    console.log(pArr)
    console.log(Array.from([1, 3, 5], (item) => {
        return item * 2
    }))
}

{
    console.log([1, 'a', undefined].fill(7))
    console.log([1, 'a', undefined].fill(0))
    console.log([1, 'a', undefined].fill(0, 1, 3))
    console.log([1, 'a', undefined].fill(0, 1, 1))
    console.log([1, 'a', undefined].fill(0, 1, 2))
}

{
    for (let index of ['1', 'c', 'ks'].keys()) {
        console.log(index)
    }
    // for (let value of ['1', 'c', 'ks'].values()) {
    //     console.log(value)
    // }
    for (let [index, value] of ['1', 'c', 'ks'].entries()) {
        console.log(index, value)
    }
}

{
    console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4))
    console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 5))
}

{
    let arr = [1, 2, 3, 4, 5, 6]
    console.log(arr.find((item) => {
        return item > 3
    }))
    console.log(arr.findIndex((item) => {
        return item > 3
    }))
}

{
    console.log([1, 2, NaN].includes(1))
    console.log([1, 2, NaN].includes(3))
    console.log([1, 2, NaN].includes(NaN))
    console.log([1, 2, NaN].includes('1'))
    console.log([1, 2, NaN].includes(null))
    console.log([1, 2, NaN].includes(undefined))
}