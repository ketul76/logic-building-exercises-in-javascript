// sum all odd numbers under 1 - 10

let sum = 0;
for(let i = 1;i<=10;i++){
  if(i % 2 === 1){
    sum = sum + i;
  }
}
console.log(sum);