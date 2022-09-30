

//find first and last disit

let number = 12345;
let firstDigit = number;
let lastDigit = number % 10;
console.log('Original Numbers :- ' + number);
while(firstDigit >= 10){
  firstDigit = parseInt(firstDigit/10);
}
console.log('firstDigit is ' + firstDigit);
console.log('lastDigit is ' + lastDigit);
