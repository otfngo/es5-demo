{
    let readonly = function (target, name, descriptor) {
        descriptor.writable = false
        return descriptor
    }

    class Test {
        @readonly
        time() {
            return '2017-03-11'
        }
    }

    let test = new Test()

    console.log(test.time())
}

{
    let typename = function (target, name, descriptor) {
        target.myname = 'hello'
    }

    @typename
    class Test {

    }

    console.log(Test.myname)
}

{
    let log = (type) => {
        return (target, name, descriptor) => {
            let src_method = descriptor.value
            descriptor.value = (...arg) => {
                src_method.apply(target, arg)
                console.info(type)
            }
        }
    }

    class AD {
        @log('show')
        show() {
            console.info('ad is showed')
        }

        @log('click')
        click() {
            console.info('ad is clicked')
        }
    }

    let ad = new AD()
    ad.show()
    ad.click()
}