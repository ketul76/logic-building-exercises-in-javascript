// check whether number is perfect or not
let num = 6;
let sum = 0;
for(let i = 1; i <= num/2; i++){
  // i 1   3 
  // i 2   3
  // i 3   3
  // loop Terminated
  if(num % i === 0){
    // 3 % 1 === 0 
    // 3 % 2 === 0
    // 3 % 3 === 0
    sum = sum + i;
    //     0 + 1   = 1
    //     1 + 2   = 3
    //     3 + 3   = 6
  }
}
if(sum === num){ // check Sum is equal to num it equal Then Perfect 
  console.log(num + " Is a Perfect Number");
} // or Else Not a Perfect Number
else {
  console.log(num + " It's Not a Perfect Number");
}