function pipeFix(numbers) {
    const resArray = []
    for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
        resArray.push(i)
    }
    return resArray
}

console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]))       //[1,2,3,4,5,6,7,8,9]
console.log(pipeFix([6, 9]))                      //[6,7,8,9]
console.log(pipeFix([-1, 4]))                     //[-1,0,1,2,3,4]
console.log(pipeFix([1, 2, 3]))                   //[1,2,3]