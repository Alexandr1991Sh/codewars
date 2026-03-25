//Есть массив игроков. Нужно разделить их на тех, к кого есть команда и нет.
// Определяем наличие команды по полю squad.

const players = [
    { id: 2, squad: 1 },
    { id: 3, squad: 1 },
    { id: 4, squad: null },
    { id: 5, squad: 2 },
    { id: 6, squad: 1 },
    { id: 7, squad: 2 },
];

const groupPlayersBySquad = (players) => {};

const [playersWithSquad, playersWithoutSquad] = groupPlayersBySquad(players);
