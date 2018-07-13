const util = {
  random(min = 0, max = 1) {
    return Math.random() * (max - min) + min
  },
  createAndDownloadFile(fileName, content) {
    const a = document.createElement('a')
    const blob = new Blob([content])
    a.download = `${fileName}.json`
    a.href = URL.createObjectURL(blob)
    a.click()
    URL.revokeObjectURL(blob)
  }
}

export default util