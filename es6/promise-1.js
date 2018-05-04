// timeout方法返回一个Promise实例，表示一段时间以后才会发生的结果
// 过了指定的时间（ms参数）以后，Promise实例的状态变为Resolved，
// 就会触发then方法绑定的回调函数
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}

timeout(100).then(value => console.log(value))


// Promise 新建后立即执行，所以首先输出的是Promise
// then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行
// 所以Resolved最后输出
let promise = new Promise((resolve, reject) => {
    console.log('Promise')
    resolve()
})

promise.then(() => console.log('Resolved'))

console.log('H1')
// Promise
// Hi!
// Resolved


// 使用Promise包装一个图片加载的异步操作
// 如果加载成功，就调用resolve方法，否则就调用reject方法
function loadImageAsync(url) {
    return new Promise((resolve, reject) => {
        let image = new Image()
        image.onload = () => resolve(image)
        image.onerror = () => reject(new Error('Could not load image at ' + url))
        image.src = url
    })
}


let getJSON = function (url) {
    let promise = new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.onreadystatechange = handler
        xhr.responseType = 'json'
        xhr.setRequestHeader('Accept', 'application/json')
        xhr.send(null)

        function handler() {
            if (this.readyState === 4 && this.status === 200) {
                resolve(this.response)
            }
        }
    })
    return promise
}

getJSON('/posts.json')
    .then(
        value => console.log('Contents: ' + value)
    )
    .catch(err => console.log(err))

// reject函数的参数通常是Error对象的实例，表示抛出的错误
// resolve函数的参数除了正常的值以外，还可能是另一个 Promise 实例
//
// p1和p2都是 Promise 的实例
// 但是p2的resolve方法将p1作为参数，即一个异步操作的结果是返回另一个异步操作
// 这时p1的状态就会传递给p2，也就是说，p1的状态决定了p2的状态
// 如果p1的状态是Pending，那么p2的回调函数就会等待p1的状态改变
// 如果p1的状态已经是Resolved或者Rejected，那么p2的回调函数将会立刻执行

let p1 = new Promise((resolve, reject) => {
    //...
})
let p2 = new Promise((resolve, reject) => {
    //...
    resolve(p1)
})