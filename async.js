const posts = [
  { title: "Post one", body: "This is post one" },
  { title: "Post two", body: "This is post two" }
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Something went wrong");
      }
    }, 2000);
  });
}

//Async / Await - better and simple way to do promises
async function init() {
  await createPost({ title: "Post three", body: "This is post three" });
  getPosts();
}

//Using fetch api with async and await
async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}

init();
fetchUsers();
