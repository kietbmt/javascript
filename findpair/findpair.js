const findPairsWithSum = (arr, k) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        result.push([arr[i], arr[j]]);
      }
    }
  }

  return result;
};

const arr = [1, 2, 3, 4];
const k = 5;
console.log(findPairsWithSum(arr, k)); 