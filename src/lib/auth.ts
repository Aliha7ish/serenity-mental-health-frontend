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

  const user = getUser();

  if (user?.id) {

    localStorage.removeItem(
      `serenity_conversations_${user.id}`
    );

    localStorage.removeItem(
      `serenity_active_chat_${user.id}`
    );
  }


  localStorage.removeItem("access_token");
  localStorage.removeItem("user");
}