let arr1 = [1, 22, 333];
let arr2 = [];
let arr3 = [];
let arr4 = [4, 55, 666, 7777];

const rankFirst = arr2[0] || arr1[0]
const rankSecond = arr2[1] || arr1[1]
const rankThird = arr2[2] || arr1[2]

arr2 = [rankSecond, rankFirst, rankThird];

([, , , ...arr3] = arr4)