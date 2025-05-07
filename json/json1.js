// Sample JSON data
const usersJSON = `
[
  {
    "name": "Sneha B",
    "email": "sneha@example.com",
    "location": "Hyderabad"
  },
  {
    "name": "Priya A",
    "email": "priya@example.com",
    "location": "Bangalore"
  },
  {
    "name": "Ranjith K",
    "email": "ranjith@example.com",
    "location": "Chennai"
  }
]
`;

// Parse JSON
const users = JSON.parse(usersJSON);

// Get container
const userList = document.getElementById('userList');

// Render each user as a card
users.forEach(user => {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <h3>${user.name}</h3>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Location:</strong> ${user.location}</p>
  `;

  userList.appendChild(card);
});
