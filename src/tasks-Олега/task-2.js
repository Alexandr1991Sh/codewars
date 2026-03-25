// Задача 1:
// Напишите функцию createCounter, которая возвращает объект с методами
// increment, decrement и getValue. Эти методы должны работать со счётчиком,
// который увеличивается, уменьшается и возвращает текущее значение соответственно.
// При этом счётчик должен быть скрыт от прямого доступа извне.
// Пример использования:

const createCounter = () => {
    let value = 0
    const increment = () => ++value
    const decrement = () => --value
    const getValue = () => value

    return {increment, decrement, getValue}
}
const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getValue());  // 1

// Реализовать предыдущую задачу через класс Counter
// Пример использования:
class Counter {
    #value = 0

    increment() {
        return ++this.#value
    }

    decrement() {
        return --this.#value
    }

    getValue() {
        return this.#value
    }
}

const counter2 = new Counter();
console.log(counter2.increment()); // 1
console.log(counter2.increment()); // 2
console.log(counter2.decrement()); // 1
console.log(counter2.getValue());  // 1

