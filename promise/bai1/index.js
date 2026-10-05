function fetchUser() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("User Data"), 2000)
  );
}

function fetchPosts() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Post Data"), 3000)
  );
}

function fetchComments() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Comment Data"), 1000)
  );
}

const start = Date.now();

Promise.all([
  fetchUser(),
  fetchPosts(),
  fetchComments()
])
  .then((results) => {
    const end = Date.now();

    console.log(results);
    console.log(`Tổng thời gian: ${end - start} ms`);
  });

