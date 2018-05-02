{
    class SuperClass {
        static staticMethod() {
            return 'hello'
        }
    }

    console.log(SuperClass.staticMethod())

    class Sub1Class extends SuperClass {

    }

    console.log(Sub1Class.staticMethod())

    class Sub2Class extends SuperClass {
        static staticMethod() {
            return `${super.staticMethod()},too`
        }
    }

    console.log(Sub2Class.staticMethod())
}

{
    class Point {
        constructor(x, y) {
            this.x = x
            this.y = y
        }
    }

    class ColorPoint extends Point {
        constructor(x, y, color) {
            super(x, y)
            this.color = color
        }
    }
}