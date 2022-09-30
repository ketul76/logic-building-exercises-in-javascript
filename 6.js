//Program to find power of a number using recursion.

function power(base,exponant){
  if(exponant === 0){
    return 1;
  }
  let result = base;
  result = result * power(base,exponant - 1);
  return result;
}
console.log(power(2,5));