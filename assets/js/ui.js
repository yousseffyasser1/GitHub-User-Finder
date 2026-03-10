export function displayUser (user) {
  const card = document.querySelector('#userCard');
  const name = user.name || user.login;
  const bio = user.bio ?? 'No bio available';
  const location = user.location ?? 'Unknown';
  const joinDate = new Date(user.created_at).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  });

  card.innerHTML = `
    <div class="user-card">
      <div class="user-card-header">
        <img src="${user.avatar_url}" alt="${user.login}'s avatar">
        <div class="user-info">
          <h2>${name}</h2>
          <div class="login">@${user.login}</div>
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