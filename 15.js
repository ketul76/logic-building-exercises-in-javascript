// count product Number digit

let number = 12345;
let product = 1;

while (number !== 0){
  product = product * (number % 10)
    //        1 * 5   =   5
    //        5 * 4   =   20
    //       20 * 3   =   60
    //       60 * 2   =  120
    //      120 * 1   =  120
    //      120 * 0   =  0
    number = parseInt(number / 10);
    // 1234     
    // 123
    // 12
    // 1
}
console.log(product);
