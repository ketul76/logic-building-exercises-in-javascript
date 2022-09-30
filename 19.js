



  // print all prime number between 1 to 100.
  for(let i = 1; i<=100;i++){
      value = 0;
    for(let j = 2;j < i; j++){
      if(i % j === 0){
        value = 1;
        break;
      }
    }
    if(value === 0){
      console.log(i);
    }
  }




