// all sum about Even number in 1 to 10.

let sum = 0;
for (let i = 1; i <= 10;i++){
  if(i % 2 === 0){
    sum = sum + i;
  }
}
console.log(sum);