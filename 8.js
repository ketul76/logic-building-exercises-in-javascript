//convert days to years weeks and days
let days = 30;
let years = days / 365;
let weeks = (days % 365) / 7;
let day = days  -  (years * 365) + (weeks * 7);

console.log('Years : ' + Math.round(years));
console.log('Weeks : ' + Math.round(weeks));
console.log('Day : ' + Math.round(day));
