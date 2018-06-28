async function dbFuc(db) {
  let docs = [{}, {}, {}]
  let promises = docs.map(doc => db.post(doc))
  let results = await Promise.all(promises)
  console.log(results)
}

async function chainAnimatinosAsync(elem, animations) {
  let ret = null
  try {
    for(let anim of animations) {
      ret = await anim(elem)
    }
  } catch (err) {
    // 忽略错误，继续执行
  }
  return ret
}