const fs = require('fs')

const readFile = function (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err)
        return
      }
      resolve(data)
    })
  })
}

const asyncReadFile = async function () {
  const f1 = await readFile('./file1.txt')
  const f2 = await readFile('./file2.txt')
  console.log(f1.toString())
  console.log(f2.toString())
}

asyncReadFile()