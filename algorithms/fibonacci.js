function fibonacci(n) {
  if (n < 1) return 0
  if (n <= 2) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

function fibonacciIterative(n) {
  let fibN0 = 0
  let fibN1 = 1
  let fibNn = n
  for (let i = 2; i <= n; i++) {
    fibNn = fibN0 + fibN1;
    ([fibN0, fibN1] = [fibN1, fibNn])
  }
  return fibNn
}

function fibonacciMemoization(n) {
  const memo = [0, 1]
  const fibonacci = n => {
    if (memo[n] != null) {
      return memo[n]
    }
    return memo[n] = fibonacci(n - 1) + fibonacci(n - 2)
  }
  return fibonacci(n)
}