//check a year is leap year or not

let year = 2022;
(year % 4 === 0 && year % 100 !== 0 && year % 400 === 0) ? console.log('This Is a Leap Year') : console.log("This Is Not a Leap Year");

if(year % 4 === 0 && year % 100 !== 0 && year % 400 ===0){
  console.log('this ia leap year');
} 
else {
  console.log('not a leap year');
}