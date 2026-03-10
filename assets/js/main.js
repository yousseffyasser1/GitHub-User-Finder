import { getUser } from "./api.js";
import { displayUser } from "./ui.js";

const input = document.querySelector("#username");
const button = document.querySelector("#searchBtn");
const card = document.querySelector("#userCard");

button.addEventListener("click", () => {
  async function searchUser() {
    const username = input.value;
    card.innerHTML = "Loading...";

    try {
      const user = await getUser(username);
      displayUser(user);
    } catch (error) {
      card.innerHTML = "User not found";
    }
  }
  searchUser();
});
