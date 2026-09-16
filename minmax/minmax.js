const findMaxMin = (arr) => {
  if (arr.length === 0) {
    return null; 
  }
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { max, min };
};
const arr = [5, 3, 9, -2, 8, 1, 7];
const result = findMaxMin(arr);
console.log("Lớn nhất:", result.max); // 9
console.log("Nhỏ nhất:", result.min); // -2