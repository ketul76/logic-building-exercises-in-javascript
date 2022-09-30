// sum of all natural number 

function sum1(ln,un){
  if(ln === un){
    return ln;
  }
  return ln + sum1(ln + 1,un);
}
console.log(sum1(1,10));
