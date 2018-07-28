const str = 'The Quick Brown Fox Jumps Over The Lazy Dog Quick Brown Fox Jumps Quick Brown Fox Jumps Quick Brown Fox Jumps'
const reg = /quick\s(brown).+?(jumps)/ig

console.log(reg.test(str))
console.log(reg.exec(str))
console.log(str.search(reg))
console.log(str.match(reg))

function replacer(match, p1, p2, p3, offset, string) {
  return [p1, p2, p3].join(' - ')
}

const newString = 'abc123456#$*&'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer)
console.log(newString)

console.log('Twas the night before Xmas...'.replace(/xmas/i, 'Christmas'))
console.log('Apples are round, and apples are juicy.'.replace(/apples/gi, 'oranges'))
console.log('John Smith'.replace(/(\w+)\s(\w+)/, '$2 $1'))