// factorial of number 

let n = 5;                   // 5 no no factorial 
let fact = 1;                 

for(let i = 2;i<=n;i++){
  fact = fact * i;
  //       1  * 2  = 2
  //       2  * 3  = 6 
  //       6  * 4  = 24
  //       24 * 5  = 120
}
console.log(fact);