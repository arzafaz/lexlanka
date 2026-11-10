import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'lexlanka_bookmarks';

export async function getBookmarks() {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export async function toggleBookmark(id) {
  const list = await getBookmarks();
  const next = list.includes(id) ? list.filter((x) => x !== id) : [...list, id];
  await AsyncStorage.setItem(KEY, JSON.stringify(next));
  return next;
}
