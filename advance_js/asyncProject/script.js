const output = document.getElementById("output");
const loadBtn = document.getElementById("loadBtn");

const USER_URL = "https://jsonplaceholder.typicode.com/users/1";
const POSTS_URL = "https://jsonplaceholder.typiicode.com/posts?userId=1";
const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments?postId=1";
output.textContent = "Click 'Load Data to fetch information...";
async function fetchData() {
  output.textContent = "Loading...\n";
  output.style.textAlign = "left";
  const requests = [
    fetch(USER_URL),
    fetch(POSTS_URL),
    fetch(COMMENTS_URL)
  ];

  const results = await Promise.allSettled(requests);

  const finalData = {};

  if (results[0].status === "fulfilled") {
    finalData.user = await results[0].value.json();
  } else {
    finalData.userError = "Failed to load user";
  }

  if (results[1].status === "fulfilled") {
    finalData.posts = await results[1].value.json();
  } else {
    finalData.postsError = "Failed to load posts";
  }

  if (results[2].status === "fulfilled") {
    finalData.comments = await results[2].value.json();
  } else {
    finalData.commentsError = "Failed to load comments";
  }

  output.textContent = JSON.stringify(finalData, null, 2);
}

loadBtn.addEventListener("click", fetchData);
