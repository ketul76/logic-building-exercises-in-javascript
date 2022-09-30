let costprice = 7000;
let sellprice = 6500;
let profit = sellprice - costprice;
let loss = costprice - sellprice;

if (sellprice > costprice){
  console.log(`the profit is ${profit} amount`);
}
else if(costprice > sellprice){
  console.log(`the lose is ${loss} amount`);
}
else {
  console.log('costprice and sellprice are Same');
}