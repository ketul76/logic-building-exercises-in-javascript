let a,b,c;
a=10;
b=10;
c=10;

if(a===b && b===c) {
  console.log('Equialateral Triangle');
}
else if(a===b || b===c ||c===a){
  console.log('Isoscales Triangle');
}
else{
  console.log('scalence triangle');
}