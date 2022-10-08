// find out Sum Of All Prime Number Between 1 to n.
let sum = 0;
for(let i = 10; i<=20;i++){
  value = 0;
for(let j = 2;j < i; j++){
  if(i % j === 0){
    value = 1;
    break;
  }
}
if(value === 0){
  sum = sum + i;
}
}
console.log("THE SUM OF ALL PRIME No. " + sum);