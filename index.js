function generateBoard(angka) {
  var ar1 = [];
  var ar2 = [];
  var genap = 0;
  for (let i = angka; i > 0; i--) {
    ar1 = [];

    genap = angka * i;
    var cek = angka * (i - 1) + 1;

    for (let j = 1; j <= angka; j++) {
      if (i % 2 !== 0) {
        ar1.push(cek);
        cek++;
      } else {
        ar1.push(genap);
        genap--;
      }
    }

    ar2.push(ar1);
  }

  return ar2;
}
console.log(generateBoard(8));
