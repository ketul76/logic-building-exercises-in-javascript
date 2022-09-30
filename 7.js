// Write a program to print all natural numbers between 1 to n using recursion.

function number(ln,un){
  if (ln > un){
    return;
  }
  console.log(ln);
  number(ln + 1,un);
}
number(1,10);