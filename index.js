function generateBoard(num){
   var arr = [];

   for(var i = 0; i < num; i++){
     arr.push([]);
   }

   if(num % 2 === 0){
     return isOdd(arr, num);
   }
   else{
     return isEven(arr, num);
   }
}

function isOdd(arr, num){
  var c = 1;
  for(var k = num - 1; k >= 0; k--){
   for(var j = 0; j < num; j++){
     if(k === num-1){
       arr[k].push(c);
       c++;
     }
     else{
       if(k % 2 !== 0){
         arr[k].push(c);
       }
       c++;
     }
    }
   }

   c = num * num;

  for(var x = 0; x < num; x++){
    for(var y = 0; y < num; y++){
      if(x % 2 === 0 && x !== num - 1){
        arr[x].push(c);
      }
     c--;
    }
  }

  return arr;
}

function isEven(arr,num){
  var c = 1;
  for(var k = num - 1; k >= 0; k--){
    for(var j = 0; j < num; j++){
      if(k === num-1){
       arr[k].push(c);
       c++;
      }
      else{
        if(k % 2 === 0){
          arr[k].push(c);
        }
        c++;
      }
    }
  }

  c = num * num;

  for(var x = 0; x < num; x++){
   for(var y = 0; y < num; y++){
     if(x % 2 !== 0 && x !== num - 1){
       arr[x].push(c);
      }
     c--;
    }
  }

  return arr;
}

console.log(generateBoard(15));
console.log(generateBoard(10));
console.log(generateBoard(8));
