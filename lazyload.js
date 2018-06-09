let viewHeight = document.documentElement.clientHeight

function lazyload() {
  let eles = document.querySelectorAll('img[data-original][lazyload]')
  Array.prototype.forEach.call(eles, function (item, index) {
    let rect
    if (item.dataset.original === '') return

    rect = item.getBoundingClientRect()

    if (rect.bottom >= 0 && rect.top < viewHeight) {
      ! function () {
        let img = new Image()
        img.src = item.dataset.original
        img.onload = function () {
          item.src = img.src
        }
        item.removeAttribute('data-original')
        item.removeAttribute('lazyload')
      }()
    }
  })
}

lazyload()

document.addEventListener('scroll', lazyload)