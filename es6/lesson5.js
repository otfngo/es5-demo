{
    console.log(Number.MAX_SAFE_INTEGER)
    console.log(Number.MIN_SAFE_INTEGER)
    console.log(Number.MAX_VALUE)
    console.log(Number.MIN_VALUE)
    console.log(Number.isInteger(19000000000000000000))
    console.log(Number.isSafeInteger(19000000000000000000))
}

{
    console.log(Math.trunc(4.1))
    console.log(Math.trunc(4.9))
}

{
    //判断数的正负，返回 -1，-0, +0，1，NaN
    console.log(Math.sign(-5))
    console.log(Math.sign(0))
    console.log(Math.sign(5))
    console.log(Math.sign('50'))
    console.log(Math.sign('5a'))
}