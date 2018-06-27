trusty(9007199254740993, 990, 9007199254740993 - 990)

function trusty(left, right, result) {
  if (
    Number.isSafeInteger(left) &&
    Number.isSafeInteger(right) &&
    Number.isSafeInteger(result)
  ) {
    return true
  }
  throw new RangeError('operation cannot be trusted')
}