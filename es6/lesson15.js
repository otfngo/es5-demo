{
    let tell = function* () {
        yield 'a'
        yield 'b'
        return 'c'
    }

    let k = tell()

    console.log(k.next())
    console.log(k.next())
    console.log(k.next())
    console.log(k.next())
}

{
    let obj = {}
    obj[Symbol.iterator] = function* () {
        yield 1
        yield 2
        yield 3
    }

    for (let value of obj) {
        console.log(value)
    }
}

{
    let state = function* () {
        while (1) {
            yield 'a'
            yield 'b'
            yield 'c'
        }
    }

    let status = state()
    console.log(status.next())
    console.log(status.next())
    console.log(status.next())
    console.log(status.next())
    console.log(status.next())
    console.log(status.next())
    console.log(status.next())
    console.log(status.next())
}

{
    // let state = async function () {
    //     while (1) {
    //         await 'a';
    //         await 'b';
    //         await 'c';
    //     }
    // }
    //
    // let status = state();
    // console.log(status.next())
    // console.log(status.next())
    // console.log(status.next())
    // console.log(status.next())
    // console.log(status.next())
}

{
    let draw = function (count) {
        console.log(count)
    }

    let residue = function* (count) {
        while (count > 0) {
            count--
            yield draw(count)
        }
    }

    let star = residue(5)
    let btn = document.createElement('button')
    btn.id = 'start'
    btn.textContent = '抽奖'
    document.body.appendChild(btn)
    btn.addEventListener('click', () => star.next())
}

{
    let ajax = function* () {
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({code: 0})
            }, 200)
        })
    }

    let pull = function () {
        let generator = ajax()
        let step = generator.next()
        step.value.then(d => {
            if (d.code !== 0) {
                setTimeout(() => {
                    console.info('wait')
                    pull()
                })
            } else {
                console.info(d)
            }
        })
    }

    pull()
}