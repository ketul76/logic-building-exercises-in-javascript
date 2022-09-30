// check a whether number is armstrong or not
let num = 153;
let check = num; //num ne check variable ma store karyo if cond check karva
let power;       // pow find out mate
let sum = 0;      
let armstrong = 0;            
let len = num.toString().length;  //num ni length find karva mate power teni length mujab thase

while(num !== 0){
  armstrong = num % 10;  // 3 avse 
  power = Math.pow(armstrong,len);  // 3*3*3 pachi 5*5*5 pachi 1*1*1
  sum = sum + power;     // 0 + 27 =27   27 + 125   125 + 1
  num = parseInt(num / 10);       // while loop ne terminate karva mate
}
if(check === sum){             //je totalsum ane original number same hoy to armstrong number else not 
  console.log('This is a ArmStrong Number: ' + ' original number is: ' + check + ' and the sum of Number is: ' + sum );
}
else{
  console.log('This is not a ArmStrong Number');
}