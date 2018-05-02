'use strict'

function generateBoard(num) {
    var counter = 1;
    var board = [];

    for(let i = 0; i < num; i++) {
        board.push([]);
    }

    var status = true;

    for(let i = board.length - 1; i >= 0; i--) {
        for(let j = 1; j <= num; j++) {
            if(status == true) {
                board[i].push(counter);
                counter++;
                if(j % num == 0) {
                    counter += num-1;
                    status = false;
                }
            } else if(status == false) {
                board[i].push(counter);
                counter--;
                if(j % num == 0) {
                    counter += num+1;
                    status = true;
                }
            }
        }
    }

    return board;
}

console.log(generateBoard(8));