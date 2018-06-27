function fibonacci(n, ac1 = 1, ac2 = 1) {
  if (n <= 2) {
    return ac2
  }
  return fibonacci(n-1, ac2, ac1 + ac2)
}

console.log(fibonacci(5))
console.log(fibonacci(6))
console.log(fibonacci(100))
console.log(fibonacci(1000))