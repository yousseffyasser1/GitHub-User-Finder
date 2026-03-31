export async function getUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (!response.ok) {
    throw new Error("User not found");
  }

  const data = await response.json();
  return data;
}

export async function getUserRepos(username) {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  const data = await response.json();
  return data;
}