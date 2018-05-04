{
    // new 一个对象的过程
    // 1.创建一个新对象
    // 2.this 指向这个新对象
    // 3.执行代码，即对 this 赋值
    // 4.返回 this
}

{
    function Elem(id) {
        this.elem = document.getElementById(id)
    }

    Elem.prototype.html = function (val) {
        let elem = this.elem
        if (val) {
            elem.innerHTML = val
            return this
        } else {
            return elem.innerHTML
        }
    }

    Elem.prototype.on = function (type, fn) {
        let elem = this.elem
        elem.addEventListener(type, fn)
        return this
    }
}

{
    // this 要在执行时才能确定值，定义时无法确定
    // this 对象是在运行时基于函数的执行环境绑定的
    // 在全局函数中，this 等于 window
    // 当函数被作为某个对象的方法调用时，this 等于那个对象
    let obj = {
        type: 'A',
        fn() {
            console.log(this, this.type)
        }
    }
    obj.fn()
    obj.fn.call({ type: 'B' })
    let fn1 = obj.fn
    fn1()
}

{
    // 闭包
    // 函数的执行依赖于变量作用域
    // 这个作用域是在函数定义时决定的
    // 而不是函数调用时决定的
    // 闭包可以捕捉到局部变量（和参数），并一直保存下来
    // 看起来像这些变量绑定到了在其中定义它们的外部函数
    // 函数定义时的作用域链到函数执行时依然有效
    function fn() {
        let a = 100
        return function () {
            return a
        }
    }

    let fn1 = fn()
    let a = 200
    console.log(fn1())
}

{
    var name = 'The Window'
    var object = {
        name: 'My Object',
        getNameFunc: function () {
            return function () {
                return this.name
            }
        }
    }
    console.log(object.getNameFunc()())
}

{
    var name = 'The Window'
    var object = {
        name: 'My Object',
        getNameFunc: function () {
            var that = this
            return function () {
                return that.name
            }
        }
    }
    console.log(object.getNameFunc()())
}

{
    // 创建10个<a>标签，点击的时候弹出来对应的序号
    var i
    var frag = document.createDocumentFragment()
    for (i = 0; i < 10; i++) {
        (function (i) {
            var a = document.createElement('a')
            a.innerHTML = i + '<br>'
            a.addEventListener('click', function (e) {
                e.preventDefault()
                alert(i)
            })
            frag.appendChild(a)
        })(i)
    }
    document.body.appendChild(frag)
}

{
    let frag = document.createDocumentFragment()
    for (let i = 0; i < 10; i++) {
        let a = document.createElement('a')
        a.innerHTML = `${i}<br>`
        a.addEventListener('click', (e) => {
            e.preventDefault()
            alert(i)
        })
        frag.appendChild(a)
    }
    document.body.appendChild(frag)
}

{
    // 使用异步的场景
    // 定时任务：setTimeout, setInverval
    // 网络请求：ajax 请求，动态 <img> 加载
    // 事件绑定

    console.log('start')
    let img = document.createElement('img')
    img.onload = function () {
        console.log('loaded')
    }
    //img.src = 'xxx.png'
    console.log('end')
}

{
    let random = Math.random()
    random = random + '0000000000'
    random = random.slice(0, 10)
    console.log(random)
}

{
    function forEach(obj, fn) {
        let key
        if (obj instanceof Array) {
            obj.forEach((item, index) => fn(index, item))
        } else {
            for (key in obj) {
                fn(key, obj[key])
            }
        }
    }

    let arr = [1, 2, 3]
    forEach(arr, (index, item) => console.log(index, item))

    let obj = { x: 100, y: 200 }
    forEach(obj, (key, value) => console.log(key, value))
}

{
    let div1 = document.getElementById('div1')
    div1.addEventListener('click', (e) => {
        let target = e.target
        if (target.nodeName === 'A') {
            e.preventDefault()
            console.log(target.innerHTML)
        }
    })
}

{
    function bindEvent(elem, type, selector, fn) {
        if (fn === null) {
            fn = selector
            selector = null
        }
        elem.addEventListener(type, (e) => {
            let target
            if (selector) {
                target = e.target
                if (target.matches(selector)) {
                    fn.call(target, e)
                }
            } else {
                fn(e)
            }
        })
    }

    // 使用代理
    let div1 = document.getElementById('div1')
    bindEvent(div1, 'click', 'a', function (e) {
        e.preventDefault()
        console.log(this.innerHTML)
    })

    // 不使用代理
    let a = document.getElementById('a1')
    bindEvent(div1, 'click', function (e) {
        console.log(a.innerHTML)
    })
}

{
    let obj = {
        type: 'a',
        name: 'b'
    }
    localStorage.setItem('__honor__', JSON.stringify(obj))
    console.log(JSON.parse(localStorage.getItem('__honor__')))
}

{
    // 模块化：CMD,AMD,common.js,require.js
    // 组件化：vue,react,angular
    // 工程化：webpack,fis
}

{
    let textarea = document.getElementById('text')
    let timeoutId
    textarea.addEventListener('keyup', function () {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(function () {
            // 触发 change 事件
        }, 100)
    })
}