import { getUser, getUserRepos } from "./api.js";
import { displayUser, displayRepos } from "./ui.js";

const input = document.querySelector("#username");
const button = document.querySelector("#searchBtn");
const card = document.querySelector("#userCard");

async function searchUser() {
  const username = input.value.trim();
  if (!username) return;

  card.innerHTML = `<div class="loading"><div class="spinner"></div><span>Searching...</span></div>`;

  try {
    const user = await getUser(username);
    displayUser(user);
    const repos = await getUserRepos(username);
    displayRepos(repos);
  } catch (error) {
    card.innerHTML = `<div class="error-state">
      <i class="fa-regular fa-face-frown"></i>
      <p>User not found</p>
    </div>`;
  }
}

button.addEventListener("click", searchUser);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") searchUser();
});
