// Reverse a Number

let num = 45678;
let reverse = 0;

while(num !== 0){
  reverse = (reverse * 10) + (num % 10);
  num = parseInt(num/10)
}
console.log(reverse);