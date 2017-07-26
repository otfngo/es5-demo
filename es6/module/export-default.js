//默认输出是一个函数
//其他模块加载该模块时，import命令可以为该匿名函数指定任意名字
//export default命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出
//因此export default命令只能使用一次
export default function () {
  console.log("tianya");
}