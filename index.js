function generateBoard(num) {
  var output = [];
  var lastNum = num * num;

  if (num % 2 === 0) {
    for (let i = 0; i < num; i++) {
      var steps = [];

      if (i % 2 === 0) {
        if (i === 0) {
          for (let j = 0; j < num; j++) {
            steps.push(lastNum);
            lastNum--;
          }
        }
        else {
          lastNum = lastNum - num - 1;
          for (let j = 0; j < num; j++) {
            steps.push(lastNum);
            lastNum--;
          }
        }
      }
      else {
        lastNum = lastNum - num + 1;
        for (let j = 0; j < num; j++) {
          steps.push(lastNum);
          lastNum++;
        }
      }

      output.push(steps);
    }
  }
  else {
    for (let i = 0; i < num; i++) {
      var steps = [];

      if (i % 2 === 0) {
        lastNum = lastNum - num + 1;
        for (let j = 0; j < num; j++) {
          steps.push(lastNum);
          lastNum++
        }
      }
      else {
        lastNum = lastNum - num - 1;
        for (let j = 0; j < num; j++) {
          steps.push(lastNum);
          lastNum--;
        }
      }

    output.push(steps);
    }
  }

  return output;
}


console.log(generateBoard(10));
console.log(generateBoard(8));
console.log(generateBoard(15));
