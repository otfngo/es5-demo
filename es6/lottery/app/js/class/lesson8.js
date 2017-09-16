{
    let o = 1
    let k = 2
    let es5 = {
        o: o,
        k: k
    }
    let es6 = {
        o,
        k
    }
    console.log(es5)
    console.log(es6)

    let es5_method = {
        hello: function () {
            console.log('hello')
        }
    }
    let es6_method = {
        hello() {
            console.log('hello')
        }
    }
    console.log(es5_method, es6_method)
}

{
    //属性表达式
    let a = 'b'
    let es5_obj = {
        a: 'c'
    }
    let es6_obj = {
        [a]: 'c'
    }
    console.log(es5_obj, es6_obj)
}

{
    console.log(Object.is('abc', 'abc'))
    console.log(Object.is([], []), [] === [])

    //浅拷贝
    console.log(Object.assign({}, {a: 'a'}, {b: 'b'}))

    let test = {k: 123, o: 456}
    for (let [key, value] of Object.entries(test)) {
        console.log(key, value)
    }
    console.log(Object.entries(test))
}

{
    //扩展运算符
    // let {a, b, ...c} = {a: 'test', b: 'kill', c: 'ccc', d: 'ddd'}
    // console.log(c)
}