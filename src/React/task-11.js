let obj = {a: 0}
const x = (() => console.log(this.a))
x.bind(obj).bind(2).bind(3)()
x()

function y() { console.log(this.a) }
y.bind(obj).bind(2).bind(3)()
y()

//undefined
//undefined
//0
//undefined