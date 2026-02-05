let allUsers = [];

const statusText = document.getElementById("status");

async function fetchUsers() {
    statusText.textContent = "Loading...";
    try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    allUsers = data;
    statusText.textContent = "";
    displayUsers(data);
  } catch (error) {
    statusText.textContent = "Failed to load users.";
    console.error("Error fetching users:", error);
  }
}

function displayUsers(users) {
  const container = document.getElementById("users-container");
  container.innerHTML = "";

  users.forEach(user => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${user.name}</h3>
      <p>${user.email}</p>
      <p>${user.company.name}</p>
    `;

    container.appendChild(card);
  });
}

fetchUsers();


document.getElementById("search").addEventListener("input", function(e) {
  const searchValue = e.target.value.toLowerCase();

  const filtered = allUsers.filter(user =>
    user.name.toLowerCase().includes(searchValue)
  );
  if (filtered.length === 0) {
    statusText.textContent = "No users found.";
  } else {
    statusText.textContent = "";
  }

  displayUsers(filtered);
});
