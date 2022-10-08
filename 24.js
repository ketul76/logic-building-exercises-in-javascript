// check armstrong number between 1 to n.
for(let i = 0;i<= 200;i++){
let num = i;          // i ne 200 sudhi ni range ma lai java.
let check = num; //num ne check variable ma store karyo if cond check karva
let power;       // pow find out mate
let sum = 0;      
let armstrong = 0;            
let len = num.toString().length;  //num ni length find karva mate power teni length mujab thase
while(num !== 0){                     // num 0 nahi thay sudhi farse
  armstrong = num % 10;  
  // console.log(armstrong);             // num % 10 etle armstrong ma thase 
  power = Math.pow(armstrong,len);    // teno power sodhvano
  sum = sum + power;                   // tema je power ayo ane sum karvano
  console.log(sum);
  num = parseInt(num / 10);       // while loop ne terminate karva mate
}
if(check === sum){             //je totalsum ane original number same hoy to armstrong number else not 
  console.log(check + " is a Armstrong Number");
}
else{
  console.log(check + ' is not a ArmStrong Number');
}
}

