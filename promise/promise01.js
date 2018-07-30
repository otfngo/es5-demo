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