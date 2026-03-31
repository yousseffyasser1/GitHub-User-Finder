function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

export function displayUser (user) {
  const card = document.querySelector('#userCard');
  const name = escapeHTML(user.name || user.login);
  const login = escapeHTML(user.login);
  const bio = escapeHTML(user.bio ?? 'No bio available');
  const location = escapeHTML(user.location ?? 'Unknown');
  const joinDate = new Date(user.created_at).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  });

  card.innerHTML = `
    <div class="user-card">
      <div class="user-card-header">
        <img src="${user.avatar_url}" alt="${login}'s avatar">
        <div class="user-info">
          <h2>${name}</h2>
          <div class="login">@${login}</div>
          <div class="bio">${bio}</div>
        </div>
      </div>

      <div class="user-meta">
        <span><i class="fa-solid fa-location-dot"></i> ${location}</span>
        <span><i class="fa-regular fa-calendar"></i> Joined ${joinDate}</span>
      </div>

      <div class="stats-grid">
        <div class="stat-item">
          <span class="stat-value">${user.public_repos}</span>
          <span class="stat-label">Repos</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">${user.followers}</span>
          <span class="stat-label">Followers</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">${user.following}</span>
          <span class="stat-label">Following</span>
        </div>
      </div>

      <a href="${user.html_url}" target="_blank" rel="noopener noreferrer" class="profile-link">
        <i class="fa-brands fa-github"></i>
        View Profile on GitHub
      </a>
    </div>`;
}


// export function displayRepos(repos) {
//   const reposContainer = document.querySelector("#reposContainer");

//   let reposHTML = "";

//   repos.forEach(repo => {
//     reposHTML += `
//       <div class="repo-item">
//         <h3>${repo.name}</h3>
//         <p>⭐ ${repo.stargazers_count}</p>
//         <p>${repo.language || "Not specified"}</p>
//       </div>
//     `;
//   });

//   reposContainer.innerHTML = reposHTML;
// }


export function displayRepos(repos) {
  const reposContainer = document.querySelector("#reposContainer");

  const langColors = {
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    TypeScript: "#3178c6",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Java: "#b07219",
  };

  let reposHTML = `
    <div class="repos-section">
      <div class="repos-title">
        <i class="fa-solid fa-book"></i>
        Repositories
      </div>
      <div class="repos-grid">
  `;

  repos.forEach(repo => {
    const lang = repo.language || "Unknown";
    const color = langColors[lang] || "#8b949e";

    reposHTML += `
      <div class="repo-item">
        <div class="repo-name">
          <i class="fa-solid fa-code-branch"></i>
          ${repo.name}
        </div>
        <div class="repo-right">
          <div class="repo-stars">
            <i class="fa-solid fa-star"></i>
            ${repo.stargazers_count}
          </div>
          <div class="repo-lang">
            <span class="repo-lang-dot" style="background:${color}"></span>
            ${lang}
          </div>
        </div>
      </div>
    `;
  });

  reposHTML += `</div></div>`;
  reposContainer.innerHTML = reposHTML;
}