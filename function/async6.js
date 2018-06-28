/**
 * 所有远程操作都是继发
 * 
 * 只有在前一个url返回结果，才会去读取下一个url
 * 这样做效率很差，非常浪费时间
 * 
 * 我们需要的是并发发出远程请求
 */
async function logInOrder(urls) {
  for(const url of urls) {
    const response = await fetch(url)
    console.log(await response.text())
  }
}

/**
 * 
 */
async function logInOrder2(urls) {
  // 并发读取远程url
  const textPromises = urls.map(async url => {
    const response = await fetch(url)
    return response.text()
  })

  // 按次序输出
  for (const textPormise of textPromises) {
    console.log(await textPormise)
  }
}