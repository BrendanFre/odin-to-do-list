export default () => {
  const { localStorage } = window;
  const keyArray = [];
  const contentsArray = [];
  Object.keys(localStorage).forEach((element) => {
    keyArray.push(element);
  });
  keyArray.forEach((key) => {
    const newObject = JSON.parse(localStorage[key]);
    newObject.id = key;
    contentsArray.push(newObject);
  });
  console.log(contentsArray);
  return contentsArray;
};
