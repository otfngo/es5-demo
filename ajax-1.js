function postMessage(url, msg) {
  let xhr = new XMLHttpRequest()
  xhr.open('POST', url)
  // 用请求主体发送纯文本消息
  xhr.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8')
  xhr.send(msg) // 把msg作为请求主体发送
}

function getText(url, callback) {
  let xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.onreadystatechange = function () {
    // 如果请求完成，且它是成功的
    if (xhr.readyState === 4 && xhr.status === 200) {
      let type = xhr.getResponseHeader('Content-Type')
      if (type.match(/^text/)) {
        callback(xhr.responseText)
      }
    }
  }
  xhr.send(null)
}

// 发起同步的HTTP GET请求以获得指定URL的内容
// 返回响应文本，或如果请求不成功或响应不是文本就报错
function getTextSync(url) {
  let xhr = new XMLHttpRequest()
  xhr.open('GET', url, false)
  xhr.send(null)

  if (xhr.status !== 200) {
    throw new Error(xhr.statusText)
  }

  let type = xhr.getResponseHeader('Content-Type')
  if (!type.match(/^text/)) {
    throw new Error('expected textual response;got:' + type)
  }

  return xhr.responseText
}

// 发起HTTP GET响应以获取指定URL的内容
// 当响应到达时，把它以解析后的XML Document对象、解析后的JSON对象
// 或字符串形式传递给回调函数
function get(url, callback) {
  let xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let type = xhr.getResponseHeader('Content-Type')
      if (type.includes('xml') && xhr.responseXML) {
        callback(xhr.responseXML) // Document对象响应
      } else if (type === 'application/json') {
        callback(JSON.parse(xhr.responseText)) // JSON响应
      } else {
        callback(xhr.responseText) // 字符串响应
      }
    }
  }
  xhr.send(null)
}

function encodeFormData(data) {
  if (!data) return ''
  let pairs = []
  for (let name in data) {
    if (!data.hasOwnProperty(name)) continue
    if (typeof data[name] === 'function') continue
    let value = data[name].toString()
    name = encodeURIComponent(name.replace('%20', '+'))
    value = encodeURIComponent(value.replace('%20', '+'))
    pairs.push(name + '=' + value)
  }
  return pairs.join('&')
}

function postData(url, data, callback) {
  let xhr = new XMLHttpRequest()
  xhr.open('POST', url)
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && callback) {
      callback(xhr)
    }
  }
  xhr.setxhrHeader('Content-Type', 'application/x-www-form-urlencoded')
  xhr.send(encodeURIComponent(data))
}

function getData(url, data, callback) {
  let xhr = new XMLHttpRequest()
  xhr.open('GET', url + '?' + encodeURIComponent(data))
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && callback) {
      callback(xhr)
    }
  }
  xhr.send(null)
}

function postJSON(url, data, callback) {
  let xhr = new XMLHttpRequest()
  xhr.open('POST', url)
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && callback) {
      callback(xhr)
    }
  }
  xhr.setxhrHeader('Content-Type', 'application/json')
  xhr.send(JSON.stringify(data))
}

// 查找有data-uploadto属性的全部<input type="file">元素
// 并注册onchange事件处理程序
// 这样任何选择的文件都会自动通过POST方法发送到指定的"uploadto" URL
// 服务器的响应是忽略的
whenReady(function () { // 当文档准备就绪时运行
  let elts = document.getElementsByTagName('input')
  for (let i = 0, len = elts.length; i < len; i++) {
    let input = elts[i]
    if (input.type !== 'file') continue // 跳过所有非文件上传元素
    let url = input.getAttribute('data-uploadto')
    if (!url) continue // 跳过任何没有URL的元素

    input.addEventListener('change', function () { // 当用户选择文件时
      let file = this.files[0] // 假设单个文件选择
      if (!file) return // 如果没有文件，不做任何事情
      let xhr = new XMLHttpRequest()
      xhr.open('POST', url)
      xhr.send(file) // 把文件作为主体发送
    }, false)
  }
})