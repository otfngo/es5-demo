async function getTitle(url) {
  let res = await fetch(url)
  let html = await res.text()
  return html.match(/<title>([\s\S]+)<\/title>/i)[1]
}

getTitle('https://tc39.github.io/ecma262/').then(console.log)