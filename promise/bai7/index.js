function retryWithBackoff(fn, retries, delay) {
  return fn().catch((error) => {
    if (retries <= 0) {
      throw error; // vẫn thất bại sau retries lần thì reject
    }
    return new Promise((resolve) => setTimeout(resolve, delay)).then(() =>
      retryWithBackoff(fn, retries - 1, delay * 2),
    );
  });
}

const failingTask = () => {
  return new Promise((resolve, reject) => {
    Math.random() > 0.8 ? resolve("Thành công!") : reject("Thất bại, thử lại...");
  });
};

retryWithBackoff(failingTask, 5, 1000).then(console.log).catch(console.error);