// find power of number with for loop

let pow = 1;
let base = 5;
let exponent = 2;
for(let i = 0;i<exponent;i++){
  pow = pow * base;
}
console.log(pow);
/*
  0    0+1 
  1    1+1
  2    loop terminated
  pow
  1 * 5  = 5
  5 * 5  = 25  
*/