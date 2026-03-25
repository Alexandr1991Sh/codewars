function chromosomeCheck(sperm) {
return sperm.toLowerCase() === 'xx' ? "Congratulations! You're going to have a daughter." : "Congratulations! You're going to have a son."
}

console.log(chromosomeCheck('XY'))      //"Congratulations! You're going to have a son."
console.log(chromosomeCheck('XX'))      // "Congratulations! You're going to have a daughter."