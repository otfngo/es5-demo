{
    console.log(0b111)
    console.log(0B111)
    console.log(0o10)
    console.log(0O10)
}

{
    console.log(Number.isFinite(15))
    console.log(Number.isFinite(15 / 0))
    console.log(Number.isFinite(NaN))
    console.log(Number.isFinite(null))
    console.log(Number.isFinite(undefined))

    console.log(Number.isNaN(NaN))
    console.log(Number.isNaN(1))
    console.log(Number.isNaN(null))
    console.log(Number.isNaN(undefined))
    console.log(Number.isNaN(15 / 0))
}

{
    console.log(Number.isInteger(1))
    console.log(Number.isInteger(1.9))
    console.log(Number.isInteger(15 / 0))
    console.log(Number.isInteger(25.0))
    console.log('19000000000000000000', Number.isInteger(19000000000000000000))
}

{
    console.log(Number.MAX_SAFE_INTEGER)
    console.log(Number.MAX_SAFE_INTEGER)
    console.log(Number.MAX_VALUE)
    console.log(Number.MIN_VALUE)
    console.log(Number.isSafeInteger(19000000000000000000))
}

{
    console.log(Math.trunc(4.1))
    console.log(Math.trunc(4.9))
}

{
    //判断数的正负，返回 -1，0，1，NaN
    console.log(Math.sign(-5))
    console.log(Math.sign(0))
    console.log(Math.sign(5))
    console.log(Math.sign('50'))
    console.log(Math.sign('5a'))
}

{
    //立方根
    console.log(Math.cbrt(-1))
    console.log(Math.cbrt(-8))
    console.log(Math.cbrt(8))
}