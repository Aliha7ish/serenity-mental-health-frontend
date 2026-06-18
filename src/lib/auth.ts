export function isAuthenticated() {
  try {
    const token = localStorage.getItem("access_token");
    return Boolean(token);
  } catch {
    return false;
  }
}