// check whether number is palindrone or not.
let num = 121;
let reverse = 0;
let original = num;
while(num !== 0){
  reverse = (reverse * 10) +  (num % 10);
  num = parseInt(num/10);
}
if(reverse === original){
  console.log('This is a palindrone Number');
}
else{
  console.log('This is Not a palindrone number');
}
