// Объясните, что происходит в данном коде и какой будет вывод в консоль при
// его выполнении.

setTimeout(function timeout() {
    console.log("Таймаут");
}, 0);

let p = new Promise(function (resolve, reject) {
    console.log("Создание промиса");
    resolve();
});

p.then(function () {
    console.log("Обработка промиса");
});

console.log("Конец скрипта");
