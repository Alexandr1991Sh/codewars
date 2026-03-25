function peopleWithAgeDrink(old) {
    if (old < 14) {
        return 'drink toddy'
    } else if (old < 18 && old >= 14) {
        return 'drink coke'
    } else if (old < 21 && old >= 18) {
        return 'drink beer'
    } else if (old >= 21) {
        return 'drink whisky'
    }
}

console.log(peopleWithAgeDrink(22))     //'drink whisky'
console.log(peopleWithAgeDrink(13))     //'drink toddy'
console.log(peopleWithAgeDrink(20))     //'drink beer'
console.log(peopleWithAgeDrink(17))     //'drink coke'