/**
 #### Условие задачи:
 Объясните, что происходит в данном коде и какой будет вывод в консоль при
 его выполнении.
 */
const object = {
    firstName: "Bill",
    lastName: "Ivanov",

    sayLastName: () => {
        console.log(this.lastName);
    },

    sayName() {
        console.log(this.firstName);
    },
};

object.sayName(); //
object.sayLastName(); //

var b = object.sayName;
b(); //

object.sayName.bind({ firstName: "Cash" })(); //
object.sayLastName.bind({ firstName: "Arrow" })(); //

object.sayName.bind({ firstName: "Name1" }).bind({ firstName: "Name2" })(); //
