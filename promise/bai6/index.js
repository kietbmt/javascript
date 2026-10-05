function PromiseTimeout(promise, ms) {
  let timer;

  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => reject("Timeout Error!"), ms);
  });

  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
}

const longTask = new Promise((resolve) =>
  setTimeout(() => resolve("Xong!"), 5000),
);

PromiseTimeout(longTask, 2000).then(console.log).catch(console.error);