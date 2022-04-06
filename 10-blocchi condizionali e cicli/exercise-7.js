function sumUntil(maxValue) {
  let summ = 0;
  for(let i = 0; i <= maxValue; i++){
    summ = summ + i;
    console.log(i, "+")
  }
  console.log("__");
  console.log(summ);
}

console.log(sumUntil(10));