class Bonus {
  constructor(salary, strategy) {
    this.salary = salary
    this.strategy = strategy
  }
  setSalary(salary) {
    this.salary = salary
  }
  setStrategy(strategy) {
    this.strategy = strategy
  }
  getBonus() {
    return this.strategy.calculate(this.salary)
  }
}

class PerformanceS {
  constructor() {}
  calculate(salary) {
    return salary * 4
  }
}

class PerformanceA {
  constructor() {}
  calculate(salary) {
    return salary * 3
  }
}

class PerformanceB {
  constructor() {}
  calculate(salary) {
    return salary * 2
  }
}

let bonus = new Bonus()

bonus.setSalary(10000)
bonus.setStrategy(new PerformanceB())
console.log(bonus.getBonus())

bonus.setSalary(6000)
bonus.setStrategy(new PerformanceS())
console.log(bonus.getBonus())


/**
 * 策略模式指的是定义一系列的算法，并且把它们封装起来
 */
const strategies = {
  s(salary) {
    return salary * 4
  },
  a(salary) {
    return salary * 3
  },
  b(salary) {
    return salary * 2
  }
}

function calculateBonus(level, salary) {
  return strategies[level](salary)
}

console.log(calculateBonus('b', 10000))
console.log(calculateBonus('s', 6000))

/**
 * 非策略模式下的表单验证
 */
const registerForm = document.getElementById('registerForm')

registerForm.onsubmit = function () {
  if (registerForm.userName.value === '') {
    console.log('...')
    return false
  }
  if (registerForm.password.value.lenght < 6) {
    console.log('...')
    return false
  }
  if (!/(^1[3|5|8][0-9]{9}$)/.test(registerForm.phoneNumber.value)) {
    console.log('...')
    return false
  }
}

/**
 * 策略模式下的表单验证
 */
const strategies2 = {
  isNonEmpty(value, errMsg) {
    if (value === '') {
      return errMsg
    }
  },
  minLength(value, length, errMsg) {
    if (value.lenght < length) {
      return errMsg
    }
  },
  isMobile(value, errMsg) {
    if (!(/^1[3|5|8][0-9]{9}$/).test(value)) {
      return errMsg
    }
  }
}