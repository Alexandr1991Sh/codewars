class A {
    a = 1

    x() {
        console.log(this.a)
    }

    y = () => {
        console.log(this.a)
    }
}

const a = new A()
a.x()
a.y()

const obj = {
    a: 1,
    x() {
        console.log(this.a)
    },
    y: () => {
        console.log(this.a)
    }
}

obj.x()
obj.y()
