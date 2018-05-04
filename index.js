function generateBoard(rows) {
  const board = [];
  let num = 1;
  for (let i = 0; i < rows; i += 1) {
    let isEven = i % 2 === 0;
    const arr = [];
    for (let j = 0; j < rows; j += 1) {
      if (isEven) arr.push(num);
      else arr.unshift(num);
      num += 1;
    }

    board.unshift(arr);
  }

  return board;
}

console.log(generateBoard(15));