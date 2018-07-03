function appendDiv(callback) {
  const frag = document.createDocumentFragment()
  for (let i = 0; i < 100; i++) {
    const div = document.createElement('div')
    div.innerHTML = i
    frag.appendChild(div)
    if (typeof callback === 'function') {
      callback(div)
    }
  }
  document.body.appendChild(frag)
}

appendDiv(function (node) {
  node.style.display = 'none'
})