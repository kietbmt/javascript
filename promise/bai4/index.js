const tasks = [
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve("Task 1 hoàn thành"), 2000),
    ),
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve("Task 2 hoàn thành"), 1000),
    ),
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve("Task 3 hoàn thành"), 1500),
    ),
];

async function runInSequence(tasks) {
  const results = [];

  for (const task of tasks) {
    const result = await task();
    results.push(result);
  }

  return results;
}

runInSequence(tasks).then(console.log);