export const storage = window.localStorage;

export function checkStorage() {
  try {
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException && (e.code === 22
          || e.code === 1014 || e.name === 'QuotaExceededError'
          || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
          && storage && storage.length !== 0
    );
  }
}

export function returnList() {
  const items = { ...localStorage };
  const newList = [];
  Object.keys(items).forEach((key) => {
    if (key >= 0) {
      Object.values(items).forEach((val) => {
        try {
          const task = JSON.parse(val);
          newList.push(task);
          return newList;
        } catch { return 0; }
      });
    }
  });
}
