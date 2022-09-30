//sum of all digit number

let num = 12345;
let sum = 0;
while (num !== 0){
  sum = sum + num % 10;
  num = parseInt(num / 10);
}
console.log(sum);