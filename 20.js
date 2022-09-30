let basic = 22000;

if(basic <= 10000){
  let da  = basic * 0.8;
  let hra = basic * 0.2; 
  let groceSalary = da + hra + basic;
  console.log(groceSalary);
}
else if(basic <= 20000){
  let da  = basic * 0.9;
  let hra = basic * 0.25;
  let groceSalary = da + hra + basic;
  console.log(groceSalary);
}
else {
  let da  = basic * 0.95;
  let hra = basic * 0.3;
  let groceSalary = da + hra + basic;
  console.log(groceSalary);
}