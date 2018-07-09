const myImage = (function () {
  const img = document.createElement('img')
  document.body.appendChild(img)
  return function (src) {
    img.src = src
  }
})()

const proxyImage = (function () {
  const img = new Image()
  img.onload = function () {
    myImage(this.src)
  }
  return function (src) {
    myImage('loading.gif')
    img.src = src
  }
})()

proxyImage('img.jpg')