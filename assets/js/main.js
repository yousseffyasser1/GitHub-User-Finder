import { getUser, getUserRepos } from "./api.js";
import { displayUser, displayRepos } from "./ui.js";

const input = document.querySelector("#username");
const button = document.querySelector("#searchBtn");
const card = document.querySelector("#userCard");
const toggleBtn = document.querySelector("#toggleReposBtn");
const reposContainer = document.querySelector("#reposContainer");

reposContainer.style.display = "none";
let isOpen = false;

toggleBtn.style.display = "none";

async function searchUser() {
  const username = input.value.trim();
  if (!username) return;

  card.innerHTML = `<div class="loading"><div class="spinner"></div><span>Searching...</span></div>`;

  try {
    const user = await getUser(username);
    displayUser(user);
    const repos = await getUserRepos(username);
    console.log(repos);
    toggleBtn.style.display = "block";
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

function toggleRepos() {
  if (isOpen === false) {
    reposContainer.style.display = "block";
    toggleBtn.querySelector("span").textContent = "Hide Repos";
    isOpen = true;
    toggleBtn.classList.add("open");
  } else {
    reposContainer.style.display = "none";
    toggleBtn.querySelector("span").textContent = "Review Repos";
    isOpen = false;
    toggleBtn.classList.remove("open");
  }
}

toggleBtn.addEventListener("click", toggleRepos);


