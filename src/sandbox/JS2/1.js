/*
Оплата за проживание в отеле
// Необходимо написать функцию расчета стоимости проживания посетителя в отеле
// Функция может принимать 2 аргумента
// 1. Количество ночей проживания в отеле (обязательный параметр)
// 2. Дата заселения (необязательный параметр). Если значение не указано, то отсчет ведется от текущего дня
// Стоимость проживания в будние дни (с понедельника по пятницу) стоит 1500 руб.
// Стоимость проживания в выходные дни (суббота, воскресенье) стоит 2200 руб.
*/

const prices = {weekday: 1500, holiday: 2200}

function bookingCalculate(nights, startDate = new Date()) {
    const currentDate = new Date(startDate)
    let resSum = 0

    for (let i = 0; i < nights; i++) {
        const dayOfWeek = currentDate.getDay()
        if (dayOfWeek === 6 || dayOfWeek === 0) {
            resSum += prices.holiday
        } else {
            resSum += prices.weekday
        }
        currentDate.setDate(currentDate.getDate() + 1)
    }

    return resSum
}


console.log(bookingCalculate(7)); // 11900
console.log(bookingCalculate(3, new Date("2023-11-10"))); // 5900
