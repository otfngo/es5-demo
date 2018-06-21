{
  let promise = new Promise((resolve, reject) => {
    throw new Error('error')
  })

  promise.catch(err => {
    console.log(err.message) // error
  })
}

let p1 = new Promise((resolve, reject) => {
  resolve(42)
})

let p2 = new Promise((resolve, reject) => {
  resolve(43)
})

let p3 = new Promise((resolve, reject) => {
  resolve(44)
})

let p = Promise.all([p1, p2, p3])
p.then(res => {
  console.log(Array.isArray(res)) // true
  console.log(res) // [42, 43, 44]
})