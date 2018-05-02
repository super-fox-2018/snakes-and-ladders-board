function generateBoard(arr){
    var result=[]
    var arrKecil=[]
    for (var i=arr*arr; i>0; i--){
        arrKecil.push(i)
        if(arrKecil.length===arr){
            result.push(arrKecil)
            arrKecil=[]
        }
    }
    for (var j=0; j<result.length; j++){
        if(arr%2===0){
          // console.log(j)
            if(j%2!==0){
                result[j].sort(function(a, b){return a-b});
            }
        }
        else {
            if(j%2===0){
                result[j].sort(function(a, b){return a-b});
            }
        }
    }
    return result
}
console.log(generateBoard(10))
console.log(generateBoard(15))
console.log(generateBoard(8))