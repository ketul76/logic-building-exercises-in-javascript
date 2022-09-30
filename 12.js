



//find first and last digit Sum

let number = 12345;
let firstDigit = number;
let lastDigit = number % 10;
console.log('Original Numbers :- ' + number);
while(firstDigit >= 10){
  firstDigit = parseInt(firstDigit/10);
}
let sum = firstDigit + lastDigit;
console.log('The Sum of FirstDigit ANd lastDigit= ' + sum);







