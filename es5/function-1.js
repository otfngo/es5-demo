function sum(num1, num2) {
  return num1 + num2;
}

//callSum1() 在执行sum()函数时传入了this作为this值
//因为是在全局作用域中调用的，所以传入的就是window对象
function callSum1(num1, num2) {
  return sum.apply(this, arguments);
}

//传递参数并非apply的真正用武之地
//真正强大的地方是能够扩充函数赖以运行的作用域
window.color = "red";
var o = {color: "blue"};

function sayColor() {
  console.log(this.color);
}

sayColor();//red
sayColor.call(this);//red
sayColor.call(window);//red
sayColor.call(o);//blue

//bind,这个方法会创建一个函数的实例
//其this值会被绑定到传给bind()函数的值
var objectSayColor = sayColor.bind(o);
objectSayColor();//blue


//闭包是函数
//闭包是指有权访问另一个函数作用域中的变量的函数
//创建闭包的常见方式，就是在一个函数内部创建另一个函数
function createComparisionFunction(propertyName) {
  return function (object1, object2) {
    var value1 = object1[propertyName];
    var value2 = object2[propertyName];

    if (value1 < value2) {
      return -1;
    } else if (value1 > value2) {
      return 1;
    }
    return 0;
  }
}