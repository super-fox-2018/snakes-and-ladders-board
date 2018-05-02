function snakeLadders(jumlahRow, jumlahCol) {
  var array = []
  var numberFillIn = jumlahCol * jumlahRow
  for (let i = 0; i < jumlahRow; i++) {
    var snakeLadders = []
    for (let j = 0; j < jumlahCol; j++) {
      snakeLadders.push(numberFillIn)
      numberFillIn--
    }
    array.push(snakeLadders)
  }
  if (jumlahRow % 2 === 0) {
    for (let i = 0; i < array.length; i++) {
      if (i % 2 !== 0) {
        array[i].reverse()
      }
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        array[i].reverse()
      }
    }
  }

  return array
}

console.log(snakeLadders(10, 10));
