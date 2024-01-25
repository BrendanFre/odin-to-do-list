export default (id) => {
  const { localStorage } = window;
  if (localStorage.getItem(id)) {
    return 0;
  }
  return 1;
};
