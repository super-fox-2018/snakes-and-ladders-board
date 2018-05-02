function generateBoard(dimensi) {
  var board = [];
  var jml_angka = dimensi*dimensi;
  for (var i = 0; i < dimensi; i++) {
    var tampung = [];
    var angka = dimensi-1;
    for (var j = 0; j < dimensi; j++) {
      // tampung[j] = 'a';
      if (dimensi%2===0) {
        if (i%2==0) {
          tampung[j] = jml_angka;
          jml_angka -= 1;
        }
        else {
          tampung[angka] = jml_angka;
          jml_angka -= 1;
          angka--;
        }
      }
      else {
        if (i%2!=0) {
          tampung[j] = jml_angka;
          jml_angka -= 1;
        }
        else {
          tampung[angka] = jml_angka;
          jml_angka -= 1;
          angka--;
        }
      }
    }
    // console.log(tampung);
    board[i]=tampung;
  }
  return board;
}
console.log(generateBoard(15));
console.log(generateBoard(8));
