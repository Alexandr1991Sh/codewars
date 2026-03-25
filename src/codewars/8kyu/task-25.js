const setAlarm = (employed, vacation) => employed && !vacation

console.log(setAlarm(true, true))       //false
console.log(setAlarm(false, true))      //false
console.log(setAlarm(true, false))      //true