function getWeekDay(i) {
    return ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'][i - 1]
}

function show(weekDay) {
    const day = getWeekDay(weekDay)
    console.log(weekDay > 5 ? `Today is holiday. Сегодня же ${day}` : `Go to work. Сегодня же ${day}`)
}

//Tests
show(1);
show(2);
show(3);
show(4);
show(5);
show(6);
show(7);