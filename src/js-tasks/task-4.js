// написать функция createCounter которая возвращает объект с методами
// increment, decrement, getValue, оти методы должны работать со счётчиками.
// при этом счётчик должен быть скрыт от прямого доступа извне


const createCounter = () => {
    let count = 0
    return {
        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count
    }
}

//пример использования
const counter = createCounter()
console.log(counter.increment()) // 1
console.log(counter.increment()) // 2
console.log(counter.decrement()) // 1
console.log(counter.getValue())  // 1


// реализация через классы
class Counter {
    #count = 0

    increment() {
        return ++this.#count
    }

    decrement() {
        return --this.#count
    }

    getValue() {
        return this.#count
    }
}

//пример использования
const counter2 = new Counter()
console.log(counter2.increment()) // 1
console.log(counter2.increment()) // 2
console.log(counter2.decrement()) // 1
console.log(counter2.getValue())  // 1