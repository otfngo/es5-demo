const multiply = (function () {
  const cache = {}
  return function () {
    const args = Array.prototype.join.call(arguments, ',')
    if (args in cache) {
      return cache[args]
    }
    return cache[args] = calculate.apply(null, arguments)

    function calculate() {
      let a = 1
      for (let i = 0, len = arguments.length; i < len; i++) {
        a *= arguments[i]
      }
      return a
    }
  }
})()

const report = (function () {
  const imgs = []
  return function (src) {
    const img = new Image()
    imgs.push(img)
    img.src = src
  }
})()