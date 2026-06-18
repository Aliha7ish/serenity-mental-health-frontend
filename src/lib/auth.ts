export function isAuthenticated() {
  try {
    const token = localStorage.getItem("access_token");
    return Boolean(token);
  } catch {
    return false;
  }
}

export function getUser() {
  const user = localStorage.getItem("user");

  if (!user) return null;

  return JSON.parse(user);
}

export function clearAuth() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("user");
}