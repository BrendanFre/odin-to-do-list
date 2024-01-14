export default function deleteStorageItem(id) {
  const storage = window.localStorage;
  storage.removeItem(id);
}
