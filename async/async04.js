const superagent = require('superagent')
const NUM_RETRIES = 3

async function test() {
  let i
  for (i = 0; i < NUM_RETRIES; i++) {
    try {
      await superagent.get('http://google.com/this-throws-an-error')
      break
    } catch (err) {}
  }
  console.log(i)
}

test()