var values = [1, 2, 3, 4, 5];
var sum = values.reduce(function (prev, cur, index, array) {
  return prev + cur;
});
console.log(sum);//15

var sum2 = values.reduceRight(function (prev, cur, index, array) {
  return prev + cur;
});
console.log(sum2);//15