//find Maximum between three Numbers.

let num1 = 10;
let num2 = 40;
let num3 = 70;

if (num1 > num2 && num1 > num3){
  console.log(num1 + ' is maximum number');
}
else if(num2 > num3 && num2 > num1){
  console.log(num2 + ' is maximum number');
}
else if(num3 > num1 && num3 > num2){
  console.log(num3 + ' is maximum number');
}
else{
  console.log('invalid');
}