// check the number is odd or even.

let num = 45;
if(num % 2 === 0){
  console.log('this is a Even number');
}
else {
  console.log('this is a odd number');
}
console.log('------------------------------');
function isEvenOdd(val){
  if (val % 2 === 0){
    console.log('This ' + val + ' is a Even');
  }
  else{
    console.log('This ' + val + ' is a Odd');
  }
}
isEvenOdd(51); 