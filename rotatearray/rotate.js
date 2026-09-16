const rotateArrayManual = (arr, x) => {
  const n = arr.length;
  if (n === 0) return arr;

  const shift = ((x % n) + n) % n;
  const result = new Array(n);

  for (let i = 0; i < n; i++) {
    const newIndex = (i + shift) % n;
    result[newIndex] = arr[i];
  }

  return result;
};

console.log(rotateArrayManual([1, 2, 3, 4, 5], 2)); 