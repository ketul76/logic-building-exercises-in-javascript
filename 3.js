// left
/*

    *
   **
  ***
 ****
*****

*/ 
let n = 5;
let string = '';

for(let i=1;i<=n;i++){                 // loop ni condition check karse
  //space print karva mateno loop  
  for(let k = 0;k < n - i;k++){         // space printing karse
    string = string + 'k';                
  }
  for(let j = 0;j<i;j++){               // star print karse
    string = string + '*';       
  }
  string = string + '\n';              // new line
}
console.log(string);