import refreshUI from "./refreshUI";

export default function deleteStorageItem(id) {
  const storage = window.localStorage;
  const list = document.querySelector('.listBody');
  storage.removeItem(id);
  refreshUI(list);
}
