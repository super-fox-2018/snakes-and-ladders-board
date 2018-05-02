function generateRandomAlp(num1, num2){

    var row = num1;
    var col = num2;
    var arr = [];
    var upLimit = num1*num2;

    
    
    var temp = 0;

    for(let a = 0 ; a <  row; a++){
        arr.push([]) ;
        if(a%2===1){
          for(let c=upLimit-col; c < upLimit ;c++){
            arr[a].push(c);
          }
          upLimit = (upLimit-col)-1;
        }else{
          for(let b=upLimit; b > upLimit-col ;b--){
              arr[a].push(b);
              temp = b
          }
          upLimit = temp;
        }
        
    }
    return(arr);
    

}

console.log(generateRandomAlp(5,5))
//console.log(generateRandomAlp(5,3))