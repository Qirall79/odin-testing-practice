function analyzeArray(arr) {
  let allNumbers = true;

  arr.forEach((element) => {
    if (typeof element != "number") allNumbers = false;
  });

  if (!allNumbers) {
    throw new Error("Give an array of numbers only");
  } else {
    let average,
      min = arr[0],
      max = arr[0],
      length = arr.length;

    average = arr.reduce((prev, curr) => prev + curr, 0) / arr.length;
    arr.forEach((element) => {
      if (element < min) min = element;
    });
    arr.forEach((element) => {
      if (element > max) max = element;
    });

    return {
      average,
      min,
      max,
      length,
    };
  }
}

module.exports = analyzeArray;
