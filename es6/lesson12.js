{
    class Parent {
        constructor(name = 'immoc') {
            this.name = name
        }
    }

    let v_parent = new Parent('v')
    console.log(v_parent)
}

{
    class Parent {
        constructor(name = 'immoc') {
            this.name = name
        }
    }

    class Child extends Parent {

    }

    console.log(new Child())
}

{
    class Parent {
        constructor(name = 'immoc') {
            this.name = name
        }
    }

    class Child extends Parent {
        constructor(name = 'child') {
            super(name)
            this.type = 'child'
        }
    }

    ''
    console.log(new Child('hello'))
}

{
    class Parent {
        constructor(name = 'immoc') {
            this.name = name
        }

        get longName() {
            return `mk${this.name}`
        }

        set longName(value) {
            this.name = value
        }
    }

    let v = new Parent()
    console.log(v.longName)
    v.longName = 'hello'
    console.log(v.longName)
}

{
    class Parent {
        constructor(name = 'immoc') {
            this.name = name
        }

        static tell() {
            return 'tell'
        }
    }

    console.log(Parent.tell())
}

{
    class Parent {
        constructor(name = 'immoc') {
            this.name = name
        }

        static tell() {
            return 'tell'
        }
    }

    Parent.type = 'test'
    console.log(new Parent(), Parent.type)
}