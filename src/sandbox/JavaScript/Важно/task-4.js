// Написать класс EventEmmiter, аналог addeventlistener.
// Метод метод on, который вызывается в именем события и функцией
// Метод off, который вызывается также с названием события и функцией
// Метод emit, который триггерит все функции

class EventEmitter {}

// Пример использования
const myEventEmitter = new EventEmitter();

const greetListener = (name) => {
    console.log(`Hello, ${name}!`);
};

myEventEmitter.on("greet", greetListener);
myEventEmitter.emit("greet", "Alice"); // Output: Hello, Alice!

myEventEmitter.off("greet", greetListener);
myEventEmitter.emit("greet", "Bob"); // No output
