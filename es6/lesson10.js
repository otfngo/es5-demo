{
    let list = new Set()
    list.add(5)
    list.add(7)
    console.log(list, list.size)
}

{
    let arr = [1, 2, 3, 4, 5]
    let list = new Set(arr)
    console.log(list, list.size)
}

{
    let list = new Set()
    list.add(1)
    list.add(2)
    list.add(1)
    console.log(list, list.size)

    let arr = [1, 2, 3, 1, '2']
    let list2 = new Set(arr)
    console.log(list2, list2.size)
}

{
    let arr = ['add', 'delete', 'clear', 'has']
    let list = new Set(arr)

    console.log(list.has('add'))
    list.delete('add')
    console.log(list)
    list.clear()
    console.log(list)
}

{
    let arr = ['add', 'delete', 'clear', 'has']
    let list = new Set(arr)

    for (let key of list.keys()) {
        console.log(key)
    }
    for (let value of list.values()) {
        console.log(value)
    }
    for (let value of list) {
        console.log(value)
    }
    for (let [key, value] of list.entries()) {
        console.log(key, value)
    }

    list.forEach(item => console.log(item))
}

{
    let map = new Map()
    let arr = ['123']

    map.set(arr, 456)
    console.log(map, map.get(arr))
}

{
    let map = new Map([['a', 123], ['b', 456]])
    console.log(map, map.size)
}

{
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map
    let map = new Map()
    let array = []

    map.set('t', 1)
    array.push({t: 1})

    console.info(map, array)

    let map_exist = map.has('t')
    let array_exist = array.find(item => item.t)
    console.info(map_exist, array_exist)

    map.set('t', 2)
    array.forEach(item => item.t ? item.t = 2 : '')
    console.info(map, array)

    map.delete('t')
    let index = array.findIndex(item => item.t)
    array.splice(index, 1)
    console.info(map, array)
}

{
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set
    let set = new Set()
    let array = []

    let o = {t: 1}
    set.add(o)
    array.push({t: 1})

    console.info(set, array)

    let set_exist = set.has(o)
    let array_exist = array.find(item => item.t)
    console.info(set_exist, array_exist)

    set.forEach(item => item.t ? item.t = 2 : '')
    array.forEach(item => item.t ? item.t = 2 : '')
    console.info(set, array)

    set.forEach(item => item.t ? set.delete(item) : '')
    let index = array.findIndex(item => item.t)
    array.splice(index, 1)
    console.info(set, array)
}

{
    let item = {t: 1}
    let map = new Map()
    let set = new Set()
    let obj = {}

    map.set('t', 1)
    set.add(item)
    obj['t'] = 1

    console.info(set, map, obj)

    console.info({
        map_exist: map.has('t'),
        set_exist: set.has(item),
        obj_exist: 't' in obj
    })

    map.set('t', 2)
    item.t = 2
    obj['t'] = 2
    console.info(set, map, obj)

    map.delete('t')
    set.delete(item)
    delete obj['t']
    console.info(set, map, obj)
}