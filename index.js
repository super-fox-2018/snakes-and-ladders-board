'use strict'

var generateSnakesAndLadderBoard = (size) => {
    var output = []
    for(var i = size-1; i >=0; i--){
        output[size-1-i] = []
        if(i%2 == 0){
            for(var n = 1; n <= size; n++){
                output[size-1-i].push(i*size+n)
            }
        }else{
            for(var n = size; n >= 1; n--){
                output[size-1-i].push(i*size+n)
            }
        }
    }
    return output
}
console.log(generateSnakesAndLadderBoard(10))
console.log(generateSnakesAndLadderBoard(15))