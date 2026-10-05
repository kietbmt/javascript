function retry(fn, times) {
  return fn().catch((error) => {
    if (times <= 0) {
      throw error; // hết lượt thử lại thì ném lỗi ra ngoài
    }
    return retry(fn, times - 1); // còn lượt thì thử lại
  });
}

let failingPromise = () => {
  return new Promise((resolve, reject) => {
    Math.random() > 0.7 ? resolve("Thành công") : reject("Thất bại");
  });
};

retry(failingPromise, 3).then(console.log).catch(console.error);