// const weekData = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

// function getWeekDay(i) {
//     if (typeof i !== 'number' || i < 1 || i > 7) {
//         return undefined; // или можно вернуть null / бросить ошибку
//     }
//     return weekData[i - 1];
// }

// function show(weekDay) {
//     const name = getWeekDay(weekDay);
//     if (!name) {
//         console.log('Неверный номер дня недели');
//         return;
//     }
//     !name &&  console.log('Неверный номер дня недели')

//     if (weekDay === 6 || weekDay === 7) {
//         console.log('Today is holiday. Сегодня же ' + name);
//         return;
//     }
//     console.log('Go to work. Сегодня же ' + name);
// }

// // Тесты
// show(1);
// show(2);
// show(3);
// show(4);
// show(5);
// show(6);
// show(7);
// show(8);

function getWeekDay(weekDay) {
    return ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'][weekDay - 1]
}

function show(weekDay) {
    const name = getWeekDay(weekDay);
    if (!name) return console.log('Неверный номер дня недели')
    console.log(weekDay === 6 || weekDay === 7 ? 'Today is holiday. Сегодня же ' : 'Go to work. Сегодня же ' + name)
}

// Тесты
show(1);
show(2);
show(3);
show(4);
show(5);
show(6);
show(7);
show(8);