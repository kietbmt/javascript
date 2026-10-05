const tasks = Array.from(
  { length: 10 },
  (_, i) => () =>
    new Promise((resolve) =>
      setTimeout(
        () => resolve(`Task ${i + 1} hoàn thành`),
        Math.random() * 3000,
      ),
    ),
);

function runWithLimit(tasks, limit) {
  const results = new Array(tasks.length);
  let nextIndex = 0;

  async function worker() {
    while (nextIndex < tasks.length) {
      const current = nextIndex++; 
      results[current] = await tasks[current]();
    }
  }

  const workers = Array.from(
    { length: Math.min(limit, tasks.length) },
    worker,
  );

  return Promise.all(workers).then(() => results);
}

runWithLimit(tasks, 3).then(console.log);