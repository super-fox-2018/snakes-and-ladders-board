function generateBoard(num) {
    var arrNew = generateArray(num, num);
    let angka = num * num;
    let isOdd = (num % 2 !== 0);
    for (let i = 0; i < arrNew.length; i++) {
        if (isOdd) {
            for (let k = arrNew[i].length - 1; k >= 0; k--) {
                arrNew[i][k] = angka;
                angka--;
            }
            isOdd = false;
        } else {
            for (let j = 0; j < arrNew[i].length; j++) {
                arrNew[i][j] = angka;
                angka--;
            }
            isOdd = true;
        }
    }
    return arrNew;
}

function generateArray(row, col) {
    let arrColumn = [];
    for (let i = 0; i < row; i++) {
        let arrRow = [];
        for (let j = 0; j < col; j++) {
            arrRow.push(0);
        }
        arrColumn.push(arrRow);
    }
    return arrColumn;
}

console.log(generateBoard(10));
console.log(generateBoard(15));
console.log(generateBoard(8));
console.log(generateBoard(7));