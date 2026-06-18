import type { Conversation } from "@/routes/chat";


export function getCurrentUserId() {
  try {
    const user = JSON.parse(
      localStorage.getItem("user") || "null"
    );

    return user?.id ?? null;

  } catch {
    return null;
  }
}



export function getChatKey() {

  const userId = getCurrentUserId();

  if (!userId) return null;

  return `serenity_chats_${userId}`;
}



export function loadChats(): Conversation[] {

  const key = getChatKey();

  if (!key) {
    return [];
  }


  try {

    const saved = localStorage.getItem(key);

    if (!saved) {
      return [];
    }

    return JSON.parse(saved);

  } catch {

    localStorage.removeItem(key);
    return [];

  }
}



export function saveChats(chats: Conversation[]) {

  const key = getChatKey();

  if (!key) return;

  localStorage.setItem(
    key,
    JSON.stringify(chats)
  );

}



export function clearUserChats() {

  const key = getChatKey();

  if (key) {
    localStorage.removeItem(key);
  }

}