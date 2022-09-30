//check a wheather number is Prime Or not
// function isPrime(num){
//   for(let i = 2;i<num;i++){
//     if(num % i === 0){
//       return  (num  + ' is not a Prime number')
//     }
//   }
//     return num + ' is a Prime Number'
// }
// console.log(isPrime(17));

let i;
let num = 10;
for(i =2;i<num;i++){
  if(num % i === 0){
    break;
  }
}
if(num === i){
  console.log('prime');
}
else{
  console.log('not');
}