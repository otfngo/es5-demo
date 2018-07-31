let x = 0.2
let y = 0.3
let z = 0.1

Math.abs(x - y + z) // 2.7755575615628914e-17 或者 2**(-55)
Number.EPSILON // 2.220446049250313e-16 或者 2**(-52)

let equal = Math.abs(x - y + z) < Number.EPSILON