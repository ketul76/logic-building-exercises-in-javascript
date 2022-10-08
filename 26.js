// find a fibbonaci series

// fibonnaci series etle ani value ane tena pachi ni value no sum 

let num = 10;
let a = 0;
let b = 1;
let c = 0;
for(let i = 0; i < num; i++){
  a=b;                  //    0 = 1           0  = 1         0 = 1         0 = 1   
  b=c;                  //    1 = 0           1  = 1         1 = 1         1 = 2
  c=a + b;              //    0 + 1    = 1    0 + 1   1      1 + 1   2     1 + 2    3
  console.log(c);
}
