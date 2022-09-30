function sumOfDigit(num){
  if(num == 0){
        return 0;
  }
    return Math.floor(num % 10 + sumOfDigit(num / 10));
}
console.log(sumOfDigit(1234));
