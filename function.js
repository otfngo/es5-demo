{
    this.x = 9
    let module = {
        x: 81,
        getX() {
            return this.x
        }
    }

    console.log(module.getX())

    let retrieveX = module.getX
    console.log(retrieveX())

    // 创建一个新函数，将"this"绑定到module对象
    let boundGetX = retrieveX.bind(module)
    console.log(boundGetX())
}