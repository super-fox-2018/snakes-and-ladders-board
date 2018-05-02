function generateBoard(num){

  let hasil=[]
  var angka=num * num
  while(angka >0){
    let tampung =[]
      for(let i=0;i<num;i++){
          tampung=[]
          for(let j=0;j<num;j++){         
          tampung.push(angka)     
          angka--
          }
       
          hasil.push(tampung)
          if(i % 2 !==0){
            hasil[i].reverse()
            }
      }     
      return hasil

    }
}
console.log(generateBoard(10))

