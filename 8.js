// print a odd number Using Recursion Function.

function oddNumber(ln,un){
  if(ln > un){
    return;
  }
  console.log(ln);
  oddNumber(ln + 2,un);
}
oddNumber(1,10);