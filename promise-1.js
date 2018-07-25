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

function loadImg(src) {
  return new Promise((resolve, reject) => {
    let img = document.createElement('img')
    img.src = src
    img.onload = function () {
      resolve(img)
    }
    img.onerror = function (err) {
      reject(err)
    }
  })
}

function showImgs(imgs) {
  let frag = document.createDocumentFragment()

  imgs.forEach((img) => {
    frag.appendChild(img)
  })

  document.body.appendChild(frag)
}

Promise.all([
  loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505548623934&di=2ec212b8a9504e043c478738bccde363&imgtype=0&src=http%3A%2F%2F4493bz.1985t.com%2Fuploads%2Fallimg%2F160813%2F3-160Q3104041.jpg'),
  loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505548687709&di=c145dbaaed0cf67105478aa5e371ac8c&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201410%2F2014102406.jpg'),
  loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505548730103&di=d91c380c12d83b560cbe4b051c53b786&imgtype=0&src=http%3A%2F%2Fimg02.3dmgame.com%2Fuploads%2F140627%2F236-14062G03934530.jpg')
]).then(showImgs)