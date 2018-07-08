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