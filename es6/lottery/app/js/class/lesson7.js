{
    function test(x, y = 'world') {
        console.log(x, y)
    }

    test('hello')
    test('hello', 'tianya')
}

{
    let x = 'test'

    function test2(x, y = x) {
        console.log(x, y)
    }

    function test3(c, y = x) {
        console.log(c, y)
    }

    test2('tianya')
    test2()
    test3()
}

{
    function test(...arg) {
        for (let v of arg) {
            console.log(v)
        }
    }

    test(1, 2, 3, 4, 'a')
}

{
    console.log(...[1, 2, 4])
}

{
    let arrow = v => v * 2
    let arrow2 = () => 5
    console.log(arrow(3))
    console.log(arrow2())
}

{
    function tail(x) {
        console.log(x)
    }

    function fx(x) {
        return tail(x)
    }

    fx(123)
}