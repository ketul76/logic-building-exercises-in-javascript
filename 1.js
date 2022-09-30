// Square Pattern

let n = 5  // row or column count
let string = '';  //defining a Empty String

for(let i = 0; i < n; i++){      // external loop
  for(let j = 0; j < n; j++){    // Internal loop
    string = string + "*";
  }
  string = string + "\n";         // newline after each row
}
console.log(string);
