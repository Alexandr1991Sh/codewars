function addExtra(listOfNumbers) {
    return [...listOfNumbers, 1]
}

console.log(addExtra([1, 2, 3]).length)   //4
console.log(addExtra([1, 2]).length)     //3
console.log(addExtra([]).length)        //1

