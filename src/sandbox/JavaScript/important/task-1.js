/*

Оплата за проживание в отеле

// Необходимо написать функцию расчета стоимости проживания посетителя в отеле
// Функция может принимать 2 аргумента
// 1. Количество ночей проживания в отеле (обязательный параметр)
// 2. Дата заселения (необязательный параметр). Если значение не указано, то отсчет ведется от текущего дня
// Стоимость проживания в будние дни (с понедельника по пятницу) стоит 1500 руб.
// Стоимость проживания в выходные дни (суббота, воскресенье) стоит 2200 руб.
*/

const prices = {
    weekday: 1500,
    holiday: 2200,
};

function bookingCalculate(nights, data = new Date()) {
    let resSum = 0

    for (let i = 0; i < nights; i++) {
        const dayNum = data.getDay()
        if (dayNum === 0 || dayNum === 5)  {
            resSum += prices.holiday
        } else {
            resSum += prices.weekday
        }
        data.setDate(data.getDate() + 1)
    }
    return resSum;
}

console.log(bookingCalculate(7)); // 11900
console.log(bookingCalculate(3, new Date("2023-11-10"))); // 5900
