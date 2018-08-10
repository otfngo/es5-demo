{
  // new 一个对象的过程
  // 1.创建一个新对象
  // 2.this 指向这个新对象
  // 3.执行代码，即对 this 赋值
  // 4.返回 this
}

{
  class Elem {
    constructor(selector) {
      this.elem = document.querySelector(selector)
    }
    html(val) {
      if (val) {
        this.elem.innerHTML = val
        return this
      } else {
        return this.elem.innerHTML
      }
    }
    on(type, fn) {
      this.elem.addEventListener(type, fn, false)
      return this
    }
  }
}

{

  /**
   * 闭包
   * 
   * 函数的执行依赖于变量作用域，这个作用域是在函数定义时决定的，而不是函数运行时决定的。
   * 
   * 闭包可以捕捉到局部变量（和参数），并一直保存下来，
   * 看起来像这些变量绑定到了在其中定义它们的外部函数，
   * 函数定义时的作用域链到函数执行时依然有效。
   */
  function fn() {
    let a = 100
    return function() {
      return a
    }
  }

  let fn1 = fn()
  let a = 200
  console.log(fn1()) // 100
}

{
  // 创建10个<a>标签，点击的时候弹出来对应的序号
  let i
  let frag = document.createDocumentFragment()
  for (i = 0; i < 10; i++) {
    (function(i) {
      let a = document.createElement('a')
      a.innerHTML = i + '<br>'
      a.addEventListener('click', function(e) {
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
}

{
  let random = Math.random()
  random = random + '0000000000'
  random = random.slice(0, 10)
  console.log(random)
}

{
  // 模块化：CMD,AMD,common.js,require.js
  // 组件化：vue,react,angular
  // 工程化：webpack,fis
}

{
  let textarea = document.getElementById('text')
  let timeoutId
  textarea.addEventListener('keyup', function() {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(function() {
      // 触发 change 事件
    }, 100)
  })
}