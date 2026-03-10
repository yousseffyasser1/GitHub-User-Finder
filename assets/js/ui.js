export function displayUser (user) {
  const card = document.querySelector('#userCard');
  card.innerHTML = `<img src="${user.avatar_url}" alt="user image">
    <h2><strong>Name : </strong>${user.name}</h2>
    <p><strong>Bio : </strong>${user.bio ?? "NO Bio available" }</p>
    <p><strong>Location : </strong>${user.location ?? "UnKnown"}</p>
    <p><strong>Public Repos : </strong>${user.public_repos}</p>
    <p><strong>Followers : </strong>${user.followers}</p>
    <p><strong>Following : </strong>${user.following}</p>
    <a href="${user.html_url}" rel="">View Profile</a>`;
}