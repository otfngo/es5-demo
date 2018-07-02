const camelizeRE = /-(\w)/g

function camelize(str) {
  return str.replace(camelizeRE, camelizeReplacer)
}

function camelizeReplacer(match, p1) {
  return p1 ? p1.toUpperCase() : ''
}

const str = 'border-top'
const camelizeStr = camelize(str)
console.log(camelizeStr) // 'borderTop'

const str1 = 'abc12345#$*'.replace(/([^\d]*)(\d*)([^\w]*)/, (match, p1, p2, p3, offset, string) => {
  return [p1, p2, p3].join('-')
})
console.log(str1) // 'abc-12345-#$*'