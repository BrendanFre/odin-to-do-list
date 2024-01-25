export default () => {
  const { localStorage } = window;
  const keyArray = [];
  const contentsArray = [];
  Object.keys(localStorage).forEach((element) => {
    keyArray.push(element);
  });
  keyArray.forEach((key) => {
    contentsArray.push(localStorage[key]);
  });
  contentsArray.forEach((element) => {
    console.log(element);
  });
  return contentsArray;
};
