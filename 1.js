// find a cube of number using function.

//function Declaration
function findCube(c){             // c is Input
  return c*c*c;                  
}
function isEvenOdd(d){            // new Function Declared isEvenOdd
                                   // d na input ma 3 avse
  let rslt = findCube(d)           // pachi findcube() function execute thase 
                                  // findcube() function ma 3*3*3 nu
                                  // rslt namna variable ma store thase.
  console.log(rslt); 
  if(rslt % 2 === 0){              // rslt ma je value hase eni consdition Check thase % 2 modulus thay to even 
    return 'even' 
  }
  return 'odd'                      // nahi to odd
}
console.log(findCube(5));      
console.log(isEvenOdd(3));          // function Call Thase. 3 ni value sathe
console.log(isEvenOdd(4));          // function call thase. 4 ni value sathe