function generateBoard(num) {
  let board = [];
  let row = num - 1;
  for (let i = 0; i < num; i++) {
    board.push([]);
    if (row % 2 !== 1) {
      for (let j = 1; j < num + 1; j++) {
        board[i].push(j + (num * row));
      }
    } else {
      for (let j = num; j > 0; j--) {
        board[i].push(j + (num * row));
      }
    }
    row--;
  }
  return board;
}

console.log(generateBoard(14));
