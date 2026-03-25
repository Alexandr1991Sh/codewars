const shortenToDate = longDate => longDate.split(',')[0]


console.log(shortenToDate("Friday May 2, 9am"))                            //"Friday May 2"
console.log(shortenToDate("Tuesday January 29, 10pm"))                     //"Tuesday January 29"