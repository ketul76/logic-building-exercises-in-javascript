// sum of all odd number

function sumOdd(ln,un){
  if (ln > un){
    return 0;
  }
  return (ln + sumOdd(ln + 2, un));
}
console.log(sumOdd(1,5));