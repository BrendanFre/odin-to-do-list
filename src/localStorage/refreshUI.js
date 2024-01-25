import refreshStorage from './refreshStorage';
import singleItemUx from '../item/single-item-ux/single-item-ux';

export default (parent) => {
  const taskListArray = refreshStorage();
  taskListArray.forEach((element) => {
    const newItem = JSON.parse(element);
    console.log(newItem);
    singleItemUx(
      newItem.taskName,
      newItem.taskNotes,
      newItem.taskDue,
      parent,
    );
  });
};
