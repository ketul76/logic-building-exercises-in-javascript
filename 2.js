//right

let n = 5;              // row and column count
let string = '';        // empty string initialize 

for(let i = 1;i<=n;i++){
  //condition check karse pachi okay hase to bija loop ma jase
  for(let j =0;j<i;j++){    // aa loop j ni value i ni value sathe check karse true hase to aa star print thase
    string = string + '*';  
    // star print thaine farithi check karse condition wrong thase etle
  }
  string = string + '\n'           //condition wrong thase etle aa line break thase then farithi pehla loop ma jase
}
console.log(string);

 /*
       * 
       **
       ***
       ****
       *****
 */







