const COUNT = 100
const arr = new Uint32Array(COUNT)
window.crypto.getRandomValues(arr)

arr.forEach(item => console.log(item))