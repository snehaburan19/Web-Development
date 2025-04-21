/*accountNumber=123456
console.log(accountNumber)*/
// Simulated User Profiles
const users = [
  {
    username: "tech_girl22",
    fullName: "Priya Sharma",
    posts: [
      {
        caption: "Loving the JavaScript grind 💻🔥",
        likes: 10
      },
      {
        caption: "Web dev journey is amazing! 🚀",
        likes: 18
      }
    ]
  },
  {
    username: "code_with_rahul",
    fullName: "Rahul Mehta",
    posts: [
      {
        caption: "Just built my first React app!",
        likes: 25
      }
    ]
  }
];

// Function to like a post
function likePost(userIndex, postIndex) {
  users[userIndex].posts[postIndex].likes++;
  displayFeed(); // Re-render feed
}

// Function to render the Instagram-style feed
function displayFeed() {
  const feed = document.getElementById("feed");
  feed.innerHTML = ""; // Clear current content

  users.forEach((user, userIndex) => {
    user.posts.forEach((post, postIndex) => {
      const postEl = document.createElement("div");
      postEl.className = "post";
      postEl.innerHTML = `
        <h3>@${user.username}</h3>
        <p>${post.caption}</p>
        <p>❤️ ${post.likes} likes</p>
        <button class="like-btn" onclick="likePost(${userIndex}, ${postIndex})">Like</button>
      `;
      feed.appendChild(postEl);
    });
  });
}

// Initial feed render
displayFeed();