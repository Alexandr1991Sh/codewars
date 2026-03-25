//get week day by order number
const getWeekDay = i => ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'][i - 1]

//show what you should doing depends on week day
function show(weekDay) {
    console.log(
        weekDay >= 6
            ? `Today is holiday. Сегодня же ${getWeekDay(weekDay)}`
            : `Go to work. Сегодня же ${getWeekDay(weekDay)}`
    )
}

//Tests

show(1);
show(2);
show(3);
show(4);
show(5);
show(6);
show(7);